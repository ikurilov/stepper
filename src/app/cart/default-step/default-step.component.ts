import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-default-step',
  templateUrl: './default-step.component.html',
  styleUrls: ['./default-step.component.scss']
})
export class DefaultStepComponent implements OnInit {
  @Input() header: string;
  @Input() fields: string;
  @Input() fg: FormGroup;

  constructor(private stepsService: StepsService) {
  }

  ngOnInit() {
  }

}
