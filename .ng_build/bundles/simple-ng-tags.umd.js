(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
	(factory((global['simple-ng-tags'] = {}),global.ng.core,global.ng.common,global.ng.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

var TAGS_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return SimpleNgTagsComponent; }),
    multi: true
};
var SimpleNgTagsComponent = (function () {
    /**
     * @param {?} elRef
     */
    function SimpleNgTagsComponent(elRef) {
        this.elRef = elRef;
        this.placeholder = '+ Tag';
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.tag = '';
    }
    /**
     * @return {?}
     */
    SimpleNgTagsComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SimpleNgTagsComponent.prototype.writeValue = function (value) {
        this.tags = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SimpleNgTagsComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SimpleNgTagsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SimpleNgTagsComponent.prototype.addTag = function (e) {
        var _this = this;
        if (this.tag) {
            var /** @type {?} */ _tagIndex_1 = this.tags.findIndex(function (tag) { return tag === _this.tag; });
            if (_tagIndex_1 < 0) {
                this.tags.push(this.tag);
                this.onChange(this.tags);
                this.tag = '';
            }
            else {
                var /** @type {?} */ _tagsEl_1 = this.elRef.nativeElement.querySelectorAll('.tag');
                _tagsEl_1[_tagIndex_1].classList.add('blink');
                setTimeout(function () {
                    _tagsEl_1[_tagIndex_1].classList.remove('blink');
                }, 2000);
            }
        }
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    SimpleNgTagsComponent.prototype.removeTag = function (tag) {
        var /** @type {?} */ _tagIndex = this.tags.findIndex(function (_tag) { return _tag === tag; });
        if (_tagIndex > -1) {
            this.tags.splice(_tagIndex, 1);
            this.onChange(this.tags);
        }
    };
    return SimpleNgTagsComponent;
}());
SimpleNgTagsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'simple-ng-tags',
                template: "\n    <div class=\"tags-container\" (click)=\"focusable.focus()\">\n      <div class=\"tag\" *ngFor=\"let tag of tags\">\n        <button (click)=\"removeTag(tag);\">&#10005;</button> {{tag}}\n      </div>\n\n      <input type=\"text\" #focusable [placeholder]=\"placeholder\" name=\"tag-input\" [(ngModel)]=\"tag\" (keyup.enter) = \"addTag($event)\">\n    </div>\n  ",
                styles: ["\n    :host {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      border: 1px solid #ddd;\n      cursor: text;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      font-family: Sans-Serif;\n    }\n\n    :host .ng-invalid {\n      background-color: rgba(169, 68, 66, .2);\n    }\n\n    * {\n      outline: none;\n    }\n\n    .tags-container {\n      border: none;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding: 0 10px;\n    }\n\n    .tag {\n      background-color: #eee;\n      border-radius: 4px;\n      color: #333;\n      cursor: default;\n      display: inline-block;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      font-size: 14px;\n      line-height: 22px;\n      margin: 2px 5px 2px 0;\n      padding: 0 4px;\n    }\n\n    .tag button {\n      cursor: pointer;\n      border: none;\n      background: transparent;\n      color: #aaa;\n      font-size: 14px;\n      height: 20px;\n      line-height: 20px;\n      padding: 0px;\n    }\n\n    .tag button:hover {\n      color: #555;\n    }\n\n    input {\n      height: 22px;\n      line-height: 22px;\n      font-size: 14px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 50px;\n              flex: 1 0 50px;\n      border: none;\n      background: transparent;\n      margin: 2px 6px !important;\n    }\n\n    .blink {\n      -webkit-animation: pulse 2s ease-out 1 alternate;\n      animation:         pulse 2s ease-out 1 alternate; \n    }\n    @-webkit-keyframes pulse {\n      0% {\n        background: rgb(43, 179, 122);\n      }\n      10% {\n        background: rgb(43, 179, 122);\n      }\n      50% {\n        background-color: #eee;\n      }\n    }\n    @keyframes pulse {\n      0% {\n        background: rgb(43, 179, 122);\n      }\n      10% {\n        background: rgb(43, 179, 122);\n      }\n      50% {\n        background-color: #eee;\n      }\n    }\n  "],
                providers: [TAGS_INPUT_CONTROL_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SimpleNgTagsComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
SimpleNgTagsComponent.propDecorators = {
    'placeholder': [{ type: core.Input },],
};
var SimpleNgTagsModule = (function () {
    function SimpleNgTagsModule() {
    }
    return SimpleNgTagsModule;
}());
SimpleNgTagsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                declarations: [
                    SimpleNgTagsComponent
                ],
                exports: [
                    SimpleNgTagsComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SimpleNgTagsModule.ctorParameters = function () { return []; };

exports.SimpleNgTagsModule = SimpleNgTagsModule;
exports.ɵa = SimpleNgTagsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=simple-ng-tags.umd.js.map
