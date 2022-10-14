"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-cart-product-images_create-cart-product-images_module_ts"],{

/***/ 9546:
/*!*****************************************************************************************!*\
  !*** ./src/app/create-cart-product-images/create-cart-product-images-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductImagesPageRoutingModule": () => (/* binding */ CreateCartProductImagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_cart_product_images_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-product-images.page */ 7714);




const routes = [
    {
        path: '',
        component: _create_cart_product_images_page__WEBPACK_IMPORTED_MODULE_0__.CreateCartProductImagesPage
    }
];
let CreateCartProductImagesPageRoutingModule = class CreateCartProductImagesPageRoutingModule {
};
CreateCartProductImagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateCartProductImagesPageRoutingModule);



/***/ }),

/***/ 3815:
/*!*********************************************************************************!*\
  !*** ./src/app/create-cart-product-images/create-cart-product-images.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductImagesPageModule": () => (/* binding */ CreateCartProductImagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_cart_product_images_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-product-images-routing.module */ 9546);
/* harmony import */ var _create_cart_product_images_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart-product-images.page */ 7714);







let CreateCartProductImagesPageModule = class CreateCartProductImagesPageModule {
};
CreateCartProductImagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_cart_product_images_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateCartProductImagesPageRoutingModule
        ],
        declarations: [_create_cart_product_images_page__WEBPACK_IMPORTED_MODULE_1__.CreateCartProductImagesPage]
    })
], CreateCartProductImagesPageModule);



/***/ }),

/***/ 7714:
/*!*******************************************************************************!*\
  !*** ./src/app/create-cart-product-images/create-cart-product-images.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartProductImagesPage": () => (/* binding */ CreateCartProductImagesPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_cart_product_images_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart-product-images.page.html?ngResource */ 985);
/* harmony import */ var _create_cart_product_images_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-cart-product-images.page.scss?ngResource */ 8457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);











let CreateCartProductImagesPage = class CreateCartProductImagesPage {
  constructor(router, route, http, loadingctrl) {
    this.router = router;
    this.route = route;
    this.http = http;
    this.loadingctrl = loadingctrl;
    this.imageData = '';
    this.mainPhoto = '';
    this.urlCartSave = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serverAPI + 'cart/save/step4';
    this.urlGetPhotos = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serverAPI + 'get/product/images/';
    this.prodId = '';
    this.photos = [];
  }

  ngOnInit() {
    this.prodId = this.route.snapshot.paramMap.get('id');
    this.http.get(this.urlGetPhotos + this.prodId).subscribe(res => {
      this.photos = res.data;
    });
  }

  takePhoto() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 60,
        allowEditing: true,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        saveToGallery: true,
        presentationStyle: 'popover'
      });
      _this.imageData = image.base64String;
      _this.mainPhoto = image.webPath;
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

  upload() {
    var _this3 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.presentLoading();
      const params = new URLSearchParams();
      params.set('prod', _this3.prodId);
      params.set('photo', _this3.imageData);

      _this3.http.post(_this3.urlCartSave, params).subscribe(response => {
        _this3.loadingctrl.dismiss();

        _this3.imageData = '';

        if (response.upload) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Success!',
            icon: 'success',
            heightAuto: false
          }).then(() => {
            _this3.http.get(_this3.urlGetPhotos + _this3.prodId).subscribe(res => {
              _this3.photos = res.data;
            });
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
    })();
  }

  finish() {
    this.router.navigate(['tabs/tab2']);
  }

};

CreateCartProductImagesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

CreateCartProductImagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-create-cart-product-images',
  template: _create_cart_product_images_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_cart_product_images_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateCartProductImagesPage);


/***/ }),

/***/ 8457:
/*!********************************************************************************************!*\
  !*** ./src/app/create-cart-product-images/create-cart-product-images.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2FydC1wcm9kdWN0LWltYWdlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 985:
/*!********************************************************************************************!*\
  !*** ./src/app/create-cart-product-images/create-cart-product-images.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>Product Images - Cart</ion-title>\n\n    <ion-button (click)=\"finish()\" slot=\"end\" fill=\"clear\" color=\"dark\">\n      Finish\n    </ion-button>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button (click)=\"takePhoto()\" fill=\"outline\" expand=\"block\" color=\"dark\">\n    <ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\n    Choose Photo\n  </ion-button>\n\n  <ion-button (click)=\"upload()\" fill=\"solid\" expand=\"block\" color=\"success\">\n    <ion-icon name=\"cloud-upload-outline\" slot=\"start\"></ion-icon>\n    Upload\n  </ion-button>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of photos\">\n        <ion-img [src]=\"item.img_url\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-cart-product-images_create-cart-product-images_module_ts.js.map