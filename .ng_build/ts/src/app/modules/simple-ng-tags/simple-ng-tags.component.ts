import { Component, OnInit, Input, ElementRef, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const TAGS_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleNgTagsComponent),
  multi: true
};

@Component({
  selector: 'simple-ng-tags',
  template: `
    <div class="tags-container" (click)="focusable.focus()">
      <div class="tag" *ngFor="let tag of tags">
        <button (click)="removeTag(tag);">&#10005;</button> {{tag}}
      </div>

      <input type="text" #focusable [placeholder]="placeholder" name="tag-input" [(ngModel)]="tag" (keyup.enter) = "addTag($event)">
    </div>
  `,
  styles: [`
    :host {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      border: 1px solid #ddd;
      cursor: text;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      font-family: Sans-Serif;
    }

    :host .ng-invalid {
      background-color: rgba(169, 68, 66, .2);
    }

    * {
      outline: none;
    }

    .tags-container {
      border: none;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      padding: 0 10px;
    }

    .tag {
      background-color: #eee;
      border-radius: 4px;
      color: #333;
      cursor: default;
      display: inline-block;
      -ms-flex-negative: 0;
          flex-shrink: 0;
      font-size: 14px;
      line-height: 22px;
      margin: 2px 5px 2px 0;
      padding: 0 4px;
    }

    .tag button {
      cursor: pointer;
      border: none;
      background: transparent;
      color: #aaa;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
      padding: 0px;
    }

    .tag button:hover {
      color: #555;
    }

    input {
      height: 22px;
      line-height: 22px;
      font-size: 14px;
      -webkit-box-flex: 1;
          -ms-flex: 1 0 50px;
              flex: 1 0 50px;
      border: none;
      background: transparent;
      margin: 2px 6px !important;
    }

    .blink {
      -webkit-animation: pulse 2s ease-out 1 alternate;
      animation:         pulse 2s ease-out 1 alternate; 
    }
    @-webkit-keyframes pulse {
      0% {
        background: rgb(43, 179, 122);
      }
      10% {
        background: rgb(43, 179, 122);
      }
      50% {
        background-color: #eee;
      }
    }
    @keyframes pulse {
      0% {
        background: rgb(43, 179, 122);
      }
      10% {
        background: rgb(43, 179, 122);
      }
      50% {
        background-color: #eee;
      }
    }
  `],
  providers: [TAGS_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SimpleNgTagsComponent implements OnInit, ControlValueAccessor {
  @Input()placeholder = '+ Tag';

  public tags: any[];
  public onChange: any = Function.prototype; // Trascend the onChange event
  public onTouched: any = Function.prototype; // Trascend the onTouch event
  public tag: string = '';
  
  constructor(private elRef:ElementRef) { }

  ngOnInit() {

  }

  // Required for ControlValueAccessor interface
  writeValue(value: any) {
    this.tags = value;
  }

  // Required forControlValueAccessor interface
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // Required forControlValueAccessor interface
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  addTag(e) {
    if(this.tag) {
      const _tagIndex = this.tags.findIndex(tag => tag === this.tag);
      if(_tagIndex < 0) {
        this.tags.push(this.tag);
        this.onChange(this.tags);
        this.tag = '';
      } else {
        const _tagsEl = this.elRef.nativeElement.querySelectorAll('.tag');
        _tagsEl[_tagIndex].classList.add('blink');
        setTimeout(()=> {
          _tagsEl[_tagIndex].classList.remove('blink');
        }, 2000);
      }
    }
  }

  removeTag(tag){
    const _tagIndex = this.tags.findIndex(_tag => _tag === tag);
    if(_tagIndex > -1) {
      this.tags.splice(_tagIndex, 1);
      this.onChange(this.tags);
    }
  }
}
