import { OnInit, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SimpleNgTagsComponent implements OnInit, ControlValueAccessor {
    private elRef;
    placeholder: string;
    tags: any[];
    onChange: any;
    onTouched: any;
    tag: string;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    addTag(e: any): void;
    removeTag(tag: any): void;
}
