(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");





var routes = [
    { path: 'user/:itemid', component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ChatApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* BASIC */\r\n\r\nhtml {\r\n    background-color: #56baed;\r\n  }\r\n\r\nbody {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n\r\na {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n#formFooter {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    -webkit-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\ninput[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=password]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n      outline: none;\r\n  } \r\n  \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTs7QUFFVjtJQUNJLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztBQUlBLGNBQWM7O0FBRWQ7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFFRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBRVoseUNBQXlDO0lBQ3pDLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUVsQiw0QkFBNEI7RUFDOUI7O0FBSUEsU0FBUzs7QUFFVDtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUlBLG1CQUFtQjs7QUFFbkI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUVFLDhCQUE4QjtJQUc5QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFHQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUlBLGVBQWU7O0FBRWYsdUNBQXVDOztBQUN2QztJQUNFLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQ0FBMkM7TUFDM0MsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUJBQXVCO01BQ3ZCLGVBQWU7SUFDakI7RUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRTFEO0lBQ0UsU0FBUztJQUNULGtDQUFrQztJQUVsQywwQkFBMEI7O0lBRTFCLG9DQUFvQztJQUVwQyw0QkFBNEI7O0lBRTVCLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSwyQkFBMkI7SUFFM0IsbUJBQW1CO0VBQ3JCOztBQUVBLGtDQUFrQzs7QUFDbEM7SUFDRSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFJQSxXQUFXOztBQUVYO01BQ0ksYUFBYTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTJiYWRkO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU1RSVUNUVVJFICovXHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBBTklNQVRJT05TICovXHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4gIC5mYWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIFxyXG4gIC5mYWRlSW4ge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uc2Vjb25kIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4udGhpcmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5mb3VydGgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIE9USEVSUyAqL1xyXG4gIFxyXG4gICo6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0gXHJcbiAgXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n      <div class=\"fadeIn first\">\n          <img src=\"../../assets/login.png\" id=\"icon\" alt=\"User Icon\" />\n        </div>\n    \n        <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">   \n            <input type=\"text\" id=\"login\" [(ngModel)]=\"model.UserName\" name=\"login\" placeholder=\"login\">\n            <input type=\"password\" id=\"password\"  [(ngModel)]=\"model.Password\"name=\"login\" placeholder=\"password\">\n            <div>\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\n          </div>\n          </form>\n      \n  </div>\n</div>\n         \n          "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        debugger;
        var p = this.model;
        if (this.model.UserName) {
            if (this.model.Password) {
                if (this.model.Password == "roohi") {
                    this.router.navigate(['/user/', this.model.UserName]);
                }
            }
        }
    };
    ;
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    .App {\r\n        width: 100%;\r\n        height: 100vh;\r\n        overflow: hidden;\r\n        display: flex;\r\n        border: 1px solid #ccc;\r\n        color: #333;\r\n        font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\r\n        margin: 0;\r\n      }\r\n  \r\n      h4 {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n      ul {\r\n        list-style: none;\r\n      }\r\n  \r\n      form {\r\n        margin-bottom: 0;\r\n      }\r\n  \r\n      input[type=\"text\"] {\r\n        color: #333;\r\n        border-radius: 0;\r\n      }\r\n  \r\n      .sidebar {\r\n        flex-basis: 15%;\r\n        flex-shrink: 0;\r\n        flex-grow: 0;\r\n        background-color: #300d4f;\r\n        color: #fff;\r\n        padding: 10px 10px;\r\n      }\r\n  \r\n      .left-sidebar section {\r\n        margin-bottom: 20px;\r\n      }\r\n  \r\n      .left-sidebar {\r\n        display: flex;\r\n        flex-direction: column;\r\n      }\r\n  \r\n      .room-members {\r\n        flex-grow: 1;\r\n      }\r\n  \r\n      .right-sidebar .room {\r\n        display: flex;\r\n      }\r\n  \r\n      .newUser-input {\r\n        margin-bottom: 0;\r\n      }\r\n  \r\n      .right-sidebar {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n      }\r\n  \r\n      .room {\r\n        padding: 5px 10px;\r\n        cursor: pointer;\r\n      }\r\n  \r\n      .room:hover {\r\n        background-color: goldenrod;\r\n        color: #333;\r\n      }\r\n  \r\n      .room.active {\r\n        background-color: #11D771;\r\n        color: #333;\r\n      }\r\n  \r\n      .room-name {\r\n        display: inline-block;\r\n        margin-left: 10px;\r\n      }\r\n  \r\n      .user-list li {\r\n        margin-bottom: 10px;\r\n        font-size: 16px;\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n  \r\n      .presence {\r\n        display: inline-block;\r\n        width: 20px;\r\n        height: 20px;\r\n        background-color: #fff;\r\n        margin-right: 10px;\r\n        border-radius: 50%;\r\n      }\r\n  \r\n      .presence.online {\r\n        background-color: green;\r\n      }\r\n  \r\n      .chat-window {\r\n        display: flex;\r\n        flex-grow: 1;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n      }\r\n  \r\n      .chat-header, .chat-footer {\r\n        display: flex;\r\n        align-items: center;\r\n        flex-shrink: 0;\r\n      }\r\n  \r\n      .chat-header {\r\n        border-bottom: 1px solid #ccc;\r\n        padding: 10px 20px;\r\n        height: 40px;\r\n      }\r\n  \r\n      .chat-header h4 {\r\n        margin-bottom: 0;\r\n      }\r\n  \r\n      .chat-session {\r\n        flex-grow: 1;\r\n        padding: 10px 20px;\r\n        overflow-y: auto;\r\n      }\r\n  \r\n      .message-list {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-end;\r\n      }\r\n  \r\n      .user-message {\r\n        margin-top: 10px;\r\n      }\r\n  \r\n      .user-message span {\r\n        display: block;\r\n      }\r\n  \r\n      .user-id {\r\n        font-weight: bold;\r\n      }\r\n  \r\n      .chat-footer {\r\n        padding: 0;\r\n        border-top: 1px solid #ccc;\r\n        height: 50px;\r\n      }\r\n  \r\n      .message-form {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n  \r\n      .message-input {\r\n        width: 100%;\r\n        border: none;\r\n        margin-bottom: 0;\r\n        height: 100%;\r\n      }\r\n  \r\n      .message-input:focus {\r\n        border: none;\r\n      }\r\n  \r\n      .send-message {\r\n        background-color: #300d4f;\r\n        color: #fff;\r\n        border: 1px solid #300d4f;\r\n        padding: 10px;\r\n      }\r\n  \r\n      .create-room {\r\n        padding: 0 10px;\r\n      }\r\n  \r\n      .create-room button {\r\n        display: block;\r\n      }\r\n  \r\n      input[type=\"checkbox\"] {\r\n        margin-bottom: 0;\r\n        display: inline-block;\r\n        margin-right: 5px;\r\n      }\r\n  \r\n      .is-private {\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n  \r\n      .user-rooms h4, .joinable-rooms h4 {\r\n        padding-left: 10px;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFSTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLHdIQUF3SDtRQUN4SCxTQUFTO01BQ1g7O01BRUE7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxXQUFXO1FBQ1gsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxhQUFhO1FBQ2Isc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0UsWUFBWTtNQUNkOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLGlCQUFpQjtRQUNqQixlQUFlO01BQ2pCOztNQUVBO1FBQ0UsMkJBQTJCO1FBQzNCLFdBQVc7TUFDYjs7TUFFQTtRQUNFLHlCQUF5QjtRQUN6QixXQUFXO01BQ2I7O01BRUE7UUFDRSxxQkFBcUI7UUFDckIsaUJBQWlCO01BQ25COztNQUVBO1FBQ0UsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixhQUFhO1FBQ2IsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0UscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSx1QkFBdUI7TUFDekI7O01BRUE7UUFDRSxhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0Qiw4QkFBOEI7TUFDaEM7O01BRUE7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWM7TUFDaEI7O01BRUE7UUFDRSw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLFlBQVk7TUFDZDs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix5QkFBeUI7TUFDM0I7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxjQUFjO01BQ2hCOztNQUVBO1FBQ0UsaUJBQWlCO01BQ25COztNQUVBO1FBQ0UsVUFBVTtRQUNWLDBCQUEwQjtRQUMxQixZQUFZO01BQ2Q7O01BRUE7UUFDRSxXQUFXO1FBQ1gsWUFBWTtNQUNkOztNQUVBO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsWUFBWTtNQUNkOztNQUVBO1FBQ0UsWUFBWTtNQUNkOztNQUVBO1FBQ0UseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsYUFBYTtNQUNmOztNQUVBO1FBQ0UsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGNBQWM7TUFDaEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtNQUNuQjs7TUFFQTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxrQkFBa0I7TUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgIC5BcHAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTUlO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAwZDRmO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubGVmdC1zaWRlYmFyIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmxlZnQtc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb29tLW1lbWJlcnMge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucmlnaHQtc2lkZWJhciAucm9vbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubmV3VXNlci1pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucmlnaHQtc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucm9vbSB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb29tOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnJvb20uYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFENzcxO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb29tLW5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudXNlci1saXN0IGxpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnByZXNlbmNlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucHJlc2VuY2Uub25saW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2hhdC13aW5kb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jaGF0LWhlYWRlciwgLmNoYXQtZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNoYXQtaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jaGF0LWhlYWRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2hhdC1zZXNzaW9uIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm1lc3NhZ2UtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnVzZXItbWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudXNlci1tZXNzYWdlIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC51c2VyLWlkIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2hhdC1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5tZXNzYWdlLWZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubWVzc2FnZS1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5tZXNzYWdlLWlucHV0OmZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNlbmQtbWVzc2FnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMGQ0ZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzAwZDRmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNyZWF0ZS1yb29tIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNyZWF0ZS1yb29tIGJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXMtcHJpdmF0ZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC51c2VyLXJvb21zIGg0LCAuam9pbmFibGUtcm9vbXMgaDQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"App\">\n  <!-- <aside class=\"sidebar left-sidebar\">\n    <section *ngIf=\"!currentUser.id\" class=\"join-chat\">\n      <h4>Join Chat</h4>\n      <form>\n        <input placeholder=\"Enter your username\" type=\"text\" name=\"userid\" [(ngModel)]=\"userId\" />\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"addUser()\">AddUser</button>\n      </form>\n    </section>\n    <section *ngIf=\"currentUser.id\" class=\"room-members\">\n      <h4>Room Users</h4>\n      <ul class=\"user-list\">\n        <li *ngFor=\"let user of roomUsers\">\n          <span class=\"presence {{ user.presence.state }}\"></span>\n          <span>{{ user.name }}</span>\n        </li>\n      </ul>\n    </section>\n    <form *ngIf=\"currentRoom.isPrivate\" >\n      <label for=\"user-name\">Add user to {{ currentRoom.name }}</label>\n      <input type=\"text\" class=\"newUser-input\" [(ngModel)]=\"newUser\" name=\"user-name\" id=\"user-name\" placeholder=\"Enter username\">    \n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addUserToRoom()\">AddUser</button> \n    </form>\n  </aside> -->\n\n  <main class=\"chat-window\">\n    <header class=\"chat-header\">\n      <h4 *ngIf=\"!currentRoom.name; else roomName\">Chat</h4>\n      <ng-template #roomName>\n        <h4>{{ currentRoom.name }}</h4>\n      </ng-template>\n      <span class=\"participants\"></span>\n    </header>\n    <section class=\"chat-session\">\n      <ul class=\"message-list\">\n        <li class=\"user-message\" *ngFor=\"let message of messages\">\n          <span class=\"user-id\">{{ message.senderId }}</span>\n          <span>{{ message.text }}</span>\n        </li>\n      </ul>\n    </section>\n    <footer *ngIf=\"currentUser.id\" class=\"chat-footer\">\n      <form class=\"message-form\" (ngSubmit)='sendMessage()'>\n        <input class=\"message-input\" placeholder=\"Type a message. Hit Enter to send\" type=\"text\" name=\"message\" [(ngModel)]=\"newMessage\" />\n      </form>\n    </footer>\n  </main>\n  <aside class=\"sidebar right-sidebar\">\n    <section class=\"room-section\">\n      <section *ngIf=\"currentUser.id\" class=\"user-rooms\">\n          <h4>Rooms</h4>\n          <ul class=\"room-list\">\n            <li *ngFor=\"let room of userRooms\">\n              <div [class.active]=\"room.id==currentRoom.id\" (click)=\"connectToRoom(room.id)\" class=\"room\">\n                <span class=\"room-status\" *ngIf=\"room.isPrivate; else publicRoom\">🔒</span>\n                <ng-template #publicRoom>\n                  <span>🌐</span>\n                </ng-template>\n                <span class=\"room-name\">{{ room.name }}</span>\n              </div>\n            </li>\n          </ul>\n        </section>\n        <section *ngIf=\"joinableRooms.length > 0\" class=\"joinable-rooms\">\n            <h4>Joinable rooms</h4>\n            <ul class=\"room-list\">\n                <li *ngFor=\"let room of joinableRooms\">\n                  <div class=\"room\" (click)=\"joinRoom(room.id)\">\n                    <span class=\"room-status\" *ngIf=\"room.isPrivate; else publicRoom\">🔒</span>\n                    <ng-template #publicRoom>\n                      <span>🌐</span>\n                    </ng-template>\n                    <span class=\"room-name\">{{ room.name }}</span>\n                  </div>\n                </li>\n              </ul>\n        </section>\n    </section>\n    <section *ngIf=\"currentUser.id\" class=\"create-room\">\n      <form >\n        <input type=\"text\" [(ngModel)]=\"newRoom.name\" name=\"room-name\" id=\"room-name\" placeholder=\"Create a room\">\n        <label for=\"is-private\">\n            <input type=\"checkbox\" [(ngModel)]=\"newRoom.isPrivate\" name=\"is-private\" id=\"is-private\">\n            <span>Is this room private?</span>\n        </label>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"createRoom()\">create Room</button> \n      </form>\n    </section>\n  </aside>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.userId = '';
        this.currentUser = {};
        this.messages = [];
        this.currentRoom = {};
        this.roomUsers = [];
        this.userRooms = [];
        this.newMessage = '';
        this.newRoom = {
            name: '',
            isPrivate: false
        };
        this.newUser = '';
        this.joinableRooms = [];
        debugger;
        this.userId = this.activatedRoute.snapshot.params["itemid"];
        this.addUser();
    }
    UserComponent.prototype.connectToRoom = function (id) {
        var _this = this;
        this.messages = [];
        var currentUser = this.currentUser;
        currentUser.subscribeToRoom({
            roomId: "" + id,
            messageLimit: 100,
            hooks: {
                onMessage: function (message) {
                    _this.messages.push(message);
                },
                onPresenceChanged: function () {
                    _this.roomUsers = _this.currentRoom.users.sort(function (a) {
                        if (a.presence.state === 'online')
                            return -1;
                        return 1;
                    });
                },
            },
        })
            .then(function (currentRoom) {
            _this.currentRoom = currentRoom;
            _this.roomUsers = currentRoom.users;
            _this.userRooms = currentUser.rooms;
        });
    };
    UserComponent.prototype.addUser = function () {
        var _this = this;
        debugger;
        var userId = this.userId;
        var tokenProvider = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default.a.TokenProvider({
            url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e79c9366-b586-4d8d-81ba-dec44fe56126/token'
        });
        var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default.a.ChatManager({
            instanceLocator: "v1:us1:e79c9366-b586-4d8d-81ba-dec44fe56126",
            userId: userId,
            tokenProvider: tokenProvider
        });
        chatManager
            .connect()
            .then(function (currentUser) {
            _this.currentUser = currentUser;
            _this.connectToRoom(currentUser.rooms[0].id);
        })
            .catch(function (error) {
            console.error("error:", error);
        });
    };
    UserComponent.prototype.sendMessage = function () {
        var _a = this, newMessage = _a.newMessage, currentUser = _a.currentUser, currentRoom = _a.currentRoom;
        if (newMessage.trim() === '')
            return;
        currentUser.sendMessage({
            text: newMessage,
            roomId: "" + currentRoom.id,
        });
        this.newMessage = '';
    };
    UserComponent.prototype.createRoom = function () {
        var _this = this;
        var _a = this, _b = _a.newRoom, name = _b.name, isPrivate = _b.isPrivate, currentUser = _a.currentUser;
        if (name.trim() === '')
            return;
        currentUser.createRoom({
            name: name,
            private: isPrivate,
        }).then(function (room) {
            _this.connectToRoom(room.id);
            _this.newRoom = {
                name: '',
                isPrivate: false,
            };
        })
            .catch(function (err) {
            console.log("Error creating room " + err);
        });
    };
    UserComponent.prototype.getJoinableRooms = function () {
        var _this = this;
        var currentUser = this.currentUser;
        currentUser.getJoinableRooms()
            .then(function (rooms) {
            _this.joinableRooms = rooms;
        })
            .catch(function (err) {
            console.log("Error getting joinable rooms: " + err);
        });
    };
    UserComponent.prototype.joinRoom = function (id) {
        var currentUser = this.currentUser;
        currentUser.joinRoom({ roomId: id })
            .catch(function (err) {
            console.log("Error joining room " + id + ": " + err);
        });
    };
    UserComponent.prototype.addUserToRoom = function () {
        var _this = this;
        var _a = this, newUser = _a.newUser, currentUser = _a.currentUser, currentRoom = _a.currentRoom;
        currentUser.addUserToRoom({
            userId: newUser,
            roomId: currentRoom.id
        })
            .then(function (currentRoom) {
            _this.roomUsers = currentRoom.users;
        })
            .catch(function (err) {
            console.log("Error adding user: " + err);
        });
        this.newUser = '';
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\demo\MyChatApp\ChatApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map