import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNgTagsComponent } from './simple-ng-tags.component';
import { FormsModule } from '@angular/forms';

@NgModule({
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
})
export class SimpleNgTagsModule { }
