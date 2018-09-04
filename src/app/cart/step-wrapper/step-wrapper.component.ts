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
  isLastStep = false;

  notification: { type: 'success' | 'error', text: string };

  constructor(private stepsService: StepsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const currentStep = this.stepsService.getCurrentStep();
    this.form = <FormGroup>this.stepsService.form.get(currentStep.id);
    this.isLastStep = this.stepsService.isLastStep(currentStep);
  }

  next() {
    const nextStep = this.stepsService.getNextStep();
    this.router.navigate(['../', nextStep.id], {relativeTo: this.route});
  }

  buy() {
    if (this.stepsService.form.valid) {
      this.showNotification('success');
    } else {
      this.showNotification('error');
    }
  }

  showNotification(type: 'error' | 'success') {
    this.notification = {
      type,
      text: type === 'error' ? 'Error!' : 'Success'
    };
  }

  hideNotification() {
    this.notification = null;
  }
}
