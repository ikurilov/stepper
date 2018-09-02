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
            customControl: SelectPlanControlWrapperComponent
          }
        ]
      }
    ),
  },
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
