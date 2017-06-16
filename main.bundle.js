webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: []
    },
    {
        path: 'canvas/:painterConstructor',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['canvas', 'RandomWalkerPainter']\" routerLinkActive=\"active\">Random Walker <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row\">\n  <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['canvas', 'RandomWalkerPainter']\" routerLinkActive=\"active\">Random Walker <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </nav>\n\n  <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exception_handler__ = __webpack_require__("../../../../../src/app/exception.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__canvas_canvas_component__["a" /* CanvasComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2__exception_handler__["a" /* ExceptionHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<section class=\"row text-center\">\n  <div class=\"col-sm-9\">\n    <canvas #canvas width=\"500\" height=\"500\"></canvas>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_painter_mapper__ = __webpack_require__("../../../../../src/app/utils/painter-mapper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanvasComponent = (function () {
    function CanvasComponent(ngZone, route) {
        this.ngZone = ngZone;
        this.route = route;
        this.title = 'Painter Component';
    }
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var painterConstructor = this.route.snapshot.params['painterConstructor'];
        this.painter = this.createPainter(__WEBPACK_IMPORTED_MODULE_2__utils_painter_mapper__["a" /* PainterMapper */].map(painterConstructor));
        this.title = this.painter.title();
        this.running = true;
        this.ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () { return _this.paint(); });
        });
    };
    CanvasComponent.prototype.ngOnDestroy = function () {
        this.running = false;
    };
    CanvasComponent.prototype.createPainter = function (pc) {
        return new pc(this.canvasRef);
    };
    CanvasComponent.prototype.paint = function () {
        var _this = this;
        // Check that we're still running.
        if (!this.running) {
            return;
        }
        this.painter.paint();
        // Schedule next
        requestAnimationFrame(function () { return _this.paint(); });
    };
    return CanvasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], CanvasComponent.prototype, "painterConstructor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], CanvasComponent.prototype, "canvasRef", void 0);
CanvasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-canvas',
        template: __webpack_require__("../../../../../src/app/canvas/canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/canvas.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], CanvasComponent);

var _a, _b, _c;
//# sourceMappingURL=canvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/random-walker-painter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__random_walker__ = __webpack_require__("../../../../../src/app/canvas/random-walker.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomWalkerPainter; });

var RandomWalkerPainter = (function () {
    function RandomWalkerPainter(canvasRef) {
        this.canvasRef = canvasRef;
        this.painterTitle = 'Random Walker (perlin noise)';
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        this.randomWalker = new __WEBPACK_IMPORTED_MODULE_0__random_walker__["a" /* RandomWalker */](this.ctx, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    }
    RandomWalkerPainter.prototype.paint = function () {
        this.randomWalker.step();
        this.randomWalker.display();
    };
    RandomWalkerPainter.prototype.title = function () {
        return this.painterTitle;
    };
    return RandomWalkerPainter;
}());

//# sourceMappingURL=random-walker-painter.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/random-walker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_number_helper__ = __webpack_require__("../../../../../src/app/utils/number-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vector__ = __webpack_require__("../../../../../src/app/models/vector.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomWalker; });


var RandomWalker = (function () {
    function RandomWalker(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.noise = window['noise'];
        this.noise.seed(Math.random());
        this.velocity = new __WEBPACK_IMPORTED_MODULE_1__models_vector__["a" /* Vector */](0, 10000);
        this.generateNewLocation();
    }
    RandomWalker.prototype.step = function () {
        this.generateNewLocation();
        this.velocity.add(0.005);
    };
    RandomWalker.prototype.display = function () {
        this.ctx.beginPath();
        this.ctx.ellipse(this.location.x, this.location.y, 1, 1, 45 * Math.PI / 180, 0, 2 * Math.PI);
        this.ctx.stroke();
    };
    RandomWalker.prototype.generateNewLocation = function () {
        this.location = new __WEBPACK_IMPORTED_MODULE_1__models_vector__["a" /* Vector */](__WEBPACK_IMPORTED_MODULE_0__utils_number_helper__["a" /* NumberHelper */].map(this.noise.simplex2(this.velocity.x, 0), -1, 1, 0, this.width), __WEBPACK_IMPORTED_MODULE_0__utils_number_helper__["a" /* NumberHelper */].map(this.noise.simplex2(this.velocity.y, 0), -1, 1, 0, this.height));
    };
    return RandomWalker;
}());

//# sourceMappingURL=random-walker.js.map

/***/ }),

/***/ "../../../../../src/app/exception.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptionHandler; });
var ExceptionHandler = (function () {
    function ExceptionHandler() {
    }
    ExceptionHandler.prototype.handleError = function (error) {
        console.log(error);
        console.log(error.message);
    };
    return ExceptionHandler;
}());

//# sourceMappingURL=exception.handler.js.map

/***/ }),

/***/ "../../../../../src/app/models/vector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
var Vector = (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.add = function (increment) {
        this.x += increment;
        this.y += increment;
        this.z += increment;
    };
    return Vector;
}());

//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "../../../../../src/app/utils/number-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberHelper; });
var NumberHelper = (function () {
    function NumberHelper() {
    }
    NumberHelper.map = function (value, in_min, in_max, out_min, out_max) {
        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };
    return NumberHelper;
}());

//# sourceMappingURL=number-helper.js.map

/***/ }),

/***/ "../../../../../src/app/utils/painter-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_random_walker_painter__ = __webpack_require__("../../../../../src/app/canvas/random-walker-painter.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainterMapper; });

var PainterMapper = (function () {
    function PainterMapper() {
    }
    PainterMapper.map = function (className) {
        if (__WEBPACK_IMPORTED_MODULE_0__canvas_random_walker_painter__["a" /* RandomWalkerPainter */].name === className) {
            return __WEBPACK_IMPORTED_MODULE_0__canvas_random_walker_painter__["a" /* RandomWalkerPainter */];
        }
    };
    return PainterMapper;
}());

//# sourceMappingURL=painter-mapper.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) { return console.error(err); });
;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map