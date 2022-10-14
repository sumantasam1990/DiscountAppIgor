"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_product-type_product-type_module_ts"],{

/***/ 578:
/*!*************************************************************!*\
  !*** ./src/app/product-type/product-type-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTypePageRoutingModule": () => (/* binding */ ProductTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _product_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-type.page */ 3856);




const routes = [
    {
        path: '',
        component: _product_type_page__WEBPACK_IMPORTED_MODULE_0__.ProductTypePage
    }
];
let ProductTypePageRoutingModule = class ProductTypePageRoutingModule {
};
ProductTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductTypePageRoutingModule);



/***/ }),

/***/ 5269:
/*!*****************************************************!*\
  !*** ./src/app/product-type/product-type.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTypePageModule": () => (/* binding */ ProductTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _product_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-type-routing.module */ 578);
/* harmony import */ var _product_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-type.page */ 3856);







let ProductTypePageModule = class ProductTypePageModule {
};
ProductTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductTypePageRoutingModule
        ],
        declarations: [_product_type_page__WEBPACK_IMPORTED_MODULE_1__.ProductTypePage]
    })
], ProductTypePageModule);



/***/ }),

/***/ 3856:
/*!***************************************************!*\
  !*** ./src/app/product-type/product-type.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTypePage": () => (/* binding */ ProductTypePage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-type.page.html?ngResource */ 4004);
/* harmony import */ var _product_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-type.page.scss?ngResource */ 6697);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);











let ProductTypePage = class ProductTypePage {
  constructor(http, route, router, loadingctrl) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.loadingctrl = loadingctrl;
    this.usersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'product/type/';
    this.urlCartSave = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'save/cart/store';
    this.urlFollowUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'follow/user/store';
    this.data = [];
    this.following = false;
    this.savedCart = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.id = _this.route.snapshot.paramMap.get('id');
      _this.name = _this.route.snapshot.paramMap.get('name');
      yield _this.getData();
    })();
  }

  presentLoading() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingctrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait... Do not close or minimize or back the app',
        duration: 15000
      });
      yield loading.present();
    })();
  }

  getData() {
    var _this3 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = true;
      yield _this3.http.get(_this3.usersURL + _this3.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.retry)(3)).toPromise().then(res => {
        console.log(res);
        _this3.loading = false;
        _this3.data = res.cart[0];

        if (res.save_cart > 0) {
          _this3.savedCart = true;
        }

        if (res.followed > 0) {
          _this3.following = true;
        }
      }, error => {
        alert('Error! ' + error);
      });
    })();
  } // eslint-disable-next-line @typescript-eslint/naming-convention


  product_screen(id, name) {
    this.router.navigate(['products', id, name]);
  } // eslint-disable-next-line @typescript-eslint/naming-convention


  save_cart() {
    const params = new URLSearchParams();
    params.set('cart', this.id);
    this.http.post(this.urlCartSave, params).subscribe(response => {
      // this.loadingctrl.dismiss();
      if (response.id) {
        this.savedCart = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          title: 'Success!',
          text: 'Cart saved into your account.',
          icon: 'success',
          heightAuto: false
        });
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          title: 'Error!',
          text: response.error,
          icon: 'error',
          heightAuto: false
        });
      }
    });
  }

  follow(id) {
    const params = new URLSearchParams();
    params.set('userId', id);
    this.http.post(this.urlFollowUser, params).subscribe(response => {
      // this.loadingctrl.dismiss();
      if (response.id) {
        this.following = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          title: 'Success!',
          text: 'Following',
          icon: 'success',
          heightAuto: false
        });
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          title: 'Error!',
          text: response.error,
          icon: 'error',
          heightAuto: false
        });
      }
    });
  }

  gotoProfile(id) {
    this.router.navigate(['publicprofile', id]);
  }

};

ProductTypePage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}];

ProductTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-product-type',
  template: _product_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductTypePage);


/***/ }),

/***/ 6697:
/*!****************************************************************!*\
  !*** ./src/app/product-type/product-type.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-img::part(image) {\n  width: 100%;\n  max-height: 250px;\n  object-fit: cover;\n  border-radius: 12px !important;\n  border: 2px solid #ff5353;\n}\n\nion-chip {\n  --background: #ffe01d;\n  --color: #000000;\n  margin-top: 20px;\n}\n\n.name_user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  align-content: space-between;\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJwcm9kdWN0LXR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZzo6cGFydChpbWFnZSkge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjUzNTM7XG59XG5cbmlvbi1jaGlwIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlMDFkO1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubmFtZV91c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcblxufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 4004:
/*!****************************************************************!*\
  !*** ./src/app/product-type/product-type.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{ name }}</ion-title>\n\n    <ion-button *ngIf=\"!savedCart\" slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"save_cart()\">\n      Save cart\n    </ion-button>\n    <ion-button *ngIf=\"savedCart\" slot=\"end\" fill=\"clear\" color=\"dark\">\n      Saved\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-progress-bar color=\"danger\" *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n  <ion-label class=\"ion-text-wrap\">\n    <h1>\n      <ion-text>\n        {{data.cart}}\n      </ion-text>\n    </h1>\n  </ion-label>\n  <ion-img [src]=\"data.cart_photo\"></ion-img>\n\n  <ion-text color=\"primary\" (click)=\"gotoProfile(data.user?.id)\">\n    <h4>{{ data.user?.name }}</h4>\n  </ion-text>\n\n  <div class=\"name_user\">\n\n    <ion-button fill=\"solid\" size=\"small\" color=\"light\">{{ data.opens }} Opens</ion-button>\n\n    <ion-button *ngIf=\"following\" fill=\"solid\" size=\"small\" color=\"dark\" >Following</ion-button>\n\n    <ion-button *ngIf=\"!following\" fill=\"outline\" size=\"small\" color=\"dark\" (click)=\"follow(data.user?.id)\">Follow</ion-button>\n\n  </div>\n\n  <ion-accordion-group>\n    <ion-accordion value=\"first\">\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Description</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        {{ data.description }}\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-chip (click)=\"product_screen(item.typeId, item.type)\" *ngFor=\"let item of data.product_categories\">\n    <ion-label>{{ item.type }}</ion-label>\n  </ion-chip>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_product-type_product-type_module_ts.js.map