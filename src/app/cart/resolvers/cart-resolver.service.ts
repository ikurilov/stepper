import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { StepsService } from '../steps.service';

@Injectable()
export class CartResolverService implements Resolve<void> {

  constructor(private router: Router, private stepsService: StepsService, private activeRoute: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    const steps = route.data['steps'];
    this.stepsService.setSteps(steps);
    console.log(this.activeRoute.parent);
    //this.router.navigate(['./', steps[0].id], {relativeTo: this.activeRoute.parent});
  }
}
