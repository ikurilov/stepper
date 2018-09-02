import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-plan-control-wrapper',
  templateUrl: './select-plan-control-wrapper.component.html',
  styleUrls: ['./select-plan-control-wrapper.component.css']
})
export class SelectPlanControlWrapperComponent implements OnInit {
  @Input() name: string;
  @Input() fg: FormGroup;
  @Input() data: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
