"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 6989:
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedComponent": () => (/* binding */ FeedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.component.html?ngResource */ 807);
/* harmony import */ var _feed_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.component.scss?ngResource */ 3800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FeedComponent = class FeedComponent {
    constructor() { }
    ngOnInit() { }
};
FeedComponent.ctorParameters = () => [];
FeedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-feed',
        template: _feed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feed_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedComponent);



/***/ }),

/***/ 5628:
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedModule": () => (/* binding */ FeedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.component */ 6989);






let FeedModule = class FeedModule {
};
FeedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_feed_component__WEBPACK_IMPORTED_MODULE_0__.FeedComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        ],
        exports: [_feed_component__WEBPACK_IMPORTED_MODULE_0__.FeedComponent]
    })
], FeedModule);



/***/ }),

/***/ 8071:
/*!**************************************************!*\
  !*** ./src/app/level-one/level-one.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelOneComponent": () => (/* binding */ LevelOneComponent)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _level_one_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-one.component.html?ngResource */ 1831);
/* harmony import */ var _level_one_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level-one.component.scss?ngResource */ 1960);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8919);









let LevelOneComponent = class LevelOneComponent {
  constructor(http, router, route) {
    this.http = http;
    this.router = router;
    this.route = route;
    this.usersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'level/one/show/';
    this.data = [];
    this.loading = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cateId = _this.route.snapshot.paramMap.get('id');
      _this.cateName = _this.route.snapshot.paramMap.get('name');
      yield _this.getData();
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.usersURL + _this2.cateId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
        _this2.loading = false;
        _this2.data = res.level_ones;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  } // eslint-disable-next-line @typescript-eslint/naming-convention


  level_two_screen(id, name) {
    this.router.navigate(['level-two', id, name]);
  }

};

LevelOneComponent.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}];

LevelOneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-level-one',
  template: _level_one_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_level_one_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LevelOneComponent);


/***/ }),

/***/ 1717:
/*!***********************************************!*\
  !*** ./src/app/level-one/level-one.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelOneModule": () => (/* binding */ LevelOneModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _level_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-one.component */ 8071);






let LevelOneModule = class LevelOneModule {
};
LevelOneModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_level_one_component__WEBPACK_IMPORTED_MODULE_0__.LevelOneComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        ],
        exports: [_level_one_component__WEBPACK_IMPORTED_MODULE_0__.LevelOneComponent]
    })
], LevelOneModule);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _feed_feed_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feed/feed.module */ 5628);
/* harmony import */ var _level_one_level_one_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../level-one/level-one.module */ 1717);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _feed_feed_module__WEBPACK_IMPORTED_MODULE_2__.FeedModule,
            _level_one_level_one_module__WEBPACK_IMPORTED_MODULE_3__.LevelOneModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);







let Tab1Page = class Tab1Page {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.usersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.serverAPI + 'users';
    }
    ngOnInit() {
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 3800:
/*!*****************************************************!*\
  !*** ./src/app/feed/feed.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1960:
/*!***************************************************************!*\
  !*** ./src/app/level-one/level-one.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXZlbC1vbmUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 807:
/*!*****************************************************!*\
  !*** ./src/app/feed/feed.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-card button=\"true\">\n  <ion-img\n    src=\"https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\">\n  </ion-img>\n\n  <ion-card-header>\n    <ion-card-subtitle>\n      Gifts\n    </ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-label>\n      <h1>\n        <ion-text color=\"dark\">\n          Exclusive Sale 10% Off\n        </ion-text>\n      </h1>\n      <p>\n        <ion-text color=\"medium\">\n          Lorem lipsum is a siply dummy text.\n        </ion-text>\n      </p>\n      <p>\n        <ion-text color=\"medium\">\n          Expiry: 31st Dec, 2022\n        </ion-text>\n      </p>\n    </ion-label>\n  </ion-card-content>\n\n</ion-card>\n\n\n<ion-card button=\"true\">\n  <ion-img\n    src=\"https://images.pexels.com/photos/2460436/pexels-photo-2460436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\">\n  </ion-img>\n\n  <ion-card-header>\n    <ion-card-subtitle>\n      Foods\n    </ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-label>\n      <h1>\n        <ion-text color=\"dark\">\n          Cafe 50% Off\n        </ion-text>\n      </h1>\n      <p>\n        <ion-text color=\"medium\">\n          Lorem lipsum is a siply dummy text.\n        </ion-text>\n      </p>\n      <p>\n        <ion-text color=\"medium\">\n          Expiry: 31st Dec, 2022\n        </ion-text>\n      </p>\n    </ion-label>\n  </ion-card-content>\n\n</ion-card>\n";

/***/ }),

/***/ 1831:
/*!***************************************************************!*\
  !*** ./src/app/level-one/level-one.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-progress-bar color=\"danger\" *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n<ion-list *ngIf=\"data.length > 0\">\n  <ion-item (click)=\"level_two_screen(item.oneId, item.title)\" button lines=\"none\" *ngFor=\"let item of data\">\n    <ion-label>\n      <h1>{{ item.title }}</h1>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-text *ngIf=\"data.length === 0\">\n  <h4 style=\"margin-left: 12px;\">No data found.</h4>\n</ion-text>\n";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title color=\"primary\">\n      {{ cateName }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n  <app-level-one></app-level-one>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map