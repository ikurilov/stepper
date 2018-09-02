import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlanControlComponent } from './select-plan-control.component';

describe('SelectPlanControlComponent', () => {
  let component: SelectPlanControlComponent;
  let fixture: ComponentFixture<SelectPlanControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlanControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlanControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
