"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_products_products_module_ts"],{

/***/ 986:
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 3854);




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 8980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 986);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 3854);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);








let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 3854:
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.html?ngResource */ 5418);
/* harmony import */ var _products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.page.scss?ngResource */ 6978);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);








let ProductsPage = class ProductsPage {
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.usersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'product/list/';
    this.data = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.id = _this.route.snapshot.paramMap.get('id');
      _this.name = _this.route.snapshot.paramMap.get('name');
      yield _this.getData();
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.usersURL + _this2.id).subscribe(res => {
        _this2.loading = false;
        _this2.data = res.products.data;
        console.log(_this2.data);
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  product_screen(id, name) {
    this.router.navigate(['products', id, name]);
  }

};

ProductsPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-products',
  template: _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductsPage);


/***/ }),

/***/ 6978:
/*!********************************************************!*\
  !*** ./src/app/products/products.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "cdk-virtual-scroll-viewport {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 5418:
/*!********************************************************!*\
  !*** ./src/app/products/products.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{ name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n\n  <ion-progress-bar color=\"danger\" *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n\n  <cdk-virtual-scroll-viewport itemSize=\"300\" minBufferPx=\"900\" maxBufferPx=\"1350\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *cdkVirtualFor=\"let item of data\">\n          <ion-card button=\"true\">\n            <ion-img *ngIf=\"item.product_image !== null\" [src]=\"item.product_image?.img_url\">\n            </ion-img>\n\n            <ion-img *ngIf=\"item.product_image === null\"\n              src=\"https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\">\n            </ion-img>\n\n            <ion-card-header>\n              <!-- <ion-card-subtitle>\n                Gifts\n              </ion-card-subtitle> -->\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-label>\n                <h1>\n                  <ion-text color=\"dark\">\n                    {{ item.prod_title }}\n                  </ion-text>\n                </h1>\n                <!-- <p>\n            <ion-text color=\"medium\">\n              {{ item.important_details }}\n            </ion-text>\n          </p> -->\n                <p style=\"font-size: 1.2rem;\">\n                  <ion-text color=\"primary\">\n                    ${{ item.prod_price }}\n                  </ion-text>\n                </p>\n              </ion-label>\n            </ion-card-content>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </cdk-virtual-scroll-viewport>\n\n\n\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_products_products_module_ts.js.map