"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 6100:
/*!***************************************************************!*\
  !*** ./src/app/components/save-carts/save-carts.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveCartsComponent": () => (/* binding */ SaveCartsComponent)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _save_carts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-carts.component.html?ngResource */ 2050);
/* harmony import */ var _save_carts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-carts.component.scss?ngResource */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);









let SaveCartsComponent = class SaveCartsComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.savedCartURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'profile/listing/carts';
    this.loading = false;
    this.data = [];
    this.dataProducts = [];
    this.brandsData = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getData();
      yield _this.getDataProducts();
      yield _this.getDataBrands();
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.savedCartURL + '/0/1').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
        _this2.loading = false;
        _this2.data = res.listings[0].save_cart_many;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  getDataProducts() {
    var _this3 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = true;
      yield _this3.http.get(_this3.savedCartURL + '/0/2').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
        _this3.loading = false;
        _this3.dataProducts = res.listings;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  getDataBrands() {
    var _this4 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loading = true;
      yield _this4.http.get(_this4.savedCartURL + '/0/3').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
        _this4.loading = false;
        _this4.brandsData = res.listings;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  cartScreen(id, name) {
    this.router.navigate(['product-type', id, name]);
  }

};

SaveCartsComponent.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

SaveCartsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-save-carts',
  template: _save_carts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_save_carts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SaveCartsComponent);


/***/ }),

/***/ 6930:
/*!***************************************************************************!*\
  !*** ./src/app/components/unpublished-cart/unpublished-cart.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnpublishedCartComponent": () => (/* binding */ UnpublishedCartComponent)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unpublished_cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unpublished-cart.component.html?ngResource */ 5829);
/* harmony import */ var _unpublished_cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unpublished-cart.component.scss?ngResource */ 4305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);










let UnpublishedCartComponent = class UnpublishedCartComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.unpublishedURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'profile/unpublished/carts';
    this.urlDeleteCart = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'cart/delete/';
    this.urlPublishCart = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'cart/publish/';
    this.loading = false;
    this.data = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getData();
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.unpublishedURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.retry)(3)).toPromise().then(res => {
        _this2.loading = false;
        _this2.data = res.carts;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  cartScreen(id, name) {
    this.router.navigate(['product-type', id, name]);
  }

  go(id) {
    this.router.navigate(['create-cart-product-type', id]);
  }

  delete(id) {
    this.http.get(this.urlDeleteCart + id).subscribe(res => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Deleted',
        icon: 'success',
        heightAuto: false
      }).then(() => {
        this.getData();
      });
    });
  }

  publish(id) {
    this.http.get(this.urlPublishCart + id).subscribe(res => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Published',
        text: 'Cart has been successfully published.',
        icon: 'success',
        heightAuto: false
      }).then(() => {
        this.getData();
      });
    });
  }

};

UnpublishedCartComponent.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];

UnpublishedCartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-unpublished-cart',
  template: _unpublished_cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_unpublished_cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UnpublishedCartComponent);


/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _components_unpublished_cart_unpublished_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/unpublished-cart/unpublished-cart.component */ 6930);
/* harmony import */ var _components_save_carts_save_carts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/save-carts/save-carts.component */ 6100);
/* harmony import */ var _components_cart_follow_cart_follow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cart-follow/cart-follow.component */ 3128);











let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page, _components_unpublished_cart_unpublished_cart_component__WEBPACK_IMPORTED_MODULE_3__.UnpublishedCartComponent, _components_save_carts_save_carts_component__WEBPACK_IMPORTED_MODULE_4__.SaveCartsComponent, _components_cart_follow_cart_follow_component__WEBPACK_IMPORTED_MODULE_5__.CartFollowComponent]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);










let Tab2Page = class Tab2Page {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.publishedURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'profile/published/carts';
    this.urlProfile = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'profile';
    this.urlDeleteCart = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'cart/delete/';
    this.unpublished = false;
    this.published = true;
    this.saved = false;
    this.follow = false;
    this.list = false;
    this.loading = false;
    this.data = [];
    this.profileData = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getData();

      _this.http.get(_this.urlProfile).subscribe(res => {
        _this.profileData = res.profile[0];
      });
    })();
  }

  ionViewWillEnter() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.getData();
    })();
  }

  getData() {
    var _this3 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = true;
      yield _this3.http.get(_this3.publishedURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.retry)(3)).toPromise().then(res => {
        _this3.loading = false;
        _this3.data = res.carts;
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

  delete(id) {
    this.http.get(this.urlDeleteCart + id).subscribe(res => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Deleted',
        icon: 'success',
        heightAuto: false
      }).then(() => {
        this.getData();
      });
    });
  }

  go(id) {
    this.router.navigate(['create-cart-product-type', id]);
  }

};

Tab2Page.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];

Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab2Page);


/***/ }),

/***/ 2587:
/*!****************************************************************************!*\
  !*** ./src/app/components/save-carts/save-carts.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-img::part(image) {\n  object-fit: cover;\n  border-radius: 6px !important;\n}\n\nh2, p {\n  font-weight: bold !important;\n}\n\n.margin {\n  margin-top: 10px !important;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtY2FydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxpQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBS0E7RUFDRSw0QkFBQTtBQUZGOztBQUtBO0VBQ0UsMkJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRkYiLCJmaWxlIjoic2F2ZS1jYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWc6OnBhcnQoaW1hZ2UpIHtcbiAgLy93aWR0aDogMTUwcHg7XG4gIC8vaGVpZ2h0OiAxNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAvL2JvcmRlcjogMnB4IHNvbGlkICNmY2EzYTM7XG59XG5cbmgyLHAge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuIl19 */";

/***/ }),

/***/ 4305:
/*!****************************************************************************************!*\
  !*** ./src/app/components/unpublished-cart/unpublished-cart.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-img::part(image) {\n  object-fit: cover;\n  border-radius: 12px !important;\n  border: 2px solid #fca3a3;\n}\n\nh2, p {\n  font-weight: bold !important;\n}\n\n.margin {\n  margin-top: 10px !important;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucHVibGlzaGVkLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFHRyxpQkFBQTtFQUNBLDhCQUFBO0VBQ0QseUJBQUE7QUFESDs7QUFJQztFQUNFLDRCQUFBO0FBREg7O0FBR0U7RUFDRSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSiIsImZpbGUiOiJ1bnB1Ymxpc2hlZC1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1pbWc6OnBhcnQoaW1hZ2UpIHtcbiAgICAvL3dpZHRoOiAxNTBweDtcbiAgICAvL2hlaWdodDogMTUwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICAgYm9yZGVyOiAycHggc29saWQgI2ZjYTNhMztcbiAgfVxuXG4gaDIscCB7XG4gICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuIH1cbiAgLm1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuIl19 */";

/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-img::part(image) {\n  object-fit: cover;\n  border-radius: 6px !important;\n}\nion-content .pro-pic {\n  width: 150px;\n  height: 150px;\n}\nion-content h1, ion-content h2, ion-content p {\n  font-weight: bold !important;\n}\nion-content ion-segment {\n  margin-top: 14px;\n}\nion-content .margin {\n  margin-top: 10px !important;\n}\nion-content .flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQUFKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUZKO0FBS0U7RUFDRSw0QkFBQTtBQUhKO0FBTUU7RUFDRSxnQkFBQTtBQUpKO0FBT0U7RUFDRSwyQkFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5KIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24taW1nOjpwYXJ0KGltYWdlKSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCAjZmNhM2EzO1xuICB9XG5cbiAgLnByby1waWMge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgaDEsaDIscCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICB9XG5cbiAgLm1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 2050:
/*!****************************************************************************!*\
  !*** ./src/app/components/save-carts/save-carts.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n<ion-row>\n  <ion-col>\n    <h2>\n      <ion-text color=\"\">\n        Places (single destination)\n      </ion-text>\n    </h2>\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"4\" *ngFor=\"let cart of data\">\n    <ion-img (click)=\"cartScreen(cart.id, cart.cart_name);\" [src]=\"cart.main_photo\"></ion-img>\n\n    <div class=\"margin\">\n      <ion-label>\n        <h2>{{cart.cart_name}}</h2>\n        <p>{{cart.opens}} Opens</p>\n      </ion-label>\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf=\"data.length === 0\">\n  <ion-col>\n    <p>\n      <ion-text>\n        No cart found..\n      </ion-text>\n    </p>\n  </ion-col>\n</ion-row>\n\n<!------------------------------>\n\n<ion-row>\n  <ion-col>\n    <h2>\n      <ion-text color=\"\">\n        Places (multi destination)\n      </ion-text>\n    </h2>\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"4\" *ngFor=\"let cart of data\">\n    <ion-img (click)=\"cartScreen(cart.id, cart.cart_name);\" [src]=\"cart.main_photo\"></ion-img>\n\n    <div class=\"margin\">\n      <ion-label>\n        <h2>{{cart.cart_name}}</h2>\n        <p>{{cart.opens}} Opens</p>\n      </ion-label>\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf=\"data.length === 0\">\n  <ion-col>\n    <p>\n      <ion-text>\n        No cart found..\n      </ion-text>\n    </p>\n  </ion-col>\n</ion-row>\n\n<!------------------------------>\n\n<ion-row>\n  <ion-col>\n    <h2>\n      <ion-text color=\"\">\n        Products/Things (single destination)\n      </ion-text>\n    </h2>\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"4\" *ngFor=\"let cart of dataProducts\">\n    <ion-img (click)=\"cartScreen(cart.id, cart.cart_name);\" [src]=\"cart.main_photo\"></ion-img>\n\n    <div class=\"margin\">\n      <ion-label>\n        <h2>{{cart.cart_name}}</h2>\n        <p>{{cart.opens}} Opens</p>\n      </ion-label>\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf=\"dataProducts.length === 0\">\n  <ion-col>\n    <p>\n      <ion-text>\n        No cart found..\n      </ion-text>\n    </p>\n  </ion-col>\n</ion-row>\n\n<!------------------------------>\n\n<ion-row>\n  <ion-col>\n    <h2>\n      <ion-text color=\"\">\n        Products/Things (multi destination)\n      </ion-text>\n    </h2>\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"4\" *ngFor=\"let cart of dataProducts\">\n    <ion-img (click)=\"cartScreen(cart.id, cart.cart_name);\" [src]=\"cart.main_photo\"></ion-img>\n\n    <div class=\"margin\">\n      <ion-label>\n        <h2>{{cart.cart_name}}</h2>\n        <p>{{cart.opens}} Opens</p>\n      </ion-label>\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf=\"dataProducts.length === 0\">\n  <ion-col>\n    <p>\n      <ion-text>\n        No cart found..\n      </ion-text>\n    </p>\n  </ion-col>\n</ion-row>\n\n<!------------------------------>\n\n<ion-row>\n  <ion-col>\n    <h2>\n      <ion-text color=\"\">\n        Brands/People\n      </ion-text>\n    </h2>\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"4\" *ngFor=\"let cart of brandsData\">\n    <ion-img (click)=\"cartScreen(cart.id, cart.cart_name);\" [src]=\"cart.main_photo\"></ion-img>\n\n    <div class=\"margin\">\n      <ion-label>\n        <h2>{{cart.cart_name}}</h2>\n        <p>{{cart.opens}} Opens</p>\n      </ion-label>\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf=\"brandsData.length === 0\">\n  <ion-col>\n    <p>\n      <ion-text>\n        No cart found..\n      </ion-text>\n    </p>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 5829:
/*!****************************************************************************************!*\
  !*** ./src/app/components/unpublished-cart/unpublished-cart.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n<ion-row>\n  <ion-col>\n    <h2>\n      <ion-text color=\"\">\n        My Unpublished Carts\n      </ion-text>\n    </h2>\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf=\"data.length > 0\">\n  <ion-col size=\"4\" *ngFor=\"let cart of data\">\n    <ion-img (click)=\"cartScreen(cart.id, cart.cart_name);\" [src]=\"cart.main_photo\"></ion-img>\n\n    <div class=\"margin\">\n      <ion-label>\n        <h2>{{ cart.cart_name }}</h2>\n        <p>{{cart.opens}} Opens</p>\n      </ion-label>\n    </div>\n    <ion-button (click)=\"publish(cart.id)\" fill=\"clear\" size=\"small\">\n      <ion-icon slot=\"start\" name=\"checkmark-done-outline\"></ion-icon> Publish Cart\n    </ion-button>\n    <ion-button (click)=\"go(cart.id)\" fill=\"clear\" size=\"small\">\n      <ion-icon slot=\"start\" name=\"pencil-outline\"></ion-icon> Edit Cart\n    </ion-button>\n    <ion-button (click)=\"delete(cart.id)\" fill=\"clear\" size=\"small\">\n      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon> Delete Cart\n    </ion-button>\n  </ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"data.length === 0\">\n  <ion-col>\n    <p>\n      <ion-text>\n        No cart found.\n      </ion-text>\n    </p>\n  </ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"data.length > 0\">\n<!--  <ion-col size=\"6\">-->\n<!--    <ion-button fill=\"clear\">-->\n<!--      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon> Delete Cart-->\n<!--    </ion-button>-->\n<!--  </ion-col>-->\n\n<!--  <ion-col size=\"6\">-->\n<!--    <ion-button color=\"medium\" fill=\"clear\" expand=\"full\">-->\n<!--      More-->\n<!--    </ion-button>-->\n<!--  </ion-col>-->\n</ion-row>\n";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title color=\"primary\">Profile</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" color=\"primary\">Profile</ion-title>\n      <ion-button slot=\"end\" fill=\"clear\" shape=\"round\" color=\"dark\" (click)=\"createCart()\">\n        <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon> Create cart\n      </ion-button>\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img *ngIf=\"profileData.photo === '' || profileData.photo === 'https://cartingly.com//' || profileData.photo === 'https://cartingly.com'\" class=\"pro-pic\" src=\"https://cdn-icons-png.flaticon.com/128/149/149071.png\"></ion-img>\n\n        <ion-img *ngIf=\"profileData.photo !== '' && profileData.photo !== 'https://cartingly.com//' && profileData.photo !== 'https://cartingly.com'\" class=\"pro-pic\" [src]=\"profileData.photo\"></ion-img>\n\n        <div class=\"margin\">\n          <ion-label>\n            <h1>\n              <ion-text color=\"dark\">\n                {{profileData.name}}\n              </ion-text>\n            </h1>\n            <div class=\"flex\">\n              <p>\n                <ion-button fill=\"solid\" color=\"light\">{{profileData.followers}} Followers</ion-button>\n              </p>\n              <p>\n                <ion-button fill=\"solid\" color=\"dark\">{{profileData.opens}} Opens</ion-button>\n              </p>\n            </div>\n\n          </ion-label>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <!-- segment -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" scrollable value=\"pub\" color=\"primary\">\n\n      <ion-segment-button value=\"pub\">\n        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n        <ion-label>Published</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"unpub\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n        <ion-label>Drafted</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"saved\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <ion-label>Saved Cart</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"follow\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n        <ion-label>Cart Follow</ion-label>\n      </ion-segment-button>\n<!--      <ion-segment-button value=\"list\">-->\n<!--        <ion-icon name=\"list-outline\"></ion-icon>-->\n<!--        <ion-label>Cart Lists</ion-label>-->\n<!--      </ion-segment-button>-->\n\n    </ion-segment>\n\n    <div *ngIf=\"published\">\n      <ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n      <ion-row>\n        <ion-col>\n          <h2>\n            <ion-text color=\"\">\n              My Published Carts\n            </ion-text>\n          </h2>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf=\"data.length > 0\">\n        <ion-col size=\"4\" *ngFor=\"let cart of data\">\n          <ion-img (click)=\"cartScreen(cart.id, cart.cart_name)\" [src]=\"cart.main_photo\"></ion-img>\n\n          <div class=\"margin\">\n            <ion-label>\n              <h2>{{ cart.cart_name }}</h2>\n              <p>{{cart.opens}} Opens</p>\n            </ion-label>\n          </div>\n          <ion-button (click)=\"go(cart.id)\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"pencil-outline\"></ion-icon> Edit Cart\n          </ion-button>\n            <ion-button (click)=\"delete(cart.id)\" fill=\"clear\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon> Delete Cart\n            </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"data.length === 0\">\n        <ion-col>\n          <p>\n            <ion-text>\n              No cart found.\n            </ion-text>\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"data.length > 0\">\n<!--        <ion-col size=\"6\">-->\n<!--          <ion-button fill=\"clear\">-->\n<!--            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon> Delete Cart-->\n<!--          </ion-button>-->\n<!--        </ion-col>-->\n\n<!--        <ion-col size=\"6\">-->\n<!--          <ion-button color=\"medium\" fill=\"clear\" expand=\"full\">-->\n<!--            More-->\n<!--          </ion-button>-->\n<!--        </ion-col>-->\n      </ion-row>\n    </div>\n\n    <app-unpublished-cart *ngIf=\"unpublished\"></app-unpublished-cart>\n\n    <app-save-carts *ngIf=\"saved\"></app-save-carts>\n\n    <app-cart-follow *ngIf=\"follow\"></app-cart-follow>\n\n  </ion-grid>\n\n  <ion-button (click)=\"logout()\" fill=\"clear\" color=\"primary\">\n    Logout\n  </ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map