import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-plan-control',
  templateUrl: './select-plan-control.component.html',
  styleUrls: ['./select-plan-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectPlanControlComponent),
      multi: true,
    }
  ],
})
export class SelectPlanControlComponent implements OnInit {
  @Input() plans;
  selectedPlan = null;

  constructor() {
  }

  ngOnInit() {
    console.log(this.plans);
  }

  togglePlan(plan) {
    if (this.selectedPlan === plan) {
      this.selectedPlan = null;
    } else {
      this.selectedPlan = plan;
    }
    this.onTouched(this.selectedPlan);
    this.onChange(this.selectedPlan);
  }

  writeValue(value) {
    if (!value) {
      return;
    }
    this.selectedPlan = value;
    this.onChange(value);
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };


  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
