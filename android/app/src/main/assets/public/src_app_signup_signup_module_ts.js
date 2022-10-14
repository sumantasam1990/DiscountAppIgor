"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 6661);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 4241);












let SignupPage = class SignupPage {
  constructor(navctrl, http, loadingctrl, router, auth, nav) {
    this.navctrl = navctrl;
    this.http = http;
    this.loadingctrl = loadingctrl;
    this.router = router;
    this.auth = auth;
    this.nav = nav;
    this.log = {
      email: '',
      pass: '',
      name: '',
      confpass: '',
      tw: '',
      fb: '',
      pin: ''
    };
    this.authURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serverAPI + 'register';
    this.imageData = '';
    this.mainPhoto = '';
  }

  ngOnInit() {}

  login() {
    this.navctrl.navigateForward('login');
  }

  signup() {
    if (this.log.pass === this.log.confpass) {
      this.presentLoading();
      const myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders(); //myheader.set('Access-Control-Allow-Origin', '*');

      myheader.set('Content-Type', 'application/x-www-form-urlencoded');
      const params = new FormData();
      params.append('name', this.log.name);
      params.append('email', this.log.email);
      params.append('password', this.log.pass);
      params.append('tw', this.log.tw);
      params.append('fb', this.log.fb);
      params.append('pin', this.log.pin);
      params.append('photo', this.imageData);
      this.http.post(this.authURL, params, {
        headers: myheader
      }).subscribe(response => {
        this.loadingctrl.dismiss();

        if (response.token) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Your account created successfully.',
            text: 'Please check your email inbox/SPAM folder and verify your account.',
            icon: 'success',
            heightAuto: false
          }).then(() => {
            localStorage.setItem('token', response.token);
            this.nav.navigateRoot('tabs/tab2');
          });
        } else {
          alert(response.err);
        }
      });
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Error!',
        text: 'Please check your Password and confirm password.',
        icon: 'error',
        heightAuto: false
      });
    }
  }

  presentLoading() {
    var _this = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingctrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait... Do not close or minimize or back the app',
        duration: 8000
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
      console.log('Loading dismissed!');
    })();
  }

  takePhoto() {
    var _this2 = this;

    return (0,_Users_sumanta_Desktop_DiscountApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
        quality: 60,
        allowEditing: true,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Base64,
        saveToGallery: true,
        presentationStyle: 'popover'
      });
      _this2.imageData = image.base64String;
      _this2.mainPhoto = image.dataUrl;
    })();
  }

};

SignupPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupPage);


/***/ }),

/***/ 2444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-content .flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20%;\n}\nion-content .flex ion-img {\n  width: 180px;\n  height: 120px;\n  margin: 0 auto;\n}\nion-content .flex ion-label {\n  margin-top: 18px;\n  text-align: center;\n}\nion-content .flex ion-button {\n  margin-top: 20px;\n}\nion-content .flex ion-input {\n  --background: #f4f4f4;\n  --padding-start: 12px;\n  border-radius: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUdBLGVBQUE7QUFGSjtBQUlJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRk47QUFLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7QUFKTjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTE4iLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGhlaWdodDogODh2aDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"flex\" style=\"margin-bottom: 50px;\">\n    <ion-img src=\"https://cartingly.com/logo.webp\"></ion-img>\n    <ion-label>\n      <h1>Create Your Account</h1>\n      <h2>Already have an account? <ion-text (click)=\"login()\" color=\"primary\">Login</ion-text>\n      </h2>\n    </ion-label>\n\n    <ion-item style=\"margin-top: 20pt;\" lines=\"none\">\n      <ion-input type=\"text\" inputmode=\"text\" placeholder=\"Your Name\" [(ngModel)]=\"log.name\" name=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"margin-top: 20pt;\" lines=\"none\">\n      <ion-input type=\"email\" inputmode=\"email\" placeholder=\"Email\" [(ngModel)]=\"log.email\" name=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"margin-top: 20px;\" lines=\"none\">\n      <ion-input type=\"password\" inputmode=\"password\" placeholder=\"Password\" [(ngModel)]=\"log.pass\" name=\"pass\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item style=\"margin-top: 20px;\" lines=\"none\">\n      <ion-input type=\"password\" inputmode=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"log.confpass\" name=\"confpass\">\n      </ion-input>\n    </ion-item>\n\n\n\n    <ion-item style=\"margin-top: 20pt;\" lines=\"none\">\n      <ion-input type=\"url\" inputmode=\"url\" placeholder=\"Twitter Profile Url\" [(ngModel)]=\"log.tw\" name=\"tw\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"margin-top: 20pt;\" lines=\"none\">\n      <ion-input type=\"url\" inputmode=\"url\" placeholder=\"Facebook Profile Url\" [(ngModel)]=\"log.fb\" name=\"fb\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"margin-top: 20pt;\" lines=\"none\">\n      <ion-input type=\"url\" inputmode=\"url\" placeholder=\"Pinterest Profile Url\" [(ngModel)]=\"log.pin\" name=\"pin\"></ion-input>\n    </ion-item>\n\n    <ion-button (click)=\"takePhoto()\" expand=\"block\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"camera-outline\"></ion-icon>\n      Profile Photo\n    </ion-button>\n\n    <ion-button (click)=\"signup()\" color=\"primary\" expand=\"block\">Sign Up</ion-button>\n\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n<!-- haha --0------->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map