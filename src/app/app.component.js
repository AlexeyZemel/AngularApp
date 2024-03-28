"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularApp';
        this.greeting = '';
    }
    ngOnInit() {
        console.log('Init');
    }
    sayHi() {
        alert('Hi, ' + this.greeting);
    }
    ngOnDestroy() {
        console.log('Destroy');
    }
    ngOnChanges() {
        console.log('Changes');
    }
    ngDoCheck() {
        console.log('Check');
    }
    ngAfterContentInit() {
        console.log('AfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('AfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('AfterViewInit');
    }
    ngAfterViewChecked() {
        console.log('AfterViewChecked');
    }
};
exports.AppComponent = AppComponent;
exports.AppComponent = AppComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        standalone: true,
        imports: [router_1.RouterOutlet, forms_1.FormsModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
], AppComponent);
