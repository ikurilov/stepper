import { Component, Input, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step-wrapper',
  templateUrl: './step-wrapper.component.html',
  styleUrls: ['./step-wrapper.component.scss']
})
export class StepWrapperComponent implements OnInit {
  @Input() header: string;
  form: FormGroup;

  constructor(private stepsService: StepsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const currentStep = this.stepsService.getCurrentStep();
    this.form = <FormGroup>this.stepsService.form.get(currentStep.id);
  }

  next() {
    const nextStep = this.stepsService.getNextStep();
    this.router.navigate(['../', nextStep.id], {relativeTo: this.route});
  }
}
