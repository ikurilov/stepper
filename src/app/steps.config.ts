import { IStepConfig } from './cart/steps.service';
import { SelectPlanControlComponent } from './select-plan-control/select-plan-control.component';
import { SelectPlanControlWrapperComponent } from './select-plan-control-wrapper/select-plan-control-wrapper.component';
import { BillingComponent } from './billing/billing.component';

export const StepsConfig: IStepConfig[] = [
  {
    id: 'plan',
    title: 'Choice plan',
    header: 'A plan to suit you',
    formConfigUrl: 'plan.json',
    formConfigMapper: (data) => (
      {
        fields: [
          {
            id: 'plans',
            data: data.plans,
            customControl: SelectPlanControlWrapperComponent,
            validators: [{
              'required': true
            }]
          }
        ]
      }
    ),
  },
  /* uncomment to check generation of stepper */
  /*{
    id: 'plan2',
    title: 'Choice plan 2',
    header: 'A plan to suit you 2',
    formConfigUrl: 'plan.json',
    formConfigMapper: (data) => (
      {
        fields: [
          {
            id: 'plans',
            data: data.plans,
            customControl: SelectPlanControlWrapperComponent,
            validators: [{
              'required': true
            }]
          }
        ]
      }
    ),
  },*/
  {
    id: 'information',
    title: 'Information',
    header: `Let's finish powering you up!`,
    formConfigUrl: 'information.json',
  },
  {
    id: 'billing',
    title: 'Billing',
    formConfigUrl: 'billing.json',
    component: BillingComponent
  }
];
