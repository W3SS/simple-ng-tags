import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgTagsComponent } from './simple-ng-tags.component';

describe('SimpleNgTagsComponent', () => {
  let component: SimpleNgTagsComponent;
  let fixture: ComponentFixture<SimpleNgTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNgTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
