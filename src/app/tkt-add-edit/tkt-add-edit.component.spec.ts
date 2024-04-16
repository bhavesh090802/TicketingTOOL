import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TktAddEditComponent } from './tkt-add-edit.component';

describe('TktAddEditComponent', () => {
  let component: TktAddEditComponent;
  let fixture: ComponentFixture<TktAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TktAddEditComponent]
    });
    fixture = TestBed.createComponent(TktAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
