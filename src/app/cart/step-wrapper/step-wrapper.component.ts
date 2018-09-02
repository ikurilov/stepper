import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-wrapper',
  templateUrl: './step-wrapper.component.html',
  styleUrls: ['./step-wrapper.component.scss']
})
export class StepWrapperComponent implements OnInit {
  @Input() header: string;

  constructor() {
  }

  ngOnInit() {
  }

}
