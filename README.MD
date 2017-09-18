# simple-ng-tags

Simple tag input component implementation for Angular 4. Works with template and reactive angular forms.

[DEMO 1](https://plnkr.co/edit/4zFhtmlZThEebq6NdXGN?p=preview)
[DEMO 2](https://plnkr.co/edit/j6US7jNyUviqxKM5crVp?p=preview)

## Installation

To install library, run:

```bash
$ npm install simple-ng-tags --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import library
import { SimpleNgTagsModule } from 'simple-ng-tags';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

    // Specify library as an import
    SimpleNgTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Template driven form example
[DEMO](https://plnkr.co/edit/4zFhtmlZThEebq6NdXGN?p=preview)
Once the library is imported, you can use `simple-ng-tags` component in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<simple-ng-tags [(ngModel)]="tags"></simple-ng-tags>
```
```typescript
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tags: ['tag 1', 'tag 2', 'tag 3'];

  constructor() {}

  ngOnInit() {}
}

```

### Reactive form example
[DEMO](https://plnkr.co/edit/j6US7jNyUviqxKM5crVp?p=preview)
Once the library is imported, you can use `simple-ng-tags` component in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<simple-ng-tags [formControl]="tags"></simple-ng-tags>
```
```typescript
<!-- Initialize tags in app.component.ts -->
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tags: FormControl;

  constructor() {}

  ngOnInit() {
    this.tags = new FormControl(['tag 1', 'tag 2', 'tag 3'], Validators.required);
    this.tags.valueChanges.subscribe( _tags => {
      console.log(_tags);
    });
  }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Package

To package the component:

```bash
$ npm run packagr
```

## License

MIT © [Akis Volanis](mailto:c.volanis@gmail.com)
