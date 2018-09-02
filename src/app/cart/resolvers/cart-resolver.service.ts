import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { StepsService } from '../steps.service';

@Injectable()
export class CartResolverService {

  constructor(private router: Router, private stepsService: StepsService) {
  }

  resolve(route: ActivatedRouteSnapshot): boolean {
    const steps = route.data['steps'];

    this.stepsService.setSteps(steps);
    return true;
  }
}
