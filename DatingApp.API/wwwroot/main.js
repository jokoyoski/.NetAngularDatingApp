(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./Model/pagination.ts":
/*!*****************************!*\
  !*** ./Model/pagination.ts ***!
  \*****************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./Model/user.ts":
/*!***********************!*\
  !*** ./Model/user.ts ***!
  \***********************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./directives/role.directive.ts":
/*!**************************************!*\
  !*** ./directives/role.directive.ts ***!
  \**************************************/
/*! exports provided: RoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDirective", function() { return RoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/auth.service */ "./src/app/Services/auth.service.ts");



var RoleDirective = /** @class */ (function () {
    function RoleDirective(viewContaierRef, templateRef, authService) {
        this.viewContaierRef = viewContaierRef;
        this.templateRef = templateRef;
        this.authService = authService;
        this.isVisible = false;
    }
    RoleDirective.prototype.ngInit = function () {
        var userRoles = this.authService.decodedToken.role;
        if (!userRoles) {
            this.viewContaierRef.clear();
        }
        if (this.authService.roleMatch(this.appRole)) {
            if (!this.isVisible) {
                this.isVisible = true;
                this.viewContaierRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.isVisible = false;
                this.viewContaierRef.clear();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RoleDirective.prototype, "appRole", void 0);
    RoleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appRole]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RoleDirective);
    return RoleDirective;
}());



/***/ }),

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

/***/ "./src/_resolvers/lists.resolver.ts":
/*!******************************************!*\
  !*** ./src/_resolvers/lists.resolver.ts ***!
  \******************************************/
/*! exports provided: ListsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsResolver", function() { return ListsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        // tslint:disable-next-line: whitespace
        console.log(this.likesParam);
        return this.userService.GetUserLikes(this.pageNumber, this.pageSize, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    ListsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "./src/_resolvers/member-detail.resolver.ts":
/*!**************************************************!*\
  !*** ./src/_resolvers/member-detail.resolver.ts ***!
  \**************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params.id).pipe(// i think we dont need + when we put here
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "./src/_resolvers/member-edit.resolver.ts":
/*!************************************************!*\
  !*** ./src/_resolvers/member-edit.resolver.ts ***!
  \************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");









var MemberEditResolver = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"]();
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        var code = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(code); // decoding token
        return this.userService.getUser(this.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "./src/_resolvers/member-list.resolver.ts":
/*!************************************************!*\
  !*** ./src/_resolvers/member-list.resolver.ts ***!
  \************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        console.log('ok');
        // tslint:disable-next-line: whitespace
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "./src/_resolvers/message.resolvers.ts":
/*!*********************************************!*\
  !*** ./src/_resolvers/message.resolvers.ts ***!
  \*********************************************/
/*! exports provided: MessageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageResolver", function() { return MessageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MessageResolver = /** @class */ (function () {
    function MessageResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
    }
    MessageResolver.prototype.resolve = function (route) {
        var _this = this;
        console.log('ok');
        // tslint:disable-next-line: whitespace
        return this.userService.getMessages(this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MessageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MessageResolver);
    return MessageResolver;
}());



/***/ }),

/***/ "./src/app/Messages/Messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/Messages/Messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    margin-top: 15px;\r\n}\r\n.img-circle{\r\nmax-height:50px;\r\n}\r\n.btn1{\r\n    color:#fff !important;\r\n    background-color: #3a5878 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVzc2FnZXMvTWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBSUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hcHAvTWVzc2FnZXMvTWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uaW1nLWNpcmNsZXtcclxubWF4LWhlaWdodDo1MHB4O1xyXG59XHJcblxyXG5cclxuICBcclxuLmJ0bjF7XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ODc4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Messages/Messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/Messages/Messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 \">\r\n  <div class=\"row offset-md-3\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn1\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope\"></i> Unread\r\n      </button>\r\n      <button class=\"btn btn1\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope-open\"></i> Inbox\r\n      </button>\r\n      <button class=\"btn btn1\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-paper-plane\"></i> Outbox\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\r\n    <h3>No messages</h3>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\r\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\r\n      <tr>\r\n        <th style=\"width: 40%\">Message</th>\r\n        <th style=\"width: 20%\">From / To</th>\r\n        <th style=\"width: 20%\">Sent / Received</th>\r\n        <th style=\"width: 20%\"></th>\r\n      </tr>\r\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \r\n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab:3}\">\r\n        <td>{{message.content}}</td>\r\n        <td>\r\n          <div *ngIf=\"messageContainer != 'Outbox'\">\r\n                <img src={{message?.senderPhoto}} class=\"img-circle rounded-circle\">\r\n                <strong>{{message.senderName}}</strong>\r\n          </div>\r\n          <div *ngIf=\"messageContainer == 'Outbox'\">\r\n                <img src={{message?.recipientPhoto}} class=\"img-circle rounded-circle\">\r\n                <strong>{{message.recipientName}}</strong>\r\n          </div>\r\n        </td>\r\n        <td>{{message.messageSent|date}}</td>\r\n        <td>\r\n          <button (click)=\"deleteMessage(message.id)\" (click)=\"$event.stopPropagation()\" class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"messages.length!=0\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <pagination [boundaryLinks]=\"true\" \r\n                [totalItems]=\"paginated.totalItems\"\r\n                [itemsPerPage]=\"paginated.itemsPerPage\"\r\n                [(ngModel)]=\"paginated.currentPage\"\r\n                (pageChanged)=\"pageChanged($event)\"\r\n              previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n  </pagination>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Messages/Messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/Messages/Messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log(data.messages.result);
            _this.messages = data.messages.result;
            _this.paginated = data.messages.pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        console.log('joko');
        this.userService.getMessages(this.paginated.currentPage, this.paginated.itemsPerPage, this.messageContainer)
            .subscribe(function (res) {
            _this.messages = res.result;
            console.log(_this.messages);
            _this.paginated = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.alertify.confirm('Are you sure you want to delete ?', function () {
            _this.userService.deleteMessage(id, userId).subscribe(function (data) {
                console.log(data.message);
                // tslint:disable-next-line: triple-equals
                _this.messages.splice(_this.messages.findIndex(function (m) { return m.id == id; }), 1);
                _this.alertify.success(data.message);
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.paginated.currentPage = event.page;
        console.log(this.paginated.currentPage);
        this.loadMessages();
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Messages',
            template: __webpack_require__(/*! ./Messages.component.html */ "./src/app/Messages/Messages.component.html"),
            styles: [__webpack_require__(/*! ./Messages.component.css */ "./src/app/Messages/Messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/Services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminService = /** @class */ (function () {
    function AdminService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].api;
    }
    AdminService.prototype.getUserRoles = function () {
        console.log('err');
        return this.httpClient.get(this.baseUrl + 'admin/GetUsersRole');
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/Services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.pic = '../../assets/web/images/user.png';
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('../../assets/web/images/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
        this.mainUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].api;
        this.registerURL = 'http://localhost:5000/api/';
    }
    AuthService.prototype.canMemberChangePhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl); // the behaviour subject has a next attr which signifies the next value
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        console.log(this.mainUrl);
        return this.http.post('http://jokoyoski200-001-site1.itempurl.com/api/auth/login', model)
            .pipe(// the post is an observable so we always need to pipe an observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.result = response;
            if (_this.result) {
                localStorage.setItem('token', _this.result.token);
                localStorage.setItem('gender', _this.result.gender);
                _this.decodedToken = _this.jwtHelper.decodeToken(_this.result.token); // decoding token
                localStorage.setItem('userId', _this.decodedToken.nameid);
                localStorage.setItem('userName', _this.decodedToken.unique_name);
                _this.decodedTokenName = _this.decodedToken.unique_name;
                console.log(_this.result.photoUrl);
                if (_this.result.photoUrl !== null) {
                    localStorage.setItem('picUrl', _this.result.photoUrl);
                    _this.userPic = _this.result.photoUrl;
                    _this.canMemberChangePhoto(_this.result.photoUrl);
                }
                else {
                    _this.canMemberChangePhoto(_this.pic);
                    localStorage.setItem('picUrl', _this.pic);
                }
            }
            console.log(localStorage.getItem('token'));
        }));
    };
    AuthService.prototype.Upload = function (file) {
        var tokenId = localStorage.getItem('userId');
        var url = this.mainUrl + 'photos/' + tokenId + '/savePhoto';
        var fd = new FormData();
        fd.append('FormFile', file, file.name);
        return this.http.post(url, fd);
    };
    AuthService.prototype.MakeMain = function (photoId) {
        var tokenId = localStorage.getItem('userId');
        var url = this.mainUrl + 'photos/' + photoId + '/' + tokenId + '/updatePhoto';
        return this.http.get(url);
    };
    AuthService.prototype.register = function (model) {
        return this.http.post('http://jokoyoski200-001-site1.itempurl.com/api/Auth/Register', model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        var tokens = this.jwtHelper.isTokenExpired(token);
        if (tokens === false) {
            return true;
        }
        return false;
    };
    AuthService.prototype.DeletePhoto = function (photoId) {
        var tokenId = localStorage.getItem('userId');
        var url = this.mainUrl + 'photos/' + photoId + '/' + tokenId + '/deletePhoto';
        return this.http.get(url);
    };
    AuthService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var userRoles = this.decodedToken.role;
        allowedRoles.forEach(function (element) {
            if (userRoles.includes(element)) {
                isMatch = true;
            }
        });
        return isMatch;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                var applicationError = error.headers.get("Application-Error");
                {
                    if (applicationError) {
                        console.error(applicationError);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
                    }
                }
                var serverError = error.error;
                var modelStateError = "";
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateError += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modelStateError || serverError || 'ServerError');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/app/Services/scriptsloader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/scriptsloader.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptStore, ScriptsloaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptsloaderService", function() { return ScriptsloaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptStore = [
    { name: 'misc', src: '../../assets/web/js/misc.js' },
    { name: 'easydrop', src: '../../assets/web/js/jquery.easydropdown.js' },
    { name: 'flexslider', src: '../../assets/web/js/jquery.flexslider.js' },
    { name: 'wow', src: '../../assets/web/js/wow.min.js' },
    { name: 'wowinit', src: '../../assets/web/js/wow.init.js' },
];
var ScriptsloaderService = /** @class */ (function () {
    function ScriptsloaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptsloaderService.prototype.loadJS = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadJSFile(script)); });
        return Promise.all(promises);
    };
    ScriptsloaderService.prototype.loadJSFile = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    };
    ScriptsloaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScriptsloaderService);
    return ScriptsloaderService;
}());



/***/ }),

/***/ "./src/app/Services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var Model_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Model/pagination */ "./Model/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");






var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.mainUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].api;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams) {
        var paginatedResult = new Model_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('PageNumber', page);
            params = params.append('PageSize', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.activity);
        }
        console.log(params);
        return this.httpClient.get(this.mainUrl + 'users', { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                console.log(JSON.parse(response.headers.get('Pagination')));
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.GetUserLikes = function (page, itemsPerPage, userParams) {
        var paginatedResult = new Model_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('PageNumber', page);
            params = params.append('PageSize', itemsPerPage);
        }
        console.log(userParams);
        if (userParams != null) {
            params = params.append('UserStatusLikes', userParams);
        }
        console.log(params);
        return this.httpClient.get(this.mainUrl + 'users' + '/getuserlike', { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                console.log(JSON.parse(response.headers.get('Pagination')));
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    // tslint:disable-next-line:ban-types
    UserService.prototype.UpdateUser = function (id, model) {
        // tslint:disable-next-line:ban-types
        return this.httpClient.put(this.mainUrl + 'users/' + id, model);
    };
    UserService.prototype.getUser = function (id) {
        console.log(id);
        return this.httpClient.get(this.mainUrl + 'users/GetUser?id=' + id);
    };
    UserService.prototype.LikeUser = function (like) {
        console.log(like);
        // tslint:disable-next-line: ban-types
        return this.httpClient.post(this.mainUrl + 'users/likeuser', like).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            return response;
        }));
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.httpClient.get(this.mainUrl + 'message/GetMessageThread?userId=' + id + '&recipientId=' + recipientId);
    };
    UserService.prototype.getMessages = function (page, itemsPerPage, messageContainer) {
        var paginatedResult = new Model_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('PageNumber', page);
            params = params.append('PageSize', itemsPerPage);
        }
        params = params.append('MessageContainer', messageContainer);
        var id = localStorage.getItem('userId');
        return this.httpClient.get(this.mainUrl + 'message/GetMessageForUser?userId=' + id, { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                console.log(JSON.parse(response.headers.get('Pagination')));
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.sendMessage = function (message) {
        return this.httpClient.post(this.mainUrl + 'message/CreateMessage?userId=' + message.userId, message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.httpClient.get(this.mainUrl + 'message/DeleteMessage?MessageId=' + id + '&userId=' + userId);
    };
    UserService.prototype.markAsRead = function (id, userId) {
        console.log(3);
        return this.httpClient.get(this.mainUrl + 'message/MarkAsRead?userId=' + userId + '&id=' + id).subscribe();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/alertify.service */ "./src/app/Services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function (next) {
        var roles = next.firstChild.data['roles'];
        console.log(roles);
        if (roles) {
            var match = this.authService.roleMatch(roles);
            if (match) {
                return true;
            }
            else {
                this.router.navigate(['members']);
                this.alertify.error('You are not authorize');
            }
        }
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.warning('You shall not Pass !!!');
        this.router.navigate(['/home']); // navigate to home
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());

// this is the guard that was created when user needs to login, it was created and imported through app.module.ts and was used in the routes;


/***/ }),

/***/ "./src/app/admin/admin-panel/admin-panel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-panel/admin-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" >\n<h2>Admin Panel</h2>\n<div class=\"tab-panel\">\n<tabset clas=\"member-tabset\">\n<tab heading=\"User Managemnt\">\n<app-user-managment></app-user-managment>\n</tab>\n<tab  heading=\"Photo Managemnt\">\n<app-photo-managment></app-photo-managment>\n</tab>\n</tabset>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-panel/admin-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/admin/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/admin/admin-panel/admin-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/photo-managment/photo-managment.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/photo-managment/photo-managment.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bob3RvLW1hbmFnbWVudC9waG90by1tYW5hZ21lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/photo-managment/photo-managment.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/photo-managment/photo-managment.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  photo-managment works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/photo-managment/photo-managment.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/photo-managment/photo-managment.component.ts ***!
  \********************************************************************/
/*! exports provided: PhotoManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoManagmentComponent", function() { return PhotoManagmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotoManagmentComponent = /** @class */ (function () {
    function PhotoManagmentComponent() {
    }
    PhotoManagmentComponent.prototype.ngOnInit = function () {
    };
    PhotoManagmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-managment',
            template: __webpack_require__(/*! ./photo-managment.component.html */ "./src/app/admin/photo-managment/photo-managment.component.html"),
            styles: [__webpack_require__(/*! ./photo-managment.component.css */ "./src/app/admin/photo-managment/photo-managment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotoManagmentComponent);
    return PhotoManagmentComponent;
}());



/***/ }),

/***/ "./src/app/admin/roles-modal/roles-modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/roles-modal/roles-modal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGVzLW1vZGFsL3JvbGVzLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/roles-modal/roles-modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/roles-modal/roles-modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  roles-modal works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/roles-modal/roles-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/roles-modal/roles-modal.component.ts ***!
  \************************************************************/
/*! exports provided: RolesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function() { return RolesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RolesModalComponent = /** @class */ (function () {
    function RolesModalComponent() {
    }
    RolesModalComponent.prototype.ngOnInit = function () {
    };
    RolesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles-modal',
            template: __webpack_require__(/*! ./roles-modal.component.html */ "./src/app/admin/roles-modal/roles-modal.component.html"),
            styles: [__webpack_require__(/*! ./roles-modal.component.css */ "./src/app/admin/roles-modal/roles-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RolesModalComponent);
    return RolesModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-managment/user-managment.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/user-managment/user-managment.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdtZW50L3VzZXItbWFuYWdtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/user-managment/user-managment.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-managment/user-managment.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<table class=\"table\">\n<tr>\n<th style=\" width: 10%\"> UserId\n\n</th>\n<th style=\" width: 10%\"> UserName\n\n</th>\n<th style=\" width: 10%\"> Roles\n\n</th>\n</tr>\n<tr *ngFor=\"let user of users\">\n<td>{{user.id}}</td>\n<td>{{user.userName}}</td>\n<td>{{user.roles}}</td>\n<td><button class=\"btn btn-danger\">Edit Roles</button></td>\n</tr>\n\n\n</table>\n</div>"

/***/ }),

/***/ "./src/app/admin/user-managment/user-managment.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/user-managment/user-managment.component.ts ***!
  \******************************************************************/
/*! exports provided: UserManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagmentComponent", function() { return UserManagmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/admin.service */ "./src/app/Services/admin.service.ts");



var UserManagmentComponent = /** @class */ (function () {
    function UserManagmentComponent(adminService) {
        this.adminService = adminService;
    }
    UserManagmentComponent.prototype.ngOnInit = function () {
        this.getUsersWithRoles();
    };
    UserManagmentComponent.prototype.getUsersWithRoles = function () {
        var _this = this;
        this.adminService.getUserRoles().subscribe(function (users) {
            console.log(users);
            _this.users = users;
        }, function (error) {
            console.log(error);
        });
    };
    UserManagmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-managment',
            template: __webpack_require__(/*! ./user-managment.component.html */ "./src/app/admin/user-managment/user-managment.component.html"),
            styles: [__webpack_require__(/*! ./user-managment.component.css */ "./src/app/admin/user-managment/user-managment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], UserManagmentComponent);
    return UserManagmentComponent;
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

module.exports = "\r\n<app-nav></app-nav>\r\n <router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, spinner) {
        this.authService = authService;
        this.spinner = spinner;
        this.title = 'DatingApp-SPA';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    // tslint:disable-next-line: use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var url = localStorage.getItem('picUrl');
        var user = localStorage.getItem('userName');
        console.log('name', user);
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (user) {
            this.authService.decodedTokenName = user;
        }
        if (url) {
            console.log(url);
            this.authService.userPic = url;
            this.authService.canMemberChangePhoto(url);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: TokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenGetter", function() { return TokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _Services_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Services/error.interceptor */ "./src/app/Services/error.interceptor.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _members_Member_List_Member_List_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./members/Member-List/Member-List.component */ "./src/app/members/Member-List/Member-List.component.ts");
/* harmony import */ var _Messages_Messages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Messages/Messages.component */ "./src/app/Messages/Messages.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var src_resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/_resolvers/member-detail.resolver */ "./src/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../_resolvers/member-list.resolver */ "./src/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../_resolvers/member-edit.resolver */ "./src/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "./src/app/admin/admin-panel/admin-panel.component.ts");
/* harmony import */ var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./photo-editor/photo-editor.component */ "./src/app/photo-editor/photo-editor.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _Services_scriptsloader_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Services/scriptsloader.service */ "./src/app/Services/scriptsloader.service.ts");
/* harmony import */ var src_resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/_resolvers/lists.resolver */ "./src/_resolvers/lists.resolver.ts");
/* harmony import */ var src_resolvers_message_resolvers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/_resolvers/message.resolvers */ "./src/_resolvers/message.resolvers.ts");
/* harmony import */ var _members_member_messages_MemberMessages_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./members/member-messages/MemberMessages.component */ "./src/app/members/member-messages/MemberMessages.component.ts");
/* harmony import */ var directives_role_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! directives/role.directive */ "./directives/role.directive.ts");
/* harmony import */ var _admin_user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/user-managment/user-managment.component */ "./src/app/admin/user-managment/user-managment.component.ts");
/* harmony import */ var _admin_photo_managment_photo_managment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/photo-managment/photo-managment.component */ "./src/app/admin/photo-managment/photo-managment.component.ts");
/* harmony import */ var _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/roles-modal/roles-modal.component */ "./src/app/admin/roles-modal/roles-modal.component.ts");





// tslint:disable-next-line: import-spacing




































function TokenGetter() {
    return localStorage.getItem('token'); // this is the token
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_28__["AdminPanelComponent"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_14__["ListComponent"],
                _members_Member_List_Member_List_component__WEBPACK_IMPORTED_MODULE_15__["MemberListComponent"],
                _Messages_Messages_component__WEBPACK_IMPORTED_MODULE_16__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__["MemberCardComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_26__["MemberEditComponent"],
                _members_member_messages_MemberMessages_component__WEBPACK_IMPORTED_MODULE_35__["MemberMessagesComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__["MemberDetailComponent"],
                _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_29__["PhotoEditorComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"],
                directives_role_directive__WEBPACK_IMPORTED_MODULE_36__["RoleDirective"],
                _admin_user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_37__["UserManagmentComponent"],
                _admin_photo_managment_photo_managment_component__WEBPACK_IMPORTED_MODULE_38__["PhotoManagmentComponent"],
                _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_39__["RolesModalComponent"]
            ],
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_31__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_31__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_31__["ButtonsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // tslint:disable-next-line: max-line-length
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_30__["FileUploadModule"],
                // after we wrote some code on the photo.editor.ts component
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_18__["appRoutes"]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: TokenGetter,
                        // tslint:disable-next-line: max-line-length  //
                        whitelistedDomains: ['jokoyoski200-001-site1.itempurl.com'],
                        blacklistedRoutes: ['jokoyoski200-001-site1.itempurl.com/api/auth'] // we dont want to send token to this address
                    }
                })
            ],
            providers: [
                _Services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _Services_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptorProvider"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                // tslint:disable-next-line: max-line-length
                // this is the guard that was created when user needs to login, it was created and imported through app.module.ts and was used in the routes;
                _Services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _Services_scriptsloader_service__WEBPACK_IMPORTED_MODULE_32__["ScriptsloaderService"],
                _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_25__["MemberListResolver"],
                _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_27__["MemberEditResolver"],
                src_resolvers_message_resolvers__WEBPACK_IMPORTED_MODULE_34__["MessageResolver"],
                src_resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_33__["ListsResolver"],
                src_resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_24__["MemberDetailResolver"] // we created a resolver class and we
                // add the memeber resolver because here we want to be using it to catch null value .after
                // we add it here we went to the routes we created and added resolver there
                // later then we went to our membetdetail class and got our value from route
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.color-button{\r\n    background-color: orangered;\r\n}\r\n\r\nbanner{\r\n    background: url('pic1.jpg') no-repeat center top;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0RBQXNFO0FBQzFFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbG9yLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG5cclxuYmFubmVye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93ZWIvaW1hZ2VzL3BpYzEuanBnKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\t<!DOCTYPE HTML>\r\n\t<html>\r\n\t<head>\r\n\t<title>Meet your soulmate</title>\r\n\t\r\n\t<!-- Custom Theme files -->\r\n\t\r\n\t<!-- Custom Theme files -->\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<!--webfont-->\r\n\t<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\r\n\t\r\n\t\r\n\t\t\t\r\n\t</head>\r\n\t<body>\r\n\t\r\n\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t<div class=\"banner wow bounceInRight\" data-wow-delay=\"0.4s\">\r\n\t\t<div class=\"container\"> \r\n\t\t   <div class=\"banner_right\">\r\n\t\t\t   <h2>Find a perfect date</h2>\r\n\t\t\t   <h1>Share your perfect moments </h1>\r\n\t\t\t   <ul class=\"button\">\r\n\t\r\n\t\t\t\t <li><a href=\"#\" [routerLink]=\"['/Register']\" class=\"btn1 btn2 btn-1 btn1-1b\">Click to Get Started</a></li>\r\n\t\t\t\t\r\n\t\t\t   </ul>\r\n\t\t   </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"content_top\">\r\n\t  <div class=\"container row\">\r\n\t\t<div class=\"col-md-6 grid_1\">\r\n\t\t  <h2>London Lovestory</h2>\r\n\t\t  <iframe width=\"\" height=\"\" src=\"//www.youtube.com/embed/6KkS2mQsmw8\" frameborder=\"0\" allowfullscreen></iframe>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6 wow fadeInRight\">\r\n\t\t\t\t<div class=\"banner-info\">\r\n\t\t\t\t\t\t<h3>Meet Jokoyoski Makanga</h3>\r\n\t\t\t\t\t\t<h4><span class=\"m_2\">\"</span> .Net Software Developer<span class=\"m_2\"> \"</span></h4>\r\n\r\n\t\t\t\t\t\t<h5><span class=\"m_2\">\"</span> Single to Stupour<span class=\"m_2\"> \"</span></h5>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t </div>\r\n\t\t</div>\r\n\t  </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"content_middle wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n\t\t<div class=\"container row\">\r\n\t\r\n\t\t   <div class=\"col-md-9 grid_2\">\r\n\t\t\t\t <h3>Start Dating Now !</h3>\r\n\t\t\t\t <h4>Download our mobile apps and start dating right now.</h4>\r\n\t\t\t\t <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.</p>\r\n\t\t\t  <ul class=\"apps wow fadeInLeft\" data-wow-delay=\"0.4s\">\r\n\t\t\t\t<li><a href=\"#\"><i class=\"app\"></i></a></li>\r\n\t\t\t\t<li><a href=\"#\"><i class=\"google\"></i></a></li>\r\n\t\t\t  </ul>\r\n\t\t\t   <h5>OR</h5>\r\n\t\t\t   <a href=\"#\"  [routerLink]=\"['/Register']\" class=\"btn3 btn-3 btn3-1b\">Sign Up</a>\r\n\t\t   </div>\r\n\t\t   <div class=\"col-md-3 grid_3 wow fadeInRight\" data-wow-delay=\"0.4s\">\r\n\t\t\t\t  <span> </span>\r\n\t\t   </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"content_bottom\">\r\n\t\t<div class=\"container\">\r\n\t\r\n\t\t  <div class=\"row\">\r\n\t\t\t<div class=\"col-md-4 wow fadeInLeft\" data-wow-delay=\"0.4s\">\r\n\t\t\t  <div class=\"grid_4\"><a href=\"single.html\">\r\n\t\t\t\t<h4><span class=\"m_3\">Leonardo , </span> Manager-usa</h4>\r\n\t\t\t\t<img src=\"../../assets/web/images/pic1.jpg\" class=\"img-responsive\" alt=\"\"/>\r\n\t\t\t\t<ul class=\"category_desc\">\r\n\t\t\t\t   <li class=\"cate_head\">Based in 1.100 votes</li>\r\n\t\t\t\t   <li class=\"cate_right\">\r\n\t\t\t\t\t\t<ul class=\"list1\">\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t   </li>\r\n\t\t\t\t   <div class=\"clearfix\"> </div>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<h5>Member</h5>\r\n\t\t\t</a> </div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n\t\t\t   <div class=\"grid_4\"><a href=\"single.html\">\r\n\t\t\t\t<h4><span class=\"m_3\">luke ,</span>engineer-usa</h4>\r\n\t\t\t\t<img src=\"../../assets/web/images/pic2.jpg\" class=\"img-responsive\" alt=\"\"/>\r\n\t\t\t\t<ul class=\"category_desc\">\r\n\t\t\t\t   <li class=\"cate_head\">Based in 956 votes</li>\r\n\t\t\t\t   <li class=\"cate_right\">\r\n\t\t\t\t\t\t<ul class=\"list1\">\r\n\t\t\t\t\t\t  <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t  <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t  <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t   </li>\r\n\t\t\t\t   <div class=\"clearfix\"> </div>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<h5>Member</h5>\r\n\t\t\t  </a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4 wow fadeInRight\" data-wow-delay=\"0.4s\">\r\n\t\t\t  <div class=\"grid_4\"><a href=\"single.html\">\r\n\t\t\t\t<h4><span class=\"m_3\">Jokoyoski ,</span>Software Developer-Nigeria</h4>\r\n\t\t\t\t<img src=\"http://res.cloudinary.com/jokoyoski/image/upload/v1561391201/dz8idd6czylpfa7zvbst.jpg\" width=\"360px\" height=\"260\" class=\"img-responsive\" alt=\"\"/>\r\n\t\t\t\t<ul class=\"category_desc\">\r\n\t\t\t\t   <li class=\"cate_head\">Based in 900 votes</li>\r\n\t\t\t\t   <li class=\"cate_right\">\r\n\t\t\t\t\t\t<ul class=\"list1\">\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t   <li><i class=\"heart\"> </i></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t   </li>\r\n\t\t\t\t   <div class=\"clearfix\"> </div>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<h5>Member</h5>\r\n\t\t\t  </a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t  </div>\r\n\t\t  <div class='span1'>\r\n\t\t\t  <select class=\"dropdown\" tabindex=\"10\" data-settings='{\"wrapperClass\":\"metro1\"}'>\r\n\t\t\t\t<option value=\"0\">More Profiles</option>\t\r\n\t\t\t\t<option value=\"1\">Tincidunt</option>\r\n\t\t\t\t<option value=\"2\">Magna</option>\r\n\t\t\t\t<option value=\"3\">Lectores </option>\r\n\t\t\t\t<option value=\"4\">Insitam</option>\r\n\t\t\t\t<option value=\"5\">Claritatem </option>\r\n\t\t\t\t<option value=\"5\"></option>\r\n\t\t\t\t<option value=\"5\"></option>\r\n\t\t\t  </select>\r\n\t\t  </div>\r\n\t\t  <div class='clearfix'> </div>\r\n\t\t\r\n\t   </div>\r\n\t</div>\r\n\t<div class=\"footer\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"cssmenu wow fadeInLeft\" data-wow-delay=\"0.4s\">\r\n\t\t\t  <ul>\r\n\t\t\t\t<li class=\"active\"><a href=\"#\">Home</a></li> \r\n\t\t\t\t<li><a href=\"about.html\">About</a></li>\r\n\t\t\t\t<li><a href=\"profiles.html\">Add Profile</a></li>\r\n\t\t\t\t<li><a href=\"contact.html\">Contact</a></li>\r\n\t\t\t  </ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"copy wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n\t\t\t\t<p>&copy; 2014 Template by <a href=\"http://w3layouts.com\" target=\"_blank\">w3layouts</a></p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"social wow fadeInRight\" data-wow-delay=\"0.4s\"> \r\n\t\t\t\t<ul class=\"footer_social\">\r\n\t\t\t\t  <li><a href=\"#\"> <i class=\"fb\"> </i> </a></li>\r\n\t\t\t\t  <li><a href=\"#\"> <i class=\"tw\"> </i> </a></li>\r\n\t\t\t   </ul>\r\n\t\t\t</div>\r\n\t\t\t<div class='clearfix'> </div>\r\n\t\t</div>\r\n\t</div>\r\n\t</body>\r\n\t</html>\t\t\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Services_scriptsloader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/scriptsloader.service */ "./src/app/Services/scriptsloader.service.ts");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, fileInjectorService, router, auth) {
        this.http = http;
        this.fileInjectorService = fileInjectorService;
        this.router = router;
        this.auth = auth;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var result = this.auth.loggedIn();
        console.log(result);
        if (result == true) {
            this.router.navigate(['/members']);
        }
        /** spinner starts on init */
        // this.fileInjectorService.loadJS('misc','easy','flexslider','wow','wowinit').then(data => {
        // console.log('script loaded',data);
        // }).catch(error => console.log(error));
        // this.getValue();
    };
    HomeComponent.prototype.displayToggle = function () {
        this.registerMode = true; // toggle  returns truw
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent.prototype.loggedIn = function () {
        var result = this.auth.loggedIn();
        console.log(result);
        return result;
    };
    HomeComponent.prototype.getValue = function () {
        var _this = this;
        console.log('ok');
        this.http.get('http://localhost:5000/api/values').subscribe(function (response) {
            _this.values = response;
            console.log(_this.values);
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Services_scriptsloader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptsloaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.hovering:hover{\r\n\r\n    -webkit-transform: scale(1.2,1.2);\r\n\r\n            transform: scale(1.2,1.2);\r\n    transition-duration :500ms;\r\n    transition-timing-function: ease-out;\r\n\r\n\r\n}\r\n\r\n.btn0{\r\n    color:#fff !important;\r\n    background-color: #d26e8e !important;\r\n  }\r\n\r\n.btn1{\r\n    color:#fff !important;\r\n    background-color: #3a5878 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLGlDQUF5Qjs7WUFBekIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixvQ0FBb0M7OztBQUd4Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7RUFDdEM7O0FBR0E7SUFDRSxxQkFBcUI7SUFDckIsb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhvdmVyaW5nOmhvdmVye1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uIDo1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuXHJcblxyXG59XHJcblxyXG4uYnRuMHtcclxuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjZlOGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJ0bjF7XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ODc4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n   <!---->   </div>\r\n<div *ngIf=\"!datas\" class=\"text-center pt-5\">\r\n<h4>You have no admirers Sorry</h4>\r\n</div>\r\n\r\n\r\n<div class=\"container mt-3\">\r\n\r\n  \r\n  <div   class=\"row offset-md-2\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn1 \" [(ngModel)]=\"LikesParam\"  btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like me</button>\r\n      <button class=\"btn1 \" [(ngModel)]=\"LikesParam\" btnRadio=\"UserLikes\"  (click)=\"loadUsers()\">Members who I like</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n \r\n    <div class=\"row\">\r\n      <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\r\n        <app-member-card [user]=\"user\"></app-member-card>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n\r\n\r\n</div>\r\n<div  *ngIf=\"datas\" class=\"d-flex justify-content-center\">\r\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n    (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\r\n    >\r\n\r\n  </pagination>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/user.service */ "./src/app/Services/user.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data.users.result;
            _this.pagination = data.users.pagination;
            console.log(_this.users.length);
            if (_this.users.length < 1) {
                _this.datas = false;
            }
            else {
                _this.datas = true;
            }
            console.log(data.users);
            _this.LikesParam = 'Likers';
        });
    };
    ListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        console.log(this.pagination.currentPage);
        this.loadUsers();
    };
    ListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.datas = true;
        console.log(this.LikesParam);
        // tslint:disable-next-line: max-line-length
        this.userService.GetUserLikes(this.pagination.currentPage, this.pagination.itemsPerPage, this.LikesParam).subscribe(function (res) {
            if (res.result.length < 1) {
                _this.datas = false;
            }
            _this.users = res.result;
            _this.pagination = res.pagination;
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/members/Member-List/Member-List.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/Member-List/Member-List.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn0\r\n{\r\nbackground-color: #d26e8e;\r\ncolor: white;\r\n}\r\n\r\n\r\n\r\n.page-link{\r\n    color:#d26e8e !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9NZW1iZXItTGlzdC9NZW1iZXItTGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7Ozs7QUFJQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvTWVtYmVyLUxpc3QvTWVtYmVyLUxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4wXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogI2QyNmU4ZTtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi5wYWdlLWxpbmt7XHJcbiAgICBjb2xvcjojZDI2ZThlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/members/Member-List/Member-List.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/Member-List/Member-List.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n  <h2>Your matches - {{pagination.totalItems}} found</h2>\r\n</div>\r\n<div class=\"container-fluid text-center\">\r\n\r\n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"minAge\">Age From</label>\r\n        <input type=\"number\" [(ngModel)]=\"userParams.minAge\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"minAge\" name=\"minAge\">\r\n      </div>\r\n    \r\n      <div class=\"form-group px-2\">\r\n        <label for=\"maxAge\">Age To</label>\r\n        <input type=\"number\" [(ngModel)]=\"userParams.maxAge\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\">\r\n      </div>\r\n    \r\n      <div class=\"form-group px-2\">\r\n        <label for=\"gender\">Show: </label>\r\n        <select class=\"form-control ml-1\" [(ngModel)]=\"userParams.gender\" style=\"width: 130px\" id=\"gender\" name=\"gender\">\r\n          <option *ngFor=\"let gender of genderList\"[value]='gender.value'>\r\n    {{gender.display}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n  \r\n      <div class=\"form-group px-2\">\r\n          <label for=\"gender\">Activity: </label>\r\n          <select class=\"form-control ml-1\" [(ngModel)]=\"userParams.activity\" style=\"width: 130px\" id=\"activity\" name=\"activity\">\r\n            <option *ngFor=\"let a of activity\"[value]='a.value'>\r\n      {{a.display}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      <button type=\"submit\" class=\"btn  btn0\" style=\"margin-left:10px\">Apply Filters</button>\r\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"resetFilters()\" style=\"margin-left:10px\">Reset Filter</button>\r\n    \r\n    </form>\r\n    <br>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container mt-3\">\r\n  <div class=row>\r\n      <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n              <app-member-card [user]=\"user\"></app-member-card>\r\n      </div>\r\n          \r\n  </div>\r\n      \r\n\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n  <pagination [boundaryLinks]=\"true\"  [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\" [(ngModel)]=\"pagination.currentPage\"\r\n  previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n\r\n</pagination>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/members/Member-List/Member-List.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/Member-List/Member-List.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'females' }];
        this.activity = [{ value: 'lastactive', display: 'Last Active' }, { value: 'lastcreated', display: 'New Members' }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log(data.users.result);
            _this.users = data.users.result;
            _this.pagination = data.users.pagination;
            _this.Gender = localStorage.getItem('gender');
            _this.userParams.gender = _this.Gender === 'female' ? 'male' : 'female';
        });
        // this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    };
    MemberListComponent.prototype.likeUsers = function (likerId) {
        // tslint:disable-next-line:prefer-const
        var userId = localStorage.getItem('userId');
        this.like.LikerId = likerId;
        this.like.LikeeId = userId;
        var id = this.userService.LikeUser(this.like).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.Gender === 'female' ? 'male' : 'female';
        this.userParams.activity = 'lastactive';
        this.pagination.currentPage = 1;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        console.log('joko');
        this.pagination.currentPage = event.page;
        console.log(this.pagination.currentPage);
        this.loadUsers();
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userParams.minAge = this.userParams.minAge === undefined ? 18 : this.userParams.minAge;
        this.userParams.maxAge = this.userParams.maxAge === undefined ? 99 : this.userParams.maxAge;
        this.userParams.activity = this.userParams.activity === undefined ? 'lastactive' : this.userParams.activity;
        console.log(this.pagination.currentPage);
        // tslint:disable-next-line: max-line-length
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) { return _this.alertify.error(error); });
    };
    MemberListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'app-Member-List',
            template: __webpack_require__(/*! ./Member-List.component.html */ "./src/app/members/Member-List/Member-List.component.html"),
            styles: [__webpack_require__(/*! ./Member-List.component.css */ "./src/app/members/Member-List/Member-List.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card:hover img{\r\n\r\n    -webkit-transform:scale( 1.2,1.2);\r\n\r\n            transform:scale( 1.2,1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n\r\n.btn1{\r\n    color:#fff !important;\r\n    background-color:#d26e8e;\r\n  }\r\n\r\n\r\n.card img{\r\n\r\n    -webkit-transform: scale(1.0,1.0);\r\n\r\n            transform: scale(1.0,1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n\r\n.card-img-wrapper{\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n\r\n.member-icons{\r\n\r\n    position: absolute;\r\n    bottom: -30px;\r\n    left :0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.card-img-wrapper:hover .member-icons{\r\nbottom: 0;\r\nopacity: 1;\r\n}\r\n\r\n\r\n.animate{\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxpQ0FBeUI7O1lBQXpCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtFQUMxQjs7O0FBQ0Y7O0lBRUksaUNBQXlCOztZQUF6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLG9DQUFvQztBQUN4Qzs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGlCQUFpQjs7SUFFakIsVUFBVTtBQUNkOzs7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7OztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkOmhvdmVyIGltZ3tcclxuXHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoIDEuMiwxLjIpO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcblxyXG4uYnRuMXtcclxuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2QyNmU4ZTtcclxuICB9XHJcbi5jYXJkIGltZ3tcclxuXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwxLjApO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVye1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1lbWJlci1pY29uc3tcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gICAgbGVmdCA6MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25ze1xyXG5ib3R0b206IDA7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hbmltYXRle1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n\r\n\r\n<div class=\"card-img-wrapper\">\r\n    <img class=\"card-img-top\" src=\"{{user.photoUrl}}\" alt={{user.knownAs}}>\r\n    <ul class=\"list-inline member-icons animate text-center\">\r\n                     \r\n        <li class=\"list-inline-item \"><button class=\"btn  btn-primary\" [routerLink]=\"['/members/',user.id]\"><i class=\"fa fa-user\"></i></button></li>\r\n        <li class=\"list-inline-item\"><button (click)=\"sendLike(user.id)\" class=\"btn  btn-primary\"><i class=\"fa fa-heart\"></i></button></li>\r\n        <li class=\"list-inline-item\"><button class=\"btn  btn-primary\" [routerLink]=\"['/members/',user.id]\"[queryParams]=\"{tab:3}\"><i class=\"fa fa-envelope\"></i></button></li>\r\n      </ul>\r\n</div>\r\n<div class=\"card-body text-center p-1\">\r\n    <p clas=\"card-title card-text text-center mb-1\"><b><i class=\"fa fa-user\"></i>\r\n    {{user.knownAs}}</b>\r\n    </p>\r\n    <p class=\"card-text text-center\" style=\"color: black;\"><b>{{user.city}}</b></p>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Model/user */ "./Model/user.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.like = {};
    }
    MemberCardComponent.prototype.ngOnInit = function () {
        console.log(this.user);
    };
    MemberCardComponent.prototype.sendLike = function (likerId) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var userId = localStorage.getItem('userId');
        this.like.LikerId = userId;
        this.like.LikeeId = likerId;
        console.log(this.like);
        var id = this.userService.LikeUser(this.like).subscribe(function (data) {
            _this.alertify.success(data.status);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Model_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-card/member-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail\r\n{\r\n  margin:25px;\r\n  width:85%;\r\nheight:85%;\r\n}\r\n\r\n\r\n.card-body{\r\n  padding :0 25px;\r\n}\r\n\r\n\r\n.card-footer\r\n\r\n{\r\n  padding:10px 15px;\r\n  background-color: #fff;\r\n  border-top:none;\r\n\r\n\r\n}\r\n\r\n\r\n.btn0{\r\n  color:#fff !important;\r\n  background-color: #d26e8e;\r\n}\r\n\r\n\r\n.btn1{\r\n  color:#fff !important;\r\n  background-color: #3a5878;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsU0FBUztBQUNYLFVBQVU7QUFDVjs7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlOzs7QUFHakI7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsXHJcbntcclxuICBtYXJnaW46MjVweDtcclxuICB3aWR0aDo4NSU7XHJcbmhlaWdodDo4NSU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gIHBhZGRpbmcgOjAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyXHJcblxyXG57XHJcbiAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItdG9wOm5vbmU7XHJcblxyXG5cclxufVxyXG5cclxuLmJ0bjB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjZlOGU7XHJcbn1cclxuXHJcblxyXG4uYnRuMXtcclxuICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNTg3ODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container mt-4\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"card\">\r\n            <img class=\"card-img-top img-thumbnail\" src=\"{{user?.photoUrl}}\" alt=\"\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <strong>UserName</strong>\r\n                    <p>{{user.userName}}</p>\r\n                  </div>\r\n        <div>\r\n          <strong>Location</strong>\r\n          <p>{{user.country}},{{user.city}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Looking For</strong>\r\n          <p>{{user.lookingFor}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Interest</strong>\r\n          <p>{{user.interests}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Gender</strong>\r\n          <p>{{user.gender}}</p>\r\n        </div>\r\n        \r\n        <div>\r\n          <strong>Date Joined</strong>\r\n          <p>{{user.created}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Known As</strong>\r\n          <p>{{user.knownAs}}</p>\r\n        </div>\r\n        \r\n            </div>\r\n            <div class=\"card-footer\">\r\n    <div class=\"btn-group d-flex\">\r\n    \r\n    \r\n    <button class=\"btn btn1 w-100\"(click)=\"selectTab(3)\">Message</button>\r\n    \r\n  \r\n    </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n    <tabset class=\"member-tabset\" #memberTabs>\r\n      <tab heading=\"About {{user.knownAs}}\">\r\n    \r\n        <h4>Description</h4>\r\n        <p>{{user.introduction}}</p>\r\n        <h4>Looking For</h4>\r\n        <p>{{user.lookingFor}}</p>\r\n      </tab>\r\n    \r\n      <tab heading=\"Interests \">\r\n    \r\n          <h4>Interest</h4>\r\n          <p>{{user.interests}}</p>\r\n          \r\n        </tab>\r\n        <tab heading=\"Photos\">\r\n    \r\n            <h4>Photos</h4>\r\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n            \r\n          </tab>\r\n          <tab heading=\"Messages\">\r\n    \r\n              <h4>Messages</h4>\r\n           <app-MemberMessages [recipientId]=\"user.id\"></app-MemberMessages>\r\n              \r\n            </tab>\r\n    \r\n    </tabset>\r\n      </div>\r\n    </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var MemberDetailComponent = /** @class */ (function () {
    // we need to activate the route to access the parameter
    function MemberDetailComponent(route) {
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
            console.log(_this.user);
        });
        // image gallery
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryAnimation"].Slide,
                preview: false
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        // this is the third thing we do after adding to app.module.ts and also adding the above code for this.gallrry
        // we need to write a code to pass a list of photos
        this.galleryImages = this.getImages();
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params.tab;
            _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
            // tslint:disable-next-line: semicolon
        });
    };
    MemberDetailComponent.prototype.getImages = function () {
        var photosURL = [];
        // console.log(this.user.photos);
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.user.photos.length; i++) {
            photosURL.push({
                small: this.user.photos[i].uRl,
                medium: this.user.photos[i].uRl,
                big: this.user.photos[i].uRl,
                description: this.user.photos[i].uRl,
            });
        }
        return photosURL;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        console.log(tabId);
        this.memberTabs.tabs[tabId].active = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-detail/member-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());

// this.UserService.getUser(+this.route.snapshot.params['id']).subscribe((data:User)=>{
// console.log(data);
// this.user=data;


/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-green\r\n{\r\n    background-color: green;\r\n}\r\n\r\n\r\n\r\n\r\np {\r\n  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\r\n}\r\n\r\n\r\n\r\n\r\n.btn0{\r\n    background-color: #d26e8e;\r\n  }\r\n\r\n\r\n\r\n\r\n.btn1{\r\n    background-color: #3a5878;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHVCQUF1QjtBQUMzQjs7Ozs7QUFLQTtFQUNFO0FBQ0Y7Ozs7O0FBSUE7SUFDSSx5QkFBeUI7RUFDM0I7Ozs7O0FBR0E7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItZ3JlZW5cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuXHJcblxyXG4uYnRuMHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjZlOGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5idG4xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhNTg3ODtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container mt-4\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"card\">\r\n            <img class=\"card-img-top img-thumbnail\" src=\"{{photoUrl}}\" alt=\"\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <strong>UserName</strong>\r\n                    <p>{{user.userName}}</p>\r\n                  </div>\r\n        <div>\r\n          <strong>Location</strong>\r\n          <p>{{user.country}},{{user.city}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Looking For</strong>\r\n          <p>{{user.lookingFor}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Interest</strong>\r\n          <p>{{user.interests}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Gender</strong>\r\n          <p>{{user.gender}}</p>\r\n        </div>\r\n        \r\n        <div>\r\n          <strong>Date Joined</strong>\r\n          <p>{{user.created}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Known As</strong>\r\n          <p>{{user.knownAs}}</p>\r\n        </div>\r\n        <div>\r\n          <strong>Date Created</strong>\r\n          <p>{{user.created|date}}</p>\r\n        </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n    <tabset class=\"member-tabset\">\r\n      <tab heading=\"Edit Profile {{user.knownAs}}\">\r\n    \r\n        <form #loginform=\"ngForm\" (ngSubmit)=\"updateUser()\"> \r\n            <h4>\r\n             Looking For\r\n            <textarea class=\"form-control\" name=\"lookingFor\" [(ngModel)]=\"user.lookingFor\" rows=\"6\"></textarea>\r\n            </h4>\r\n    \r\n            <h4>\r\n                Interest\r\n                <textarea class=\"form-control\" name=\"interests\" [(ngModel)]=\"user.interests\" rows=\"6\"></textarea>\r\n           \r\n               </h4>\r\n    \r\n               <h4>\r\n                  Introduction\r\n                  <textarea class=\"form-control\" name=\"introduction\" [(ngModel)]=\"user.introduction\" rows=\"6\"></textarea>\r\n             \r\n                 </h4>\r\n                 <h4>\r\n                   Location Details:\r\n                 </h4>\r\n                 <div class=\"form-inline\">\r\n                   <label for=\"city\">City</label>\r\n                   <input class=\"form-control\" name=\"city\"  [(ngModel)]=\"user.city\" type=\"text\"/>\r\n                   <label class=\"pt-2\" for=\"country\">Country</label>\r\n                   <input class=\"form-control\" name=\"country\"  [(ngModel)]=\"user.country\" type=\"text\"/>\r\n                 </div>\r\n    \r\n                 <div class=\"btn-group pt-3\">\r\n                  <button type=\"submit\" class=\"btn  color-green  btn\"><span style=\"color: whitesmoke\">Save Changes</span></button>\r\n                \r\n                </div>\r\n          </form>\r\n      </tab>\r\n    \r\n      <tab heading=\"Edit Photos\">\r\n    \r\n          <h2>Edit Photos</h2>\r\n         <app-photo-editor [photos]=\"user.photos\" (getMemberChangePhoto)=\"updateMainPhoto($event)\" ></app-photo-editor>\r\n          \r\n        </tab>\r\n       \r\n         \r\n    </tabset>\r\n      </div>\r\n    </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/auth.service */ "./src/app/Services/auth.service.ts");






var MemberEditComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function MemberEditComponent(UserService, alertify, route, authService) {
        this.UserService = UserService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) {
            _this.photoUrl = photoUrl;
        });
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
            console.log(_this.user);
        });
    };
    MemberEditComponent.prototype.updateUser = function () {
        this.UserService.UpdateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        this.alertify.success('Updated Succesfully');
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    MemberEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-edit/member-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-messages/MemberMessages.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/MemberMessages.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    border: none;\r\n}\r\n.chat{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.btn1{\r\n    color:#fff !important;\r\n    background-color: #d26e8e;\r\n    \r\n  }\r\n.chat li{\r\n    margin-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #b3a9a9\r\n}\r\n.rounded-circle{\r\n    height:50px;\r\n    width:50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvTWVtYmVyTWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCOztFQUUzQjtBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQjtBQUNKO0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvTWVtYmVyTWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jaGF0e1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4xe1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyNmU4ZTtcclxuICAgIFxyXG4gIH1cclxuXHJcbi5jaGF0IGxpe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjYjNhOWE5XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNpcmNsZXtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgd2lkdGg6NTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/member-messages/MemberMessages.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/MemberMessages.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n<div class=\"card-body\">\r\n<div *ngIf=\"messages?.length===0\">\r\n<p>No Messages yet, send your first message</p>\r\n</div>\r\n<ul  style=\"overflow:auto;height: 400px;\" class=\"chat\">\r\n<li *ngFor=\"let message of messages\">\r\n<div *ngIf=\"message.senderId==recipientId\">\r\n  <span class=\"chat-img float-left\">\r\n<img src=\"{{message.senderPhoto}}\" alt=\"{{message.senderName}}\" class=\"rounded-circle\">\r\n  </span>\r\n<div class=\"chat-body\">\r\n  <div class=\"header\">\r\n<strong class=\"primary-font\">{{message.senderName}}</strong>\r\n<small class=\"text-muted float-right\">\r\n<span class=\"fa fa-clock-o\">\r\n{{message.messageSent|date}}\r\n</span>\r\n</small>\r\n  </div>\r\n<p>{{message.content}}</p>\r\n</div>\r\n</div>\r\n\r\n<div  *ngIf=\"message.senderId!=recipientId\">\r\n    <span class=\"chat-img float-left\">\r\n  <img src=\"{{message.senderPhoto}}\" alt=\"{{message.senderName}}\" class=\"rounded-circle\">\r\n    </span>\r\n  <div class=\"chat-body\">\r\n    <div class=\"header\">\r\n        <small class=\"text-muted float-right\">\r\n            <span class=\"fa fa-clock-o\">\r\n            {{message.messageSent|timeAgo}}\r\n            </span>\r\n            <span *ngIf=\"!message.isRead\" class=\"text-danger\">\r\n              (unread)\r\n                </span>\r\n                <span *ngIf=\"message.isRead\" class=\"text-success\">\r\n                    (Read  {{message.dateRead|timeAgo}})\r\n                      </span>\r\n            </small>\r\n  <strong class=\"primary-font\">{{message.senderName}}</strong>\r\n  \r\n    </div>\r\n    <p>{{message.content}}</p>\r\n  </div>\r\n  </div>\r\n</li>\r\n</ul>\r\n</div>\r\n\r\n<div class=\"card-footer\">\r\n<form #ngSubmitForm=\"ngForm\"   (submit)=\"sendMessage()\">\r\n  <div class=\"input-group\">\r\n<input name=\"content\" [(ngModel)]=\"anyMessage.content\" type=\"text\" required class=\"form-control input-sm\" placeholder=\"Enter  your message\"/>\r\n<div class=\"input-group-append\">\r\n<button [disabled]=\"ngSubmitForm.invalid\" class=\"btn btn1\">Send Message</button>\r\n</div>\r\n<div>\r\n\r\n</div>\r\n  </div>\r\n</form>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/members/member-messages/MemberMessages.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/members/member-messages/MemberMessages.component.ts ***!
  \*********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.anyMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var id = localStorage.getItem('userId');
        var userId = +localStorage.getItem('userId');
        this.userService.getMessageThread(id, this.recipientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (messages) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < messages.length; i++) {
                // tslint:disable-next-line: triple-equals
                if (messages[i].isRead == false && messages[i].recipientId == userId) {
                    console.log(messages[i]);
                    _this.userService.markAsRead(messages[i].id, userId);
                }
            }
        }))
            .subscribe(function (res) {
            console.log(res);
            res === undefined ? res = _this.messages : res = res;
            _this.messages = res;
            console.log(_this.messages);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        var id = localStorage.getItem('userId');
        this.anyMessage.recipientId = this.recipientId;
        this.anyMessage.userId = id;
        this.userService.sendMessage(this.anyMessage).subscribe(function (message) {
            console.log(message);
            _this.messages.unshift(message);
            _this.anyMessage = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MemberMessagesComponent.prototype, "recipientId", void 0);
    MemberMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'app-MemberMessages',
            template: __webpack_require__(/*! ./MemberMessages.component.html */ "./src/app/members/member-messages/MemberMessages.component.html"),
            styles: [__webpack_require__(/*! ./MemberMessages.component.css */ "./src/app/members/member-messages/MemberMessages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".joka{\r\n background-color:#3a5878;\r\n}\r\n\r\n\r\n.font-fam\r\n{\r\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n\r\na .dropdown-item :hover{\r\n    background-color:#3a5878;\r\n    color:white\r\n}\r\n\r\n\r\n.text-colo{\r\n    color: white;\r\n}\r\n\r\n\r\nimg{\r\n\r\n    max-height: 50px;\r\n    \r\n    display :inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msd0JBQXdCO0FBQ3pCOzs7QUFHQTs7SUFFSSwrQ0FBK0M7QUFDbkQ7OztBQUVDO0lBQ0csd0JBQXdCO0lBQ3hCO0FBQ0o7OztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7O0lBRUksZ0JBQWdCOztJQUVoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpva2F7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiMzYTU4Nzg7XHJcbn1cclxuXHJcblxyXG4uZm9udC1mYW1cclxue1xyXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiBhIC5kcm9wZG93bi1pdGVtIDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNhNTg3ODtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuLnRleHQtY29sb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW1ne1xyXG5cclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBcclxuICAgIGRpc3BsYXkgOmlubGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf= \"!loggedIn()\">\r\n\t\t<div class=\"header_left\">\r\n\t\t\t<img src=\"../../assets/web/images/rate.png\" alt=\"\"/>\r\n\t\t</div>\r\n\t\t<div class=\"logo\">\r\n\t\t\t<a href=\"index.html\"><img src=\"../../assets/web/images/logo.png\" alt=\"\"/>\r\n\t\t\t\t<span>Soulmate</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"header_right\">\r\n\t\t\t<ul class=\"header_user_info\">\r\n\t\t\t  <a class=\"login\" href=\"login.html\">\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t  </a>\r\n\t\t\t  <div class=\"clearfix\"> </div>\r\n\t    \t</ul>\r\n       \r\n       \r\n\t\t</div>\r\n\t\t<div class=\"clearfix\"> </div>\r\n\t</div>\r\n\r\n\r\n\r\n\t<div *ngIf= \"loggedIn()\">\r\n\t\t<div class=\"header_left\">\r\n\t\t\t<img src=\"../../assets/web/images/rate.png\" alt=\"\"/>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t\t<div class=\"logo\">\r\n\t\t\t<a href=\"index.html\"><img src=\"../../assets/web/images/logo.png\" alt=\"\"/>\r\n\t\t\t\t<span>Soulmate</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"header_right\">\r\n\t\t\t<ul class=\"header_user_info\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"{{photoUrl}}\">\r\n\t\t\t\t\r\n\t\t\t\t</span>\r\n\t\t\t\r\n\t\t\t  <a class=\"login\"  (click)=\"loggedOut()\">\r\n\t\t\t\t<li class=\"user_desc\"><span class=\"m_1\"> </span>Log out</li>\r\n\t\t\t\t<i class=\"user\"> </i> \r\n\t\t\t\t\r\n\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t  </a>\r\n\t\t\t  <div class=\"clearfix\"> </div>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<span style=\"color:#3a5778\">Welcome {{authService.decodedTokenName}}</span>\r\n\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"clearfix\"> </div>\r\n\t</div>\r\n\t\r\n\t  \r\n<nav class=\"navbar navbar-expand-lg navbar-dark joka\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">Jokoyoski</a>\r\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t  <span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\t  \r\n\t  \r\n\t\t\r\n\t\t<div *ngIf=\"loggedIn()\"   class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\t\t  <ul class=\"navbar-nav mr-auto\">\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t  <a class=\"nav-link font-fam\"    [routerLink]=\"['/members']\"><span class=\"text-colo\">Matches</span><span class=\"sr-only\">(current)</span></a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t  <a class=\"nav-link font-fam text-colo\"  [routerLink]=\"['/likes']\"><span class=\"text-colo\">Favourites</span></a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t  <a class=\"nav-link font-fam \" [routerLink]=\"['/Messages']\" ><span class=\"text-colo\">Messages</span></a>\r\n\t\t\t</li>\r\n\t\t\t<li  *appRole=\"['Admin']\" class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t  <a  class=\"nav-link font-fam \" [routerLink]=\"['/admin']\" ><span class=\"text-colo\">Admin</span></a>\r\n\t\t\t</li>\r\n\t\t  \r\n\t\t  </ul>\r\n\t  \r\n\t  \r\n\t\t <div >\r\n\t\t\t<a class=\"nav-link font-fam text-colo\" [routerLink]=\"['/member/edit']\" > <i class=\"fa fa-user\"></i><span class=\"text-colo\">Edit Profile</span></a>\r\n\t\t </div>\r\n\t  \r\n\t\t\t\t\t\t\t\t  <!--if statment refrencing to our fxn in .ts-->        <!--the submit is the function that submits to the .ts file-->\r\n\t\t \r\n\t\t</div> \r\n\t</div>\r\n\t\r\n  </nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertifyService, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.model = {};
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
    }
    // a service was created and was injected to this component and before it has to work, we ust have called it in the app.module.ts
    // ngForm  is the form itself so we give it a name and we need to add its module FormsModule
    // Id:number;
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) {
            console.log(photoUrl);
            _this.photoUrl = photoUrl;
        });
        var code = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(code); // decoding token
        console.log('joko 1');
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        this.authService.login(this.model).subscribe(function (value) { return console.log(value); }, function (error) {
            console.log(error);
        }, function () {
            _this.router.navigate(['/member']); // redirect users to the memeber page when they login
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.loggedOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('picUrl');
        this.alertifyService.success('logged Out');
        this.router.navigate(['/home']); // navigate to home, this was done by setting up the route.ts, setting some route there
        // then coming to add RouteModule in app.module.ts and then injcting the module in the nav.component.ts
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/photo-editor/photo-editor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/photo-editor/photo-editor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nimg .img-thumbnail{\r\n\r\n    height: 100px;\r\n    min-width: 100px !important;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.btn1{\r\n    color:#fff !important;\r\n    background-color: #3a5878 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZWRpdG9yL3Bob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tZWRpdG9yL3Bob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbWcgLmltZy10aHVtYm5haWx7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmJ0bjF7XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ODc4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/photo-editor/photo-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/photo-editor/photo-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\r\n<img src=\"{{photo.uRl}}\" class=\"img-thumbnail p-1\" alt=\"\">\r\n<div class=\"text-center\">\r\n  <button type=\"button\" [ngClass]=\"photo.isMain?'btn-sm btn-success': 'btn btn-primary'\" [disabled]=\"photo.isMain\" (click)=\"MakeMain(photo.id)\" >Main</button>\r\n  \r\n  <button style=\"background-color: #3a5878 ;border-color: #3a5878\" type=\"button\"  [disabled]=\"photo.isMain\" (click)=\"onDelete(photo.id)\" class=\"btn btn-sm btn-danger\"><i  class=\"fa fa-trash-o\"></i></button>\r\n</div>\r\n  </div> \r\n\r\n</div>\r\n\r\n<div class=\"row mt-3\">\r\n \r\n    <div class=\" card offset-md-3\">\r\n                        \r\n               <input type=\"file\"   (change)=\"onSelectChange($event)\"/>\r\n            \r\n               <input class=\"btn1\" type=\"submit \" value=\"submit\" (click)=\"OnUpload()\"/>\r\n      <!--  <h3>Select files</h3>\r\n\r\n        <div ng2FileDrop\r\n             [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n             (fileOver)=\"fileOverBase($event)\"\r\n             [uploader]=\"uploader\"\r\n             class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\r\n            <i class=\"fa fa-upload  fa-3x\"></i>\r\n            Drop Photos Here\r\n        </div>\r\n\r\n        \r\n        Multiple\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n\r\n        Single\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n    </div>\r\n\r\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\r\n\r\n        <h3>Upload queue</h3>\r\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th width=\"50%\">Name</th>\r\n                <th>Size</th>\r\n               \r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n               \r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div>\r\n            <div>\r\n                Queue progress:\r\n                <div class=\"progress mb-4\" style=\"\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                <span class=\"fa fa-upload\"></span> Upload \r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                <span class=\"fa fa-ban\"></span> Cancel \r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                <span class=\"fa fa-trash\"></span> Remove \r\n            </button>\r\n        </div>-->\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/photo-editor/photo-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-editor/photo-editor.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var PhotoEditorComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function PhotoEditorComponent(authService, http, alertifyService, router) {
        this.authService = authService;
        this.http = http;
        this.alertifyService = alertifyService;
        this.router = router;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        this.getMemberChangePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
    } // a service was created and was injected to this component and before it has to work, we ust have called it in the app.module.ts
    PhotoEditorComponent.prototype.ngOnInit = function () {
        var code = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(code); // decoding token
        // this.initializeUploader();
        console.log('ok');
    };
    PhotoEditorComponent.prototype.onSelectChange = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    PhotoEditorComponent.prototype.MakeMain = function (id) {
        var _this = this;
        return this.authService.MakeMain(id).subscribe(function (res) {
            _this.photo = res;
            // returtn the photo url
            //  this.getMemberChangePhoto.emit(this.photo.photoURl); // emit the url
            console.log(_this.photo.photoUrl);
            _this.authService.canMemberChangePhoto(_this.photo.photoUrl);
            localStorage.setItem('picUrl', _this.photo.photoUrl);
            _this.errors = res;
            _this.alertifyService.success(_this.errors.status);
        });
    };
    PhotoEditorComponent.prototype.onDelete = function (photoId) {
        var _this = this;
        this.alertifyService.confirm('Do you want to delete the picture ?', function () {
            _this.authService.DeletePhoto(photoId).subscribe(function (data) {
                _this.photos.splice(_this.photos.findIndex(function (x) { return x.id === photoId; }), 1);
                _this.alertifyService.success('Picture deleted Successfully');
            }, function (error) {
                _this.alertifyService.success('Error');
            });
        });
    };
    PhotoEditorComponent.prototype.OnUpload = function () {
        var _this = this;
        console.log(this.selectedFile);
        return this.authService.Upload(this.selectedFile).subscribe(function (data) {
            _this.alertifyService.success('Picture Uploaded Successfully .');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberChangePhoto", void 0);
    PhotoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/photo-editor/photo-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn0\r\n{\r\nbackground-color: #d26e8e;\r\ncolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4wXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogI2QyNmU4ZTtcclxuY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---->\r\n\r\n\r\n\r\n\r\n<body>\r\n    \r\n    <div class=\"profile_banner\">\r\n      <div class=\"container\"> \r\n         <h3>Login</h3>\r\n      </div>\r\n    </div>\r\n    <div class='profiles'>\r\n      <div class=\"container\">\r\n        <div class=\"account_grid row\">\r\n           <div class=\"col-md-6 login-left\">\r\n               <h3>NEW CUSTOMERS</h3>\r\n             <p class='myfont'>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>\r\n \r\n             \r\n             <form [formGroup]=\"registerForm\" (submit)=\"register()\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\r\n                    <label class=\"radio-inline\">\r\n                      <input class=\"mr-3\" type=\"radio\" value=\"male\" formControlName=\"Gender\">Male\r\n                    </label>\r\n                    <label class=\"radio-inline ml-3\">\r\n                      <input class=\"mr-3\" type=\"radio\" value=\"female\" formControlName=\"Gender\">Female\r\n                    </label>\r\n                  </div>\r\n                <div class=\"form-group\">\r\n                      <!--has to be same name as the one on the component-->\r\n                    <input formControlName=\"UserName\" placeholder=\"UserName\"  type=\"text\" [ngClass]=\"{'is-invalid': registerForm.get('UserName').errors && registerForm.get('UserName').touched }\" class=\"form-control \"/>\r\n               <div class=\"invalid-feedback\">Please choose a UserName</div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <input [ngClass]=\"{'is-invalid': registerForm.get('KnownAs').errors && registerForm.get('KnownAs').touched}\" class=\"form-control\"\r\n                        placeholder=\"Known As\" formControlName=\"KnownAs\">\r\n                      <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('KnownAs').touched && registerForm.get('KnownAs').hasError('required')\">Known as is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input [ngClass]=\"{'is-invalid': registerForm.get('City').errors && registerForm.get('City').touched}\" class=\"form-control\"\r\n                          placeholder=\"City\" formControlName=\"City\">\r\n                        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('City').touched && registerForm.get('City').hasError('required')\">City is required</div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <input [ngClass]=\"{'is-invalid': registerForm.get('DateOfBirth').errors && registerForm.get('DateOfBirth').touched}\" class=\"form-control\"\r\n                            placeholder=\"Date of Birth\" formControlName=\"DateOfBirth\" type=\"date\">\r\n                          <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('DateOfBirth').touched && registerForm.get('DateOfBirth').hasError('required')\">Date of Birth is required</div>\r\n                        </div>\r\n                      <div class=\"form-group\">\r\n                        <input [ngClass]=\"{'is-invalid': registerForm.get('Country').errors && registerForm.get('Country').touched}\" class=\"form-control\"\r\n                          placeholder=\"Country\" formControlName=\"Country\">\r\n                        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('Country').touched && registerForm.get('Country').hasError('required')\">Country is required</div>\r\n                      </div>\r\n                    \r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\" style=\"margin-right:10px\">I am Looking For: </label>\r\n                  <label class=\"radio-inline\">\r\n                    <input class=\"mr-3\" type=\"radio\" value=\"female\" formControlName=\"LookingFor\">Female\r\n                  </label>\r\n                  <label class=\"radio-inline ml-3\">\r\n                    <input class=\"mr-3\" type=\"radio\" value=\"male\" formControlName=\"LookingFor\">male\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                   \r\n                    <input type=\"password\" [ngClass]=\"{'is-invalid': registerForm.get('Password').errors && registerForm.get('Password').touched }\" placeholder=\"Password\" formControlName=\"Password\"   class=\"form-control\"/>\r\n                     <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('Password').hasError('required') && registerForm.get('Password').touched \">Please choose a Password</div>\r\n\r\n                     <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('Password').hasError('minlength') && registerForm.get('Password').touched \">Please require at least 4 characters</div>\r\n\r\n                  </div>\r\n                <div class=\"form-group\">\r\n                \r\n                    <input type=\"password\" [ngClass]=\"{'is-invalid': registerForm.get('ConfirmPassword').errors && registerForm.get('ConfirmPassword').touched ||registerForm.get('ConfirmPassword').touched && registerForm.hasError('mismatch')}\"  placeholder=\"Confirm Password\" formControlName=\"ConfirmPassword\"   class=\"form-control\"/>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('ConfirmPassword').hasError('required') && registerForm.get('ConfirmPassword').touched \">Please fill in the blanks</div>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('ConfirmPassword').hasError('mismatch') && registerForm.get('ConfirmPassword').touched \">Password must match</div>\r\n\r\n                  </div>\r\n                <input value=\"Register\" [disabled]=\"!registerForm.valid\" type=\"submit\" class=\"btn btn0\"/>\r\n             </form>\r\n           </div>\r\n           <div class=\"col-md-6 login-right\">\r\n              <h3>REGISTERED CUSTOMERS</h3>\r\n            <p>If you have an account with us, please log in.</p>\r\n\r\n            <!--that ng Form here has no meaning, just to refrence to the form-->\r\n            <form (submit)=\"login()\"> \r\n              <div class=\"form-group\">\r\n                  <label for=\"userName\">Email</label>\r\n                  <input name=\"UserName\" [(ngModel)]=\"model.UserName\" placeholder=\"Email\" id=\"userName\" type=\"text\" class=\"form-control\"/>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input [(ngModel)]=\"model.Password\" name=\"Password\" placeholder=\"Password\" id=\"password\" type=\"password\" class=\"form-control\"/>\r\n              </div>\r\n            <input value=\"LOGIN\" type=\"submit\" class=\"btn btn0\"/>\r\n              </form>\r\n           </div>\r\n           <div class=\"clearfix\"> </div>\r\n         </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <div class=\"container\">\r\n        <div class=\"cssmenu\">\r\n          <ul>\r\n          <li class=\"active\"><a href=\"#\">Home</a></li> \r\n          <li><a href=\"about.html\">About</a></li>\r\n          <li><a href=\"profiles.html\">Add Profile</a></li>\r\n          <li><a href=\"contact.html\">Contact</a></li>\r\n          </ul>\r\n          </div>\r\n          <div class=\"copy\">\r\n          <p>&copy; 2014 Template by <a href=\"http://w3layouts.com\" target=\"_blank\">w3layouts</a></p>\r\n        </div>\r\n        <div class=\"social\"> \r\n          <ul class=\"footer_social\">\r\n            <li><a href=\"#\"> <i class=\"fb\"> </i> </a></li>\r\n            <li><a href=\"#\"> <i class=\"tw\"> </i> </a></li>\r\n           </ul>\r\n        </div>\r\n          <div class='clearfix'> </div>\r\n      </div>\r\n    </div>\r\n    </body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/alertify.service */ "./src/app/Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RegisterComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function RegisterComponent(authService, alertifyService, router, fb) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.fb = fb;
        this.model = {};
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    } // a service was created and was injected to this component and before it has to work, we ust have called it in the app.module.ts
    // ngForm  is the form itself so we give it a name and we need to add its module FormsModule
    // Id:number;
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm(); // step 3
    };
    RegisterComponent.prototype.log = function (x) {
        console.log(x);
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            Gender: ['male'],
            KnownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            DateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,],
            LookingFor: ['female'],
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('Password').value === g.get('ConfirmPassword').value ? null : { mismatch: true };
    };
    RegisterComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        this.authService.login(this.model).subscribe(function (value) { return console.log(value); }, function (error) {
            console.log(error);
        }, function () {
            _this.router.navigate(['/members']); // redirect users to the memeber page when they login
        });
    };
    RegisterComponent.prototype.loggedIn = function () {
        console.log('joko 2');
        return this.authService.loggedIn();
    };
    RegisterComponent.prototype.loggedOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('picUrl');
        this.authService.userPic = null;
        this.authService.decodedToken = null;
        this.alertifyService.success('logged Out');
        this.router.navigate(['/home']); // navigate to home, this was done by setting up the route.ts, setting some route there
        // then coming to add RouteModule in app.module.ts and then injcting the module in the nav.component.ts
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.model = Object.assign({}, this.registerForm.value);
            console.log(this.model);
        }
        this.authService.register(this.model).subscribe(function (response) {
            _this.alertifyService.success(response.success);
        }, function (error) {
            _this.alertifyService.error(error);
        }, function () {
            _this.authService.login(_this.model).subscribe(function (response) {
                _this.router.navigate(['/members']); // redirect users to the memeber page when they login
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _Messages_Messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages/Messages.component */ "./src/app/Messages/Messages.component.ts");
/* harmony import */ var _members_Member_List_Member_List_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members/Member-List/Member-List.component */ "./src/app/members/Member-List/Member-List.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var src_resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_resolvers/member-detail.resolver */ "./src/_resolvers/member-detail.resolver.ts");
/* harmony import */ var src_resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_resolvers/member-list.resolver */ "./src/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var src_resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_resolvers/member-edit.resolver */ "./src/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var src_resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_resolvers/lists.resolver */ "./src/_resolvers/lists.resolver.ts");
/* harmony import */ var src_resolvers_message_resolvers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/_resolvers/message.resolvers */ "./src/_resolvers/message.resolvers.ts");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "./src/app/admin/admin-panel/admin-panel.component.ts");














var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            // tslint:disable-next-line: max-line-length
            { path: 'members/:id', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"], resolve: { user: src_resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["MemberDetailResolver"] } },
            { path: 'likes', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], resolve: { users: src_resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__["ListsResolver"] } },
            { path: 'member/edit', component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"], resolve: { user: src_resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__["MemberEditResolver"] } },
            { path: 'Messages', component: _Messages_Messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"], resolve: { messages: src_resolvers_message_resolvers__WEBPACK_IMPORTED_MODULE_12__["MessageResolver"] } },
            { path: 'members', component: _members_Member_List_Member_List_component__WEBPACK_IMPORTED_MODULE_2__["MemberListComponent"], resolve: { users: src_resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MemberListResolver"] } },
            { path: 'admin', component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_13__["AdminPanelComponent"], data: { roles: ['Admin'] } },
        ]
    },
    { path: 'Register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    api: 'http://jokoyoski200-001-site1.itempurl.com/api/',
    whitelist: ['http://jokoyoski200-001-site1.itempurl.com'],
    version: 'x.x.x',
};


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
    production: false,
    apiURL: 'jokoyoski200-001-site1.itempurl.com/api/'
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

module.exports = __webpack_require__(/*! C:\Users\Automata\Documents\GitHub\.NetAngularDatingApp\DatingApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map