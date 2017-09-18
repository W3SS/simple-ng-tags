import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNgTagsComponent } from './simple-ng-tags.component';
import { FormsModule } from '@angular/forms';
export class SimpleNgTagsModule {
}
SimpleNgTagsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
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
SimpleNgTagsModule.ctorParameters = () => [];
function SimpleNgTagsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SimpleNgTagsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SimpleNgTagsModule.ctorParameters;
}
//# sourceMappingURL=simple-ng-tags.module.js.map