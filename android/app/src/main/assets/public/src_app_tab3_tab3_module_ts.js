"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);









let Tab3Page = class Tab3Page {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.searchURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'search';
    this.results = [];
    this.loading = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.IonSearchbar.setFocus();
    }, 500);
  }

  getSearchResults() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;

      if (_this.keyword.length > 3) {
        yield _this.http.get(_this.searchURL + '/' + _this.keyword).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3)).toPromise().then(res => {
          _this.loading = false;
          _this.results = res.results;
        }, error => {
          alert('Error! ' + error);
        });
      } else {
        _this.loading = false;
        _this.results = [];
      }
    })();
  }

  cartScreen(id, name) {
    this.router.navigate(['product-type', id, name]);
  }

};

Tab3Page.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}];

Tab3Page.propDecorators = {
  IonSearchbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['searchbar']
  }]
};
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tab3',
  template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab3Page);
 // end file 4

/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "cdk-virtual-scroll-viewport {\n  height: 100vh !important;\n  width: 100% !important;\n}\n\nion-img::part(image) {\n  object-fit: cover;\n  border-radius: 12px !important;\n  border: 2px solid #fca3a3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBQUYiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWltZzo6cGFydChpbWFnZSkge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmNhM2EzO1xufVxuIl19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title color=\"primary\">Search</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [scrollY]=\"false\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title color=\"primary\" size=\"large\">Search</ion-title>\n    </ion-toolbar>\n\n    <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"keyword\" color=\"light\" name=\"keyword\" (ionChange)=\"getSearchResults()\"\n                     placeholder=\"Search carts...\" #searchbar type=\"search\" inputmode=\"search\" debounce=\"500\">\n      </ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n  <ion-grid>\n\n    <cdk-virtual-scroll-viewport class=\"ion-content-scroll-host\" itemSize=\"56\" minBufferPx=\"900\" maxBufferPx=\"1350\">\n        <ion-row>\n          <ion-col size=\"6\" *cdkVirtualFor=\"let cart of results\">\n            <div *ngIf=\"cart.type === 'carts'\">\n              <ion-img (click)=\"cartScreen(cart.searchable.id, cart.searchable.cart_name)\" [src]=\"cart.searchable.main_photo\"></ion-img>\n\n              <div class=\"margin\">\n                <ion-label>\n                  <h2>{{ cart.searchable.cart_name }}</h2>\n                  <!--                <p>{{cart.searchable.opens}} Opens</p>-->\n                </ion-label>\n              </div>\n            </div>\n\n          </ion-col>\n        </ion-row>\n    </cdk-virtual-scroll-viewport>\n\n\n  </ion-grid>\n\n  <ion-grid *ngIf=\"results.length === 0\">\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <p>There are no carts in this search keyword.</p>\n        </ion-label>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map