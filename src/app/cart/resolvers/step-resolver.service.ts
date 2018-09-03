import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { IStepConfig, StepsService } from '../steps.service';

@Injectable()
export class StepResolverService implements Resolve<IStepConfig> {

  constructor(private router: Router, private stepsService: StepsService, private routeActive: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    const url = this.getUrlFromRoot(route.pathFromRoot);
    const stepId = route.params['stepId'];
    if (stepId === 'default') {
      // redirected from parent route (cart component)
      this.redirectToDefault(url);
    } else {
      const nextStep = this.stepsService.getStep(stepId);
      if (nextStep && this.stepsService.canNavigateToStep(nextStep)) {
        // success navigation, resolve step config
        this.stepsService.setCurrentStep(nextStep);
        return this.stepsService.getStepFormConfig(nextStep);
      } else {
        if (this.routeActive.firstChild === null) {
          // it's initial router state (the first page loading, there is no previous router state)
          this.redirectToDefault(url);
        } else {
          // cancel navigation
          return throwError(`can't navigate to step ${stepId}`);
        }
      }
    }
  }

  /**
   * redirects to first step
   * @param currentUrl array of current url fragments
   */
  redirectToDefault(currentUrl: string[]) {
    const steps = this.stepsService.getSteps();
    const defaultStep = steps[0];
    this.router.navigate([currentUrl.slice(0, -1).join('/'), defaultStep.id]);
  }

  /**
   * returns array of current url fragments
   * @param pathFromRoot
   */
  getUrlFromRoot(pathFromRoot: ActivatedRouteSnapshot[]): string[] {
    return pathFromRoot
      .map(r => r.url.map(u => u.path).join('/'))
      .filter(u => u.length);
  }
}
