import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlanControlWrapperComponent } from './select-plan-control-wrapper.component';

describe('SelectPlanControlWrapperComponent', () => {
  let component: SelectPlanControlWrapperComponent;
  let fixture: ComponentFixture<SelectPlanControlWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlanControlWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlanControlWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
