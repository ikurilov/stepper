import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { StepsService } from '../steps.service';

@Injectable()
export class StepResolverService {

  constructor(private router: Router, private stepsService: StepsService, private routeActive: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const stepId = route.params['stepId'];
    const steps = this.stepsService.getSteps();
    const step = this.stepsService.getStep(stepId);
    const stepIdx = steps.findIndex(s => s.id === step.id);
    const currentStep = this.stepsService.getCurrentStep();
    if (currentStep) {
      const currentStepIdx = steps.findIndex(s => s.id === currentStep.id);
      const valid = this.stepsService.form.get(currentStep.id).valid;
      if (stepIdx > currentStepIdx && !valid) {
        throw throwError(`can't navigate to step`);
      }
    }

    if (step) {
      this.stepsService.setCurrentStep(step);
      return this.stepsService.getStepFormConfig(step);
    } else {
      return of(false);
    }
  }
}
