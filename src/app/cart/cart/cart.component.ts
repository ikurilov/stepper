import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStepConfig, StepsService } from '../steps.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  tabs = [];

  constructor(private router: Router, private route: ActivatedRoute, private stepsService: StepsService) {
    this.route.data.subscribe(data => {
      this.tabs = data.steps.map((step: IStepConfig) => {
        return {
          link: './' + step.id,
          text: step.title
        };
      });
    });
  }

  ngOnInit() {

  }

}
