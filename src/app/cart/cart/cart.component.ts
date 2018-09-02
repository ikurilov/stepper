import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectPlanControlComponent } from '../../select-plan-control/select-plan-control.component';
import { ActivatedRoute, Router } from '@angular/router';
import { IStepConfig, StepsService } from '../steps.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  tabs = [];

  plans = {
    'plans': [
      {'title': 'Beginner', 'price': 10, 'currency': '$', 'preview': 'beginner.png'},
      {
        'title': 'Intermediate', 'price': 20, 'currency': '$', 'preview':
          'intermediate.png'
      },
      {
        'title': 'Upper Intermediate', 'price': 30, 'currency': '$', 'preview':
          'upper_intermediate.png'
      }
    ]
  };
  options = {
    'fields': [
      {
        'id': 'test',
        'title': 'Last name',
        'customControl': SelectPlanControlComponent,
        'data': this.plans.plans
      },
      {
        'id': 'lastname',
        'title': 'Last name',
        'type': 'text',
        'validators': [
          {
            'pattern': '/^([A-Z][A-Za-z ,.\'`-]{3,30})$/g'
          }
        ]
      },
      {
        'id': 'firstname',
        'title': 'First name',
        'type': 'text',
        'validators': [
          {
            'pattern': '/^([A-Z][A-Za-z ,.\'`-]{3,30})$/g'
          }
        ]
      },
      {
        'id': 'email',
        'title': 'E-mail',
        'type': 'email',
        'validators': [
          {
            'pattern': '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i'
          }
        ]
      },
      {
        'id': 'phone',
        'title': 'Phone',
        'type': 'phone',
        'validators': []
      },
      {
        'id': 'paymentmethod',
        'title': 'Payment method',
        'type': 'select',
        'items': [
          {
            'title': 'MasterCard',
            'id': 0
          },
          {
            'title': 'Visa',
            'id': 1
          }
        ]
      }
    ]
  };
  plansForm: FormGroup;

  config: FormGroup;

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
