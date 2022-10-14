"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main-categories_main-categories_module_ts"],{

/***/ 327:
/*!*******************************************************************!*\
  !*** ./src/app/main-categories/main-categories-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainCategoriesPageRoutingModule": () => (/* binding */ MainCategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-categories.page */ 3135);




const routes = [
    {
        path: '',
        component: _main_categories_page__WEBPACK_IMPORTED_MODULE_0__.MainCategoriesPage
    }
];
let MainCategoriesPageRoutingModule = class MainCategoriesPageRoutingModule {
};
MainCategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainCategoriesPageRoutingModule);



/***/ }),

/***/ 8660:
/*!***********************************************************!*\
  !*** ./src/app/main-categories/main-categories.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainCategoriesPageModule": () => (/* binding */ MainCategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _main_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-categories-routing.module */ 327);
/* harmony import */ var _main_categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-categories.page */ 3135);







let MainCategoriesPageModule = class MainCategoriesPageModule {
};
MainCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainCategoriesPageRoutingModule
        ],
        declarations: [_main_categories_page__WEBPACK_IMPORTED_MODULE_1__.MainCategoriesPage]
    })
], MainCategoriesPageModule);



/***/ }),

/***/ 3135:
/*!*********************************************************!*\
  !*** ./src/app/main-categories/main-categories.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainCategoriesPage": () => (/* binding */ MainCategoriesPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-categories.page.html?ngResource */ 8965);
/* harmony import */ var _main_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-categories.page.scss?ngResource */ 9683);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let MainCategoriesPage = class MainCategoriesPage {
  constructor(http, route, router, animationCtrl) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.animationCtrl = animationCtrl; // @ViewChild('list1', { read: ElementRef, static: true }) list1: ElementRef;
    // @ViewChild('list2', { read: ElementRef, static: true }) list2: ElementRef;
    // @ViewChild('list3', { read: ElementRef, static: true }) list3: ElementRef;

    this.usersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.serverAPI + 'main/categories';
    this.data = [];
  } // eslint-disable-next-line @angular-eslint/use-lifecycle-interface


  ngAfterViewInit() {
    console.log(this.list.toArray()); //this.animateButton();
  } // public animateButton() {
  //   const squareA = this.animationCtrl.create()
  //     .addElement(this.list1.nativeElement)
  //     .fill('none')
  //     .duration(1000)
  //     .keyframes([
  //       { offset: 0, transform: 'scale(1) rotate(0)' },
  //       { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
  //       { offset: 1, transform: 'scale(1) rotate(0)' }
  //     ]);
  //
  //   const squareB = this.animationCtrl.create()
  //     .addElement(this.list2.nativeElement)
  //     .fill('none')
  //     .duration(1000)
  //     .keyframes([
  //       { offset: 0, transform: 'scale(1)', opacity: '1' },
  //       { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
  //       { offset: 1, transform: 'scale(1)', opacity: '1' }
  //     ]);
  //
  //   const squareC = this.animationCtrl.create()
  //     .addElement(this.list3.nativeElement)
  //     .fill('none')
  //     .duration(1000)
  //     .keyframes([
  //       { offset: 0, transform: 'scale(1)', opacity: '0.5' },
  //       { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
  //       { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  //     ]);
  //
  //    squareA.play();
  //    squareB.play();
  //    squareC.play();
  // }


  ngOnInit() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.animateButton();
      yield _this.getData();
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.http.get(_this2.usersURL).subscribe(res => {
        _this2.loading = false;
        _this2.data = res.categories;
      }, error => {
        alert('Error! ' + error);
      });
    })();
  }

  level_one_screen(id, name) {
    this.router.navigate(['level-one', id, name]);
  }

  createCart() {
    this.router.navigate(['create-cart']);
  }

};

MainCategoriesPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AnimationController
}];

MainCategoriesPage.propDecorators = {
  list: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren,
    args: ['list']
  }]
};
MainCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-main-categories',
  template: _main_categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_main_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MainCategoriesPage);


/***/ }),

/***/ 9683:
/*!**********************************************************************!*\
  !*** ./src/app/main-categories/main-categories.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content .float-btn {\n  position: fixed;\n  bottom: 30px;\n  right: 10px;\n}\nion-content .float-btn ion-button {\n  --box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0Usa0RBQUE7QUFBTiIsImZpbGUiOiJtYWluLWNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuZmxvYXQtYnRuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDtcblxuICAgIH1cblxuXG4gIH1cblxuXG59XG4iXX0= */";

/***/ }),

/***/ 8965:
/*!**********************************************************************!*\
  !*** ./src/app/main-categories/main-categories.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title color=\"primary\">Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" color=\"primary\">\n        Discover\n      </ion-title>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-progress-bar color=\"danger\" *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n  <ion-list #list>\n    <ion-item (click)=\"level_one_screen(item.cateId, item.title)\" button=\"true\" lines=\"full\" *ngFor=\"let item of data\">\n      <ion-icon *ngIf=\"item.cateId === 1\" slot=\"start\" color=\"warning\" name=\"cafe-outline\"></ion-icon>\n\n      <ion-icon *ngIf=\"item.cateId === 2\" slot=\"start\" color=\"danger\" name=\"shirt-outline\"></ion-icon>\n\n      <ion-icon *ngIf=\"item.cateId === 3\" slot=\"start\" color=\"success\" name=\"logo-apple\"></ion-icon>\n\n      <ion-label>\n        <h1>{{ item.title }}</h1>\n        <p>\n          {{ item.description }}\n        </p>\n      </ion-label>\n\n\n    </ion-item>\n  </ion-list>\n\n  <div class=\"float-btn\">\n    <ion-button (click)=\"createCart()\" size=\"large\" shape=\"round\" color=\"warning\"><ion-icon slot=\"start\" name=\"add-outline\"></ion-icon> Create Cart</ion-button>\n  </div>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main-categories_main-categories_module_ts.js.map