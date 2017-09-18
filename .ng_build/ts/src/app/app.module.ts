import { FormsModule } from '@angular/forms';
import { SimpleNgTagsModule } from './modules/simple-ng-tags/simple-ng-tags.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimpleNgTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
