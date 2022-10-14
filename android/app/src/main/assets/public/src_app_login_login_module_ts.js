"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 2891);








let LoginPage = class LoginPage {
    constructor(navctrl, http, loadingctrl, router, auth) {
        this.navctrl = navctrl;
        this.http = http;
        this.loadingctrl = loadingctrl;
        this.router = router;
        this.auth = auth;
        this.log = { email: '', pass: '' };
    }
    ngOnInit() {
    }
    signup() {
        this.navctrl.navigateForward('signup');
    }
    login() {
        this.auth.login(this.log.email, this.log.pass);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content .flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20%;\n}\nion-content .flex ion-img {\n  width: 180px;\n  height: 120px;\n  margin: 0 auto;\n}\nion-content .flex ion-label {\n  margin-top: 18px;\n  text-align: center;\n}\nion-content .flex ion-button {\n  margin-top: 20px;\n}\nion-content .flex ion-input {\n  --background: #f4f4f4;\n  --padding-start: 12px;\n  border-radius: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBR0EsZUFBQTtBQUZKO0FBSUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGTjtBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBT0k7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFMTiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBoZWlnaHQ6IDg4dmg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuXG4gICAgaW9uLWltZyB7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"flex\">\n     <ion-img src=\"https://cartingly.com/logo.webp\"></ion-img>\n    <ion-label>\n      <h1><ion-text style=\"font-size: 34px;\">\n        Login\n      </ion-text></h1>\n    </ion-label>\n\n    <ion-item style=\"margin-top: 20pt;\" lines=\"none\">\n\n      <ion-input type=\"email\" inputmode=\"email\" placeholder=\"Email\" [(ngModel)]=\"log.email\" name=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"margin-top: 20px;\" lines=\"none\">\n\n      <ion-input type=\"password\" inputmode=\"password\" placeholder=\"Password\" [(ngModel)]=\"log.pass\" name=\"pass\">\n      </ion-input>\n    </ion-item>\n\n    <ion-button (click)=\"login()\" color=\"primary\" expand=\"block\">Login</ion-button>\n\n    <ion-label>\n      <ion-button fill=\"clear\" color=\"medium\">Forgot password?</ion-button>\n    </ion-label>\n\n    <ion-label>\n      <h2><ion-text color=\"dark\">Don't have an account? </ion-text> <ion-text (click)=\"signup()\" color=\"primary\">Sign Up</ion-text>\n      </h2>\n    </ion-label>\n\n\n  </div>\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map