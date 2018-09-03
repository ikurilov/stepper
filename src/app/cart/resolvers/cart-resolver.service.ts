import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { StepsService } from '../steps.service';

@Injectable()
export class CartResolverService implements Resolve<void> {

  constructor(private router: Router, private stepsService: StepsService, private activedRoute: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    // get steps config from route config
    const steps = route.data['steps'];
    this.stepsService.setSteps(steps);
  }
}
