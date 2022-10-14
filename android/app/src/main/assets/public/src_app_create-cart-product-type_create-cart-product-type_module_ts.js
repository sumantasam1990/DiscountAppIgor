"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-cart-product-type_create-cart-product-type_module_ts"],{

/***/ 5824:
/*!*************************************************************************************!*\
  !*** ./src/app/create-cart-product-type/create-cart-product-type-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductTypePageRoutingModule": () => (/* binding */ CreateCartProductTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_cart_product_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-product-type.page */ 8452);




const routes = [
    {
        path: '',
        component: _create_cart_product_type_page__WEBPACK_IMPORTED_MODULE_0__.CreateCartProductTypePage
    }
];
let CreateCartProductTypePageRoutingModule = class CreateCartProductTypePageRoutingModule {
};
CreateCartProductTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateCartProductTypePageRoutingModule);



/***/ }),

/***/ 5285:
/*!*****************************************************************************!*\
  !*** ./src/app/create-cart-product-type/create-cart-product-type.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductTypePageModule": () => (/* binding */ CreateCartProductTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_cart_product_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-product-type-routing.module */ 5824);
/* harmony import */ var _create_cart_product_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart-product-type.page */ 8452);







let CreateCartProductTypePageModule = class CreateCartProductTypePageModule {
};
CreateCartProductTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_cart_product_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateCartProductTypePageRoutingModule
        ],
        declarations: [_create_cart_product_type_page__WEBPACK_IMPORTED_MODULE_1__.CreateCartProductTypePage]
    })
], CreateCartProductTypePageModule);



/***/ }),

/***/ 8452:
/*!***************************************************************************!*\
  !*** ./src/app/create-cart-product-type/create-cart-product-type.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductTypePage": () => (/* binding */ CreateCartProductTypePage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_cart_product_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart-product-type.page.html?ngResource */ 6273);
/* harmony import */ var _create_cart_product_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-cart-product-type.page.scss?ngResource */ 7768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 2340);










let CreateCartProductTypePage = class CreateCartProductTypePage {
  constructor(router, route, http, loadingctrl) {
    this.router = router;
    this.route = route;
    this.http = http;
    this.loadingctrl = loadingctrl;
    this.prodType = '';
    this.cartId = '';
    this.urlCartSave = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.serverAPI + 'cart/save/step2';
    this.urlGetTypes = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.serverAPI + 'get/product/types/';
    this.urlGetTypesDelete = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.serverAPI + 'get/product/types/delete/';
    this.types = [];
  }

  ngOnInit() {
    this.cartId = this.route.snapshot.paramMap.get('id');
    this.http.get(this.urlGetTypes + this.cartId).subscribe(res => {
      this.types = res.data;
    });
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

  addType() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.presentLoading();
      const params = new URLSearchParams();
      params.set('cartId', _this2.cartId);
      params.set('cate', _this2.prodType);

      _this2.http.post(_this2.urlCartSave, params).subscribe(response => {
        _this2.loadingctrl.dismiss();

        if (response.id) {
          _this2.prodType = ''; //get data

          _this2.http.get(_this2.urlGetTypes + _this2.cartId).subscribe(res => {
            _this2.types = res.data;
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

  delete(id) {
    this.http.get(this.urlGetTypesDelete + id).subscribe(res => {
      this.http.get(this.urlGetTypes + this.cartId).subscribe(resp => {
        this.types = resp.data;
      });
    });
  }

  product(id) {
    this.router.navigate(['create-cart-product', id]);
  }

};

CreateCartProductTypePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}];

CreateCartProductTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-create-cart-product-type',
  template: _create_cart_product_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_cart_product_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateCartProductTypePage);


/***/ }),

/***/ 7768:
/*!****************************************************************************************!*\
  !*** ./src/app/create-cart-product-type/create-cart-product-type.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content .flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jYXJ0LXByb2R1Y3QtdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQUoiLCJmaWxlIjoiY3JlYXRlLWNhcnQtcHJvZHVjdC10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 6273:
/*!****************************************************************************************!*\
  !*** ./src/app/create-cart-product-type/create-cart-product-type.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>Product Type - Cart</ion-title>\n\n<!--    <ion-button (click)=\"next()\" slot=\"end\" fill=\"clear\" color=\"dark\">-->\n<!--      Next-->\n<!--    </ion-button>-->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"flex\">\n    <ion-list>\n      <ion-item-group>\n        <ion-list-header>\n          Add Product Type/Category\n        </ion-list-header>\n        <ion-item>\n<!--          <ion-select interface=\"popover\" placeholder=\"Category\">-->\n<!--            <ion-select-option value=\"apples\">Type 1</ion-select-option>-->\n<!--            <ion-select-option value=\"oranges\">Type 2</ion-select-option>-->\n<!--            <ion-select-option value=\"bananas\">Create your own</ion-select-option>-->\n<!--          </ion-select>-->\n          <ion-input type=\"text\" inputmode=\"text\" [(ngModel)]=\"prodType\" name=\"prodType\"></ion-input>\n        </ion-item>\n\n          <ion-button fill=\"solid\" shape=\"round\" color=\"dark\" expand=\"block\" style=\"margin-top: 14px;\" (click)=\"addType()\">\n            <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n            Add\n          </ion-button>\n\n      </ion-item-group>\n\n\n      <div class=\"flex\">\n        <ion-chip *ngFor=\"let item of types\" color=\"dark\" (click)=\"product(item.id)\">\n          <ion-label>{{item.cate_name}}</ion-label>\n          <ion-icon (click)=\"delete(item.id)\" name=\"close-circle\"></ion-icon>\n        </ion-chip>\n\n      </div>\n\n\n\n    </ion-list>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-cart-product-type_create-cart-product-type_module_ts.js.map