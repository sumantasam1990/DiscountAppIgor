"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-cart_create-cart_module_ts"],{

/***/ 160:
/*!***********************************************************!*\
  !*** ./src/app/create-cart/create-cart-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartPageRoutingModule": () => (/* binding */ CreateCartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart.page */ 2673);




const routes = [
    {
        path: '',
        component: _create_cart_page__WEBPACK_IMPORTED_MODULE_0__.CreateCartPage
    }
];
let CreateCartPageRoutingModule = class CreateCartPageRoutingModule {
};
CreateCartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateCartPageRoutingModule);



/***/ }),

/***/ 1049:
/*!***************************************************!*\
  !*** ./src/app/create-cart/create-cart.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartPageModule": () => (/* binding */ CreateCartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cart-routing.module */ 160);
/* harmony import */ var _create_cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart.page */ 2673);







let CreateCartPageModule = class CreateCartPageModule {
};
CreateCartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateCartPageRoutingModule
        ],
        declarations: [_create_cart_page__WEBPACK_IMPORTED_MODULE_1__.CreateCartPage]
    })
], CreateCartPageModule);



/***/ }),

/***/ 2673:
/*!*************************************************!*\
  !*** ./src/app/create-cart/create-cart.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCartPage": () => (/* binding */ CreateCartPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart.page.html?ngResource */ 1288);
/* harmony import */ var _create_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-cart.page.scss?ngResource */ 6142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);











let CreateCartPage = class CreateCartPage {
  constructor(actionSheetCtrl, router, http, loadingctrl) {
    this.actionSheetCtrl = actionSheetCtrl;
    this.router = router;
    this.http = http;
    this.loadingctrl = loadingctrl;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serverAPI + 'level/one/show/';
    this.urlTwo = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serverAPI + 'level/two/show/';
    this.urlCartSave = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serverAPI + 'cart/save/step1';
    this.mainPhoto = '';
    this.loading = false;
    this.maincategory = '';
    this.levelOneData = '';
    this.singleMulti = '';
    this.levelOne = [];
    this.levelTwo = [];
    this.levelTwoData = '';
    this.cart = {
      cartName: '',
      cartDesc: ''
    };
    this.imageData = '';
  }

  ngOnInit() {}

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

  getMainCate(e) {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.maincategory = e.detail.value;
      yield _this2.getLevelOne();
    })();
  }

  getSingleMulti(e) {
    var _this3 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.singleMulti = e.detail.value;
    })();
  }

  selectLevelOne(e) {
    var _this4 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.levelOneData = e.detail.value;
      yield _this4.getLevelTwo();
    })();
  } // eslint-disable-next-line @typescript-eslint/naming-convention


  level_two(e) {
    var _this5 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.levelTwoData = e.detail.value;
    })();
  }

  choosePhoto() {
    var _this6 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.presentActionSheet();
    })();
  }

  getLevelOne() {
    var _this7 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.loading = true;
      yield _this7.http.get(_this7.url + _this7.maincategory).subscribe(res => {
        _this7.loading = false;
        _this7.levelOne = res.level_ones;
      }, error => {// alert('Error! ' + error);
      });
    })();
  }

  getLevelTwo() {
    var _this8 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.loading = true;
      yield _this8.http.get(_this8.urlTwo + _this8.levelOneData).subscribe(res => {
        _this8.loading = false;
        _this8.levelTwo = res.level_twos;
      }, error => {// alert('Error! ' + error);
      });
    })();
  }

  presentActionSheet() {
    var _this9 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this9.actionSheetCtrl.create({
        header: 'Upload Photo',
        subHeader: 'Main cart photo',
        buttons: [// {
        //   text: 'File',
        //   //role: 'destructive',
        //   data: {
        //     action: 'file',
        //   },
        // },
        {
          text: 'Camera',
          data: {
            action: 'camera'
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }]
      });
      yield actionSheet.present();
      const result = yield actionSheet.onDidDismiss();

      if (result.data.action === 'file') {// await this.takePhotoLibrary();
      } else if (result.data.action === 'camera') {
        yield _this9.takePhoto();
      }
    })();
  } // async takePhotoLibrary() {
  //     const image = await Camera.pickImages({
  //       quality: 60,
  //       presentationStyle: 'popover',
  //       limit: 1,
  //     });
  //     image.photos.map((res) => {
  //       this.imageData = res.webPath;
  //       this.mainPhoto = res.webPath;
  //     });
  // }


  takePhoto() {
    var _this10 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 60,
        allowEditing: true,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        saveToGallery: true,
        presentationStyle: 'popover'
      });
      _this10.imageData = image.base64String;
      _this10.mainPhoto = image.dataUrl;
    })();
  }

  processData() {
    var _this11 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.presentLoading();
      const params = new URLSearchParams();
      params.set('cart', _this11.cart.cartName);
      params.set('desc', _this11.cart.cartDesc);
      params.set('two', _this11.levelTwoData);
      params.set('main_cate', _this11.maincategory);
      params.set('photo', _this11.imageData);
      params.set('single_multi', _this11.singleMulti);

      _this11.http.post(_this11.urlCartSave, params).subscribe(response => {
        _this11.loadingctrl.dismiss();

        if (response.id) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Success!',
            text: 'Now You can add product category/type and under the product type you can add multiple products.',
            icon: 'success',
            heightAuto: false
          }).then(() => {
            _this11.router.navigate(['create-cart-product-type', response.id]);
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

  next() {
    this.processData();
  }

};

CreateCartPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

CreateCartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-create-cart',
  template: _create_cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateCartPage);


/***/ }),

/***/ 6142:
/*!**************************************************************!*\
  !*** ./src/app/create-cart/create-cart.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2FydC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1288:
/*!**************************************************************!*\
  !*** ./src/app/create-cart/create-cart.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>Create Cart</ion-title>\n\n    <ion-button (click)=\"next()\" slot=\"end\" fill=\"clear\" color=\"dark\">\n      Next\n    </ion-button>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"flex\">\n    <ion-list lines=\"none\">\n      <ion-item-group>\n        <ion-radio-group (ionChange)=\"getMainCate($event)\">\n          <ion-list-header>\n            Choose A List\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>Places</ion-label>\n            <ion-radio mode=\"md\" slot=\"start\" value=\"1\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Products</ion-label>\n            <ion-radio mode=\"md\" slot=\"start\" value=\"2\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Brands</ion-label>\n            <ion-radio mode=\"md\" slot=\"start\" value=\"3\"></ion-radio>\n          </ion-item>\n\n\n        </ion-radio-group>\n      </ion-item-group>\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item-group>\n        <ion-radio-group (ionChange)=\"getSingleMulti($event)\">\n          <ion-list-header>\n            Choose Single Or Multiple Cart\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>Single</ion-label>\n            <ion-radio mode=\"md\" slot=\"start\" value=\"single\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Multiple</ion-label>\n            <ion-radio mode=\"md\" slot=\"start\" value=\"multi\"></ion-radio>\n          </ion-item>\n\n\n\n\n        </ion-radio-group>\n      </ion-item-group>\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item-group>\n        <ion-list-header>Levels</ion-list-header>\n        <ion-item>\n          <ion-select interface=\"popover\" placeholder=\"Level One\" (ionChange)=\"selectLevelOne($event)\">\n            <ion-select-option *ngFor=\"let item of levelOne\" [value]=\"item.oneId\">{{item.title}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-select interface=\"popover\" placeholder=\"Level Two\" (ionChange)=\"level_two($event)\">\n            <ion-select-option *ngFor=\"let item of levelTwo\" [value]=\"item.twoId\">{{item.title}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-item-group>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item-group>\n        <ion-list-header>Cart Info</ion-list-header>\n        <ion-item>\n<!--          <ion-label position=\"floating\">Name Of Cart</ion-label>-->\n          <ion-input type=\"text\" placeholder=\"Name Of Cart\" inputmode=\"text\" [(ngModel)]=\"cart.cartName\" name=\"cartName\"></ion-input>\n\n        </ion-item>\n        <ion-item>\n<!--          <ion-label position=\"floating\">Important Details</ion-label>-->\n          <ion-textarea [(ngModel)]=\"cart.cartDesc\" placeholder=\"Important Details: For example, this is where you would paste a recipe.\" name=\"cartDesc\"></ion-textarea>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-divider></ion-item-divider>\n      <ion-item>\n        <ion-button size=\"large\" fill=\"clear\" shape=\"round\" expand=\"block\" (click)=\"choosePhoto()\">\n          <ion-icon slot=\"start\" name=\"camera-outline\"></ion-icon>\n          Main Photo Of Cart\n        </ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-img [src]=\"mainPhoto\"></ion-img>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n    </ion-list>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-cart_create-cart_module_ts.js.map