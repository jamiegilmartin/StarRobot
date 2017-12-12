webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\n  <div class=\"bg\"><img src=\"{{ imageSrc }}\"></div>\n  <canvas id=\"canvas\" #viewer></canvas>\n\n  <div class=\"main\">\n    <header>\n      <div class=\"column\">\n        <div class=\"battery batteryOne\">\n        <p class=\"percentage\">0%</p>\n        <ul>\n          <li><div></div></li>\n          <li><div></div></li>\n          <li><div></div></li>\n          <li><div></div></li>\n          <li><div></div></li>\n        </ul>\n        <p class=\"volts\">0 volts</p>\n        <p class=\"amps\">0 amps</p>\n      </div>\n        <div class=\"battery batteryTwo\">\n        <p class=\"percentage\">0%</p>\n        <ul>\n          <li><div></div></li>\n          <li><div></div></li>\n          <li><div></div></li>\n          <li><div></div></li>\n          <li><div></div></li>\n        </ul>\n        <p class=\"volts\">0 volts</p>\n        <p class=\"amps\">0 amps</p>\n      </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"distance\">\n          00.00.00\n        </div>\n      </div>\n      <div class=\"column\">\n\n        <div class=\"weather\">\n          <p class=\"temperature\">0 degrees C</p>\n          <p class=\"humidity\">0% humidity</p>\n        </div>\n\n        <div class=\"battery solarPanel panelOne\">\n          <p class=\"capacity\">0% capacity</p>\n          <ul>\n            <li><div></div></li>\n            <li><div></div></li>\n            <li><div></div></li>\n            <li><div></div></li>\n            <li><div></div></li>\n          </ul>\n          <p class=\"volts\">0 volts</p>\n          <p class=\"amps\">0 amps</p>\n        </div>\n        <div class=\"battery solarPanel panelTwo\">\n          <p class=\"capacity\">0% capacity</p>\n          <ul>\n            <li><div></div></li>\n            <li><div></div></li>\n            <li><div></div></li>\n            <li><div></div></li>\n            <li><div></div></li>\n          </ul>\n          <p class=\"volts\">0 volts</p>\n          <p class=\"amps\">0 amps</p>\n        </div>\n      </div>\n    </header>\n\n    <section class=\"middle\">\n      <!-- <div class=\"driverMode\">Automatic</div> -->\n\n      <section class=\"alerts\">\n        <p>{{alert}}</p>\n      </section>\n    </section>\n\n    <footer>\n      <app-joystick\n        [name]=\"'drive'\"\n        [up]=\"'w'\"\n        [down]=\"'s'\"\n        [left]=\"'a'\"\n        [right]=\"'d'\"\n        (onPress)=\"press($event)\"\n        (onRelease)=\"release($event)\"\n        class=\"driverController\"></app-joystick>\n\n      <app-joystick\n      [name]=\"'track'\"\n      (onPress)=\"press($event)\"\n      (onRelease)=\"release($event)\"\n      class=\"trackerController\"></app-joystick>\n\n      <div class=\"btn break\">break</div>\n\n    </footer>\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.bg {\n  position: absolute;\n  width: 96em;\n  height: 64em;\n  top: 0;\n  left: 0;\n  z-index: 0; }\n  .bg img {\n    display: block;\n    width: 100%; }\n\n#canvas {\n  position: absolute;\n  width: 96em;\n  height: 64em;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.1); }\n\n.mainContainer {\n  /*960x640 // 320x480 */\n  position: relative;\n  width: 96em;\n  height: 64em;\n  margin: 2em auto;\n  border: 0.4em solid #ddd; }\n  .mainContainer ul {\n    list-style-type: none; }\n\n.main {\n  position: absolute;\n  width: 96em;\n  height: 64em;\n  z-index: 2; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .mainContainer {\n    font-size: 0.5em;\n    margin: 0;\n    -webkit-user-select: none; } }\n\n/*header*/\nheader {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  overflow: hidden;\n  /*.battery*/\n  /*solarPanel*/ }\n  header .column {\n    overflow: hidden;\n    float: left;\n    width: 33%; }\n  header .battery {\n    padding-right: 1em;\n    float: left; }\n    header .battery ul {\n      overflow: hidden;\n      height: 1.5em;\n      width: 5em;\n      padding: 0 1% 0 2%;\n      margin: 0.5em 0;\n      border: 1px solid #00aeef; }\n      header .battery ul li {\n        float: left;\n        width: 1em;\n        height: 100%;\n        padding: 2% 0 0 1%; }\n        header .battery ul li div {\n          width: 90%;\n          height: 90%;\n          background: #838dee; }\n  header .solarPanel {\n    float: right;\n    padding: 0 0 0 1em; }\n  header .weather {\n    float: left; }\n  header .distance {\n    text-align: center;\n    padding-top: 1em; }\n\n/*middle*/\n.middle {\n  width: 66.6%;\n  margin: 20em auto;\n  text-align: center; }\n\n/*footer*/\nfooter {\n  position: absolute;\n  bottom: 0em;\n  width: 96%;\n  height: 35em;\n  overflow: hidden;\n  padding: 0 2%;\n  /*break*/ }\n  footer .driverController {\n    float: left; }\n  footer .trackerController {\n    float: right; }\n  footer .break {\n    width: 40%;\n    margin: 14.5em auto;\n    text-align: center;\n    border: 4px solid #ddd;\n    padding: 2em;\n    cursor: pointer;\n    background-color: rgba(0, 174, 239, 0.3);\n    display: none; }\n  footer .break:hover,\n  footer .break.active {\n    background-color: #ddd;\n    color: #00aeef; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.imageSrc = '';
        this.alert = 'drive savely!';
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.canvas = this.viewer.nativeElement.getContext('2d');
        console.log('canvas', this.canvas);
        this.setImage('/assets/etv.jpg');
    };
    /**
     * Socket listen
     */
    AppComponent.prototype.listen = function () {
        var _this = this;
        console.log('socket listening', this.socket);
        this.socket.on('connect', function (data) {
            // socket connected
            console.log('this.socket', _this.socket.id, _this.socket, data);
        });
        this.socket.on('userConnected', function (data) {
            console.log('userConnected', data);
        });
        this.socket.on('userDisconnected', function (data) {
            console.log('userDisconnected', data);
        });
        this.socket.on('distance', function (data) {
            console.log('distance', data);
        });
        this.socket.on('newImage', function (data) {
            console.log('newImage', data);
        });
    };
    /**
     * Socket send
     */
    AppComponent.prototype.send = function (name, action) {
        console.log('socket send', name, action);
        this.socket.emit(name, { name: action });
    };
    AppComponent.prototype.press = function (joystick) {
        this.send(joystick.name, joystick.action);
    };
    AppComponent.prototype.release = function (joystick) {
        //console.log('release', joystick.name, joystick.action);
        //TODO
    };
    AppComponent.prototype.setImage = function (src) {
        this.imageSrc = src;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('viewer'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "viewer", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_joystick_joystick_component__ = __webpack_require__("../../../../../src/app/shared/joystick/joystick.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__shared_joystick_joystick_component__["a" /* JoystickComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/joystick/joystick.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controller driverController\">\n  <p>{{name}}</p>\n  <div (mousedown)=\"mDown('up')\" (mouseup)=\"mUp('up')\" class=\"btn up\" *ngIf=\"up\">{{up}}</div>\n  <div (mousedown)=\"mDown('down')\" (mouseup)=\"mUp('down')\" class=\"btn down\"*ngIf=\"down\">{{down}}</div>\n  <div (mousedown)=\"mDown('left')\" (mouseup)=\"mUp('left')\" class=\"btn left\" *ngIf=\"left\">{{left}}</div>\n  <div (mousedown)=\"mDown('right')\" (mouseup)=\"mUp('right')\" class=\"btn right\" *ngIf=\"right\">{{right}}</div>\n\n  <div (mousedown)=\"mDown('up')\" (mouseup)=\"mUp('up')\" class=\"btn up\" *ngIf=\"!up\">&#8593;</div>\n  <div (mousedown)=\"mDown('down')\" (mouseup)=\"mUp('down')\" class=\"btn down\" *ngIf=\"!down\">&#8595;</div>\n  <div (mousedown)=\"mDown('left')\" (mouseup)=\"mUp('left')\" class=\"btn left\" *ngIf=\"!left\">&#8592;</div>\n  <div (mousedown)=\"mDown('right')\" (mouseup)=\"mUp('right')\" class=\"btn right\" *ngIf=\"!right\">&#8594;</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/joystick/joystick.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.controller {\n  position: relative;\n  width: 20em;\n  height: 20em;\n  margin: 1em;\n  background-color: rgba(131, 141, 238, 0.1);\n  border: 0.1em solid rgba(0, 174, 239, 0.3);\n  font-size: 1.5em;\n  border-radius: 10em; }\n  .controller p {\n    position: absolute;\n    width: 5em;\n    height: 5em;\n    padding: 1.8em 0 2em 0;\n    box-sizing: border-box;\n    text-align: center;\n    background-color: rgba(131, 141, 238, 0.5);\n    border: 0.1em solid #00aeef;\n    top: 38%;\n    left: 39%;\n    color: #ddd;\n    letter-spacing: 0.1em;\n    border-radius: 10em;\n    transition: all 0.2s ease-in-out;\n    opacity: 0.3; }\n  .controller p.active {\n    opacity: 1; }\n  .controller .btn {\n    position: absolute;\n    border: 4px solid #ddd;\n    padding: 2em;\n    cursor: pointer;\n    background-color: rgba(0, 174, 239, 0.3);\n    /*54x58*/ }\n  .controller .btn:hover,\n  .controller .btn.active {\n    background-color: #ddd;\n    color: #00aeef; }\n  .controller .btn.up {\n    top: -5%;\n    left: 38%; }\n  .controller .btn.down {\n    bottom: -5%;\n    left: 38%; }\n  .controller .btn.left {\n    top: 37%;\n    left: -5%; }\n  .controller .btn.right {\n    top: 37%;\n    right: -5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/joystick/joystick.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoystickComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoystickComponent = (function () {
    function JoystickComponent() {
        this.onPress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onRelease = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    JoystickComponent.prototype.ngOnInit = function () {
    };
    JoystickComponent.prototype.mDown = function (btn) {
        this.onPress.emit({ name: this.name, action: btn });
    };
    JoystickComponent.prototype.mUp = function (btn) {
        this.onRelease.emit({ name: this.name, action: btn });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "up", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "down", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "right", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "onPress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], JoystickComponent.prototype, "onRelease", void 0);
    JoystickComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-joystick',
            template: __webpack_require__("../../../../../src/app/shared/joystick/joystick.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/joystick/joystick.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JoystickComponent);
    return JoystickComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map