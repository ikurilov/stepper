import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StepsService } from '../steps.service';

@Injectable()
export class StepResolverService {

  constructor(private router: Router, private stepsService: StepsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const stepId = route.params['stepId'];

    const steps = this.stepsService.getSteps();

    const step = steps.find(s => s.id === stepId);

    if (step) {
      this.stepsService.setCurrentStep(step);
      return this.stepsService.getStepFormConfig(step);
    } else {
      return of(false);
    }
  }
}
