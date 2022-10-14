(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4115:
/*!************************************!*\
  !*** ./src/app/AuthInterceptor.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2891);



let AuthInterceptor = class AuthInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentAuthToken = this.auth.currentAuthTokenValue();
        if (currentAuthToken && currentAuthToken) {
            const headers = {
                'Authorization': `Bearer ${currentAuthToken}`,
            };
            if (request.responseType === 'json') {
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            request = request.clone({
                setHeaders: headers
            });
        }
        return next.handle(request);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 4314:
/*!*************************************!*\
  !*** ./src/app/ErrorInterceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2891);





let ErrorInterceptor = class ErrorInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.auth.logout();
            }
            const error = err.error.message || err.error.detail || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'level-one/:id/:name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
    },
    {
        path: 'level-two/:id/:name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_level-two_level-two_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./level-two/level-two.module */ 3086)).then(m => m.LevelTwoPageModule)
    },
    {
        path: 'carts/:id/:name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_carts_carts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./carts/carts.module */ 2120)).then(m => m.CartsPageModule)
    },
    {
        path: 'main-categories',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main-categories_main-categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main-categories/main-categories.module */ 8660)).then(m => m.MainCategoriesPageModule)
    },
    {
        path: 'products/:id/:name',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 8980)).then(m => m.ProductsPageModule)
    },
    {
        path: 'product-type/:id/:name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_product-type_product-type_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-type/product-type.module */ 5269)).then(m => m.ProductTypePageModule)
    },
    {
        path: 'create-cart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_create-cart_create-cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-cart/create-cart.module */ 1049)).then(m => m.CreateCartPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(m => m.SignupPageModule)
    },
    {
        path: 'create-cart-product-type/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_create-cart-product-type_create-cart-product-type_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-cart-product-type/create-cart-product-type.module */ 5285)).then(m => m.CreateCartProductTypePageModule)
    },
    {
        path: 'create-cart-product/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_create-cart-product_create-cart-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-cart-product/create-cart-product.module */ 4725)).then(m => m.CreateCartProductPageModule)
    },
    {
        path: 'create-cart-product-images/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_create-cart-product-images_create-cart-product-images_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-cart-product-images/create-cart-product-images.module */ 3815)).then(m => m.CreateCartProductImagesPageModule)
    },
    {
        path: 'publicprofile/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_publicprofile_publicprofile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./publicprofile/publicprofile.module */ 3428)).then(m => m.PublicprofilePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);






let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Light });
        if (localStorage.getItem('token')) {
            router.navigate(['']);
        }
        else {
            router.navigate(['login']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);

// the end end.......


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _AuthInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthInterceptor */ 4115);
/* harmony import */ var _ErrorInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorInterceptor */ 4314);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 8727);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot({
                rippleEffect: true,
                // mode: 'md',
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__.SweetAlert2Module.forRoot(),],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor,
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _ErrorInterceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor,
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);

// the end
//---


/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);







let AuthService = class AuthService {
  constructor(http, router, loadingctrl, nav) {
    this.http = http;
    this.router = router;
    this.loadingctrl = loadingctrl;
    this.nav = nav;
    this.authURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.serverAPI + 'sanctum/token';
  }

  login(username, password) {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.presentLoading();

      const myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(); //myheader.set('Access-Control-Allow-Origin', '*');

      myheader.set('Content-Type', 'application/x-www-form-urlencoded');
      const formData = new FormData();
      formData.append('email', username);
      formData.append('password', password);

      _this.http.post(_this.authURL, formData, {
        headers: myheader
      }).subscribe(response => {
        _this.loadingctrl.dismiss();

        if (response.token) {
          localStorage.setItem('token', response.token);

          _this.nav.navigateRoot('');
        } else {
          alert(response.err);
        }
      });
    })();
  }

  currentAuthTokenValue() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    return this.nav.navigateRoot('login');
  }

  presentLoading() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingctrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait... Do not close or minimize or back the app',
        duration: 8000
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
      console.log('Loading dismissed!');
    })();
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverAPI: 'https://cartingly.com/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		2312,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map