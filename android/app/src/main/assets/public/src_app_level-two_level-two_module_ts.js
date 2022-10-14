"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_level-two_level-two_module_ts"],{

/***/ 1512:
/*!*******************************************************!*\
  !*** ./src/app/level-two/level-two-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelTwoPageRoutingModule": () => (/* binding */ LevelTwoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _level_two_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-two.page */ 3160);




const routes = [
    {
        path: '',
        component: _level_two_page__WEBPACK_IMPORTED_MODULE_0__.LevelTwoPage
    }
];
let LevelTwoPageRoutingModule = class LevelTwoPageRoutingModule {
};
LevelTwoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LevelTwoPageRoutingModule);



/***/ }),

/***/ 3086:
/*!***********************************************!*\
  !*** ./src/app/level-two/level-two.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelTwoPageModule": () => (/* binding */ LevelTwoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _level_two_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-two-routing.module */ 1512);
/* harmony import */ var _level_two_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-two.page */ 3160);







let LevelTwoPageModule = class LevelTwoPageModule {
};
LevelTwoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _level_two_routing_module__WEBPACK_IMPORTED_MODULE_0__.LevelTwoPageRoutingModule
        ],
        declarations: [_level_two_page__WEBPACK_IMPORTED_MODULE_1__.LevelTwoPage]
    })
], LevelTwoPageModule);



/***/ }),

/***/ 3160:
/*!*********************************************!*\
  !*** ./src/app/level-two/level-two.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelTwoPage": () => (/* binding */ LevelTwoPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _level_two_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-two.page.html?ngResource */ 6359);
/* harmony import */ var _level_two_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level-two.page.scss?ngResource */ 7513);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8919);









let LevelTwoPage = class LevelTwoPage {
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.usersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'level/two/show/';
    this.data = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.oneId = _this.route.snapshot.paramMap.get('id');
      _this.oneName = _this.route.snapshot.paramMap.get('name');
      yield _this.getData();
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.usersURL + _this2.oneId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
        _this2.loading = false;
        _this2.data = res.level_twos;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  } // eslint-disable-next-line @typescript-eslint/naming-convention


  carts_screen(id, name) {
    this.router.navigate(['carts', id, name]);
  }

};

LevelTwoPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

LevelTwoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-level-two',
  template: _level_two_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_level_two_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LevelTwoPage);


/***/ }),

/***/ 7513:
/*!**********************************************************!*\
  !*** ./src/app/level-two/level-two.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXZlbC10d28ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6359:
/*!**********************************************************!*\
  !*** ./src/app/level-two/level-two.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{ oneName }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar color=\"danger\" *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n  <ion-list>\n    <ion-item (click)=\"carts_screen(item.twoId, item.title)\" button lines=\"none\" *ngFor=\"let item of data\">\n      <ion-label>\n        <h1>{{ item.title }}</h1>\n      </ion-label>\n      <ion-chip slot=\"end\" color=\"dark\">\n        <ion-label>Opened {{ item.order }}</ion-label>\n      </ion-chip>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_level-two_level-two_module_ts.js.map