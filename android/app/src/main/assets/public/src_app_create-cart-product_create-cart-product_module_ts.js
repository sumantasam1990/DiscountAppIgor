"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-cart-product_create-cart-product_module_ts"],{

/***/ 9435:
/*!***************************************************************************!*\
  !*** ./src/app/create-cart-product/create-cart-product-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductPageRoutingModule": () => (/* binding */ CreateCartProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_cart_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-product.page */ 2083);




const routes = [
    {
        path: '',
        component: _create_cart_product_page__WEBPACK_IMPORTED_MODULE_0__.CreateCartProductPage
    }
];
let CreateCartProductPageRoutingModule = class CreateCartProductPageRoutingModule {
};
CreateCartProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateCartProductPageRoutingModule);



/***/ }),

/***/ 4725:
/*!*******************************************************************!*\
  !*** ./src/app/create-cart-product/create-cart-product.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductPageModule": () => (/* binding */ CreateCartProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_cart_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-product-routing.module */ 9435);
/* harmony import */ var _create_cart_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart-product.page */ 2083);







let CreateCartProductPageModule = class CreateCartProductPageModule {
};
CreateCartProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_cart_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateCartProductPageRoutingModule
        ],
        declarations: [_create_cart_product_page__WEBPACK_IMPORTED_MODULE_1__.CreateCartProductPage]
    })
], CreateCartProductPageModule);



/***/ }),

/***/ 2083:
/*!*****************************************************************!*\
  !*** ./src/app/create-cart-product/create-cart-product.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductPage": () => (/* binding */ CreateCartProductPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_cart_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart-product.page.html?ngResource */ 6485);
/* harmony import */ var _create_cart_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-cart-product.page.scss?ngResource */ 7463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);










let CreateCartProductPage = class CreateCartProductPage {
  constructor(loading, router, route, http, loadingctrl) {
    this.loading = loading;
    this.router = router;
    this.route = route;
    this.http = http;
    this.loadingctrl = loadingctrl;
    this.title = '';
    this.imp = '';
    this.price = '';
    this.buy = '';
    this.url = '';
    this.typeId = '';
    this.urlSaveCart = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.serverAPI + 'cart/save/step3';
  }

  ngOnInit() {
    this.typeId = this.route.snapshot.paramMap.get('id');
  }

  presentLoading() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingctrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait... Do not close or minimize or back the app',
        duration: 15000
      });
      yield loading.present();
    })();
  }

  next() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.presentLoading();
      const params = new URLSearchParams();
      params.set('title', _this2.title);
      params.set('imp', _this2.imp);
      params.set('price', _this2.price);
      params.set('buy', _this2.buy);
      params.set('url', _this2.url);
      params.set('cate', _this2.typeId);

      _this2.http.post(_this2.urlSaveCart, params).subscribe(response => {
        _this2.loadingctrl.dismiss();

        if (response.id) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Success!',
            text: 'Product added successfully.',
            icon: 'success',
            heightAuto: false
          }).then(() => {
            _this2.router.navigate(['create-cart-product-images', response.id]);
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Error!',
            text: response.error,
            icon: 'error',
            heightAuto: false
          });
        }
      });
    })();
  }

};

CreateCartProductPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

CreateCartProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-create-cart-product',
  template: _create_cart_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_cart_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateCartProductPage);


/***/ }),

/***/ 7463:
/*!******************************************************************************!*\
  !*** ./src/app/create-cart-product/create-cart-product.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2FydC1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6485:
/*!******************************************************************************!*\
  !*** ./src/app/create-cart-product/create-cart-product.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>Product - Cart</ion-title>\n\n    <ion-button (click)=\"next()\" slot=\"end\" fill=\"clear\" color=\"dark\">\n      Next\n    </ion-button>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Product Title</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-input [(ngModel)]=\"title\" name=\"title\" type=\"text\" inputmode=\"text\" placeholder=\"Product name\"></ion-input>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Product Description</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-input [(ngModel)]=\"imp\" name=\"imp\" type=\"text\" inputmode=\"text\" placeholder=\"Product nice and short description\"></ion-input>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Product Price</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-input [(ngModel)]=\"price\" name=\"price\" type=\"number\" inputmode=\"number\" placeholder=\"Price in decimal. eg. 2.99\"></ion-input>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Where To Buy</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-input [(ngModel)]=\"buy\" name=\"buy\" type=\"text\" inputmode=\"text\" placeholder=\"eg. amazon\"></ion-input>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Product Shop URL</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-input [(ngModel)]=\"url\" name=\"url\" type=\"url\" inputmode=\"url\" placeholder=\"eg. https://amazon.com/product/link\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-cart-product_create-cart-product_module_ts.js.map