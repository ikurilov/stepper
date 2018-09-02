import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepsService } from '../cart/steps.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() header: string;
  @Input() fields: string;
  @Input() fg: FormGroup;
  plan;
  information;
  constructor(private stepsService: StepsService) {
  }

  ngOnInit() {
    this.plan = this.stepsService.form.get('plan');
    console.log(this.plan)
    this.information = this.stepsService.form.get('information');
  }

}
