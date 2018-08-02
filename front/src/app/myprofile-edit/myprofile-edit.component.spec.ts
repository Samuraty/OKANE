import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileEditComponent } from './myprofile-edit.component';

describe('MyprofileEditComponent', () => {
  let component: MyprofileEditComponent;
  let fixture: ComponentFixture<MyprofileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
