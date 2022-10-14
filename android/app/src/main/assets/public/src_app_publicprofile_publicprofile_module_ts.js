"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_publicprofile_publicprofile_module_ts"],{

/***/ 1262:
/*!***************************************************************!*\
  !*** ./src/app/publicprofile/publicprofile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicprofilePageRoutingModule": () => (/* binding */ PublicprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _publicprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicprofile.page */ 927);




const routes = [
    {
        path: '',
        component: _publicprofile_page__WEBPACK_IMPORTED_MODULE_0__.PublicprofilePage
    }
];
let PublicprofilePageRoutingModule = class PublicprofilePageRoutingModule {
};
PublicprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PublicprofilePageRoutingModule);



/***/ }),

/***/ 3428:
/*!*******************************************************!*\
  !*** ./src/app/publicprofile/publicprofile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicprofilePageModule": () => (/* binding */ PublicprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _publicprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicprofile-routing.module */ 1262);
/* harmony import */ var _publicprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicprofile.page */ 927);
/* harmony import */ var _components_cart_follow_cart_follow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cart-follow/cart-follow.component */ 3128);








let PublicprofilePageModule = class PublicprofilePageModule {
};
PublicprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _publicprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicprofilePageRoutingModule,
        ],
        declarations: [_publicprofile_page__WEBPACK_IMPORTED_MODULE_1__.PublicprofilePage, _components_cart_follow_cart_follow_component__WEBPACK_IMPORTED_MODULE_2__.CartFollowComponent]
    })
], PublicprofilePageModule);



/***/ }),

/***/ 927:
/*!*****************************************************!*\
  !*** ./src/app/publicprofile/publicprofile.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicprofilePage": () => (/* binding */ PublicprofilePage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _publicprofile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicprofile.page.html?ngResource */ 9996);
/* harmony import */ var _publicprofile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publicprofile.page.scss?ngResource */ 8210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);









let PublicprofilePage = class PublicprofilePage {
  constructor(http, router, route) {
    this.http = http;
    this.router = router;
    this.route = route;
    this.urlProfile = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'profile/';
    this.publishedURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'profile/published/carts/';
    this.unpublished = false;
    this.published = true;
    this.saved = false;
    this.follow = false;
    this.list = false;
    this.loading = false;
    this.data = [];
    this.userIdd = '';
    this.profileData = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userIdd = _this.route.snapshot.paramMap.get('id');
      yield _this.getData();

      _this.http.get(_this.urlProfile + _this.userIdd).subscribe(res => {
        _this.profileData = res.profile[0];
      });
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.publishedURL + _this2.userIdd).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
        _this2.loading = false;
        _this2.data = res.carts;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  segmentChanged(ev) {
    if (ev.detail.value === 'unpub') {
      this.unpublished = true;
      this.published = false;
      this.saved = false;
      this.follow = false;
      this.list = false;
    }

    if (ev.detail.value === 'pub') {
      this.published = true;
      this.unpublished = false;
      this.saved = false;
      this.follow = false;
      this.list = false;
    }

    if (ev.detail.value === 'saved') {
      this.saved = true;
      this.published = false;
      this.unpublished = false;
      this.follow = false;
      this.list = false;
    }

    if (ev.detail.value === 'follow') {
      this.follow = true;
      this.published = false;
      this.saved = false;
      this.unpublished = false;
      this.list = false;
    }

    if (ev.detail.value === 'list') {
      this.list = true;
      this.published = false;
      this.saved = false;
      this.follow = false;
      this.unpublished = false;
    }
  }

  cartScreen(id, name) {
    this.router.navigate(['product-type', id, name]);
  }

  createCart() {
    this.router.navigate(['create-cart']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

};

PublicprofilePage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}];

PublicprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-publicprofile',
  template: _publicprofile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_publicprofile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PublicprofilePage);


/***/ }),

/***/ 8210:
/*!******************************************************************!*\
  !*** ./src/app/publicprofile/publicprofile.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-img::part(image) {\n  object-fit: cover;\n  border-radius: 100px !important;\n}\nion-content .pro-pic {\n  width: 150px;\n  height: 150px;\n}\nion-content h1, ion-content h2, ion-content p {\n  font-weight: bold !important;\n}\nion-content ion-segment {\n  margin-top: 14px;\n}\nion-content .margin {\n  margin-top: 10px !important;\n}\nion-content .flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQUFKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUZKO0FBS0U7RUFDRSw0QkFBQTtBQUhKO0FBTUU7RUFDRSxnQkFBQTtBQUpKO0FBT0U7RUFDRSwyQkFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5KIiwiZmlsZSI6InB1YmxpY3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24taW1nOjpwYXJ0KGltYWdlKSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkICNmY2EzYTM7XG4gIH1cblxuICAucHJvLXBpYyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICBoMSxoMixwIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gIH1cblxuICAubWFyZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 9996:
/*!******************************************************************!*\
  !*** ./src/app/publicprofile/publicprofile.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title color=\"primary\">Profile</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img *ngIf=\"profileData.photo === '' || profileData.photo === 'https://cartingly.com//' || profileData.photo === 'https://cartingly.com'\" class=\"pro-pic\" src=\"https://cdn-icons-png.flaticon.com/128/149/149071.png\"></ion-img>\n\n        <ion-img *ngIf=\"profileData.photo !== '' && profileData.photo !== 'https://cartingly.com//' && profileData.photo !== 'https://cartingly.com'\" class=\"pro-pic\" [src]=\"profileData.photo\"></ion-img>\n\n        <div class=\"margin\">\n          <ion-label>\n            <h1>\n              <ion-text color=\"dark\">\n                {{profileData.name}}\n              </ion-text>\n            </h1>\n            <div class=\"flex\">\n              <p>\n                <ion-button fill=\"solid\" color=\"light\">{{profileData.followers}}  Followers</ion-button>\n              </p>\n              <p>\n                <ion-button fill=\"solid\" color=\"dark\">{{profileData.opens}} Opens</ion-button>\n              </p>\n            </div>\n\n          </ion-label>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <!-- segment -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" scrollable value=\"pub\" color=\"primary\">\n\n      <ion-segment-button value=\"pub\">\n        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n        <ion-label>Published</ion-label>\n      </ion-segment-button>\n<!--      <ion-segment-button value=\"unpub\">-->\n<!--        <ion-icon name=\"close-outline\"></ion-icon>-->\n<!--        <ion-label>Drafted</ion-label>-->\n<!--      </ion-segment-button>-->\n<!--      <ion-segment-button value=\"saved\">-->\n<!--        <ion-icon name=\"bookmark-outline\"></ion-icon>-->\n<!--        <ion-label>Saved Cart</ion-label>-->\n<!--      </ion-segment-button>-->\n      <ion-segment-button value=\"follow\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n        <ion-label>Cart Follow</ion-label>\n      </ion-segment-button>\n      <!--      <ion-segment-button value=\"list\">-->\n      <!--        <ion-icon name=\"list-outline\"></ion-icon>-->\n      <!--        <ion-label>Cart Lists</ion-label>-->\n      <!--      </ion-segment-button>-->\n\n    </ion-segment>\n\n    <div *ngIf=\"published\">\n      <ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n      <ion-row>\n        <ion-col>\n          <h2>\n            <ion-text color=\"\">\n              My Published Carts\n            </ion-text>\n          </h2>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf=\"data.length > 0\">\n        <ion-col size=\"4\" *ngFor=\"let cart of data\">\n          <ion-img (click)=\"cartScreen(cart.id, cart.cart_name)\" [src]=\"cart.main_photo\"></ion-img>\n\n          <div class=\"margin\">\n            <ion-label>\n              <h2>{{ cart.cart_name }}</h2>\n              <p>{{cart.opens}} Opens</p>\n            </ion-label>\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"data.length === 0\">\n        <ion-col>\n          <p>\n            <ion-text>\n              No cart found.\n            </ion-text>\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"data.length > 0\">\n        <!--        <ion-col size=\"6\">-->\n        <!--          <ion-button fill=\"clear\">-->\n        <!--            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon> Delete Cart-->\n        <!--          </ion-button>-->\n        <!--        </ion-col>-->\n\n        <!--        <ion-col size=\"6\">-->\n        <!--          <ion-button color=\"medium\" fill=\"clear\" expand=\"full\">-->\n        <!--            More-->\n        <!--          </ion-button>-->\n        <!--        </ion-col>-->\n      </ion-row>\n    </div>\n\n    <app-cart-follow *ngIf=\"follow\" [userid]=\"userIdd\"></app-cart-follow>\n\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_publicprofile_publicprofile_module_ts.js.map