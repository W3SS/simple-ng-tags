import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>simple-ng-tags example</h2>
      <simple-ng-tags [placeholder]="'+ Tags'" [(ngModel)]="tags" required></simple-ng-tags>
      <br>
      {{tags | json}}
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
  tags: any[] = ['tag 1', 'tag 2', 'tag 3'];
}
