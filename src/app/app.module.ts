import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectPlanControlComponent } from './select-plan-control/select-plan-control.component';
import { SelectPlanControlWrapperComponent } from './select-plan-control-wrapper/select-plan-control-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import { FormGeneratorModule } from './form-generator/form-generator.module';
import { CartSharedModule } from './cart/cart-shared.module';
import { PlanSummaryComponent } from './billing/plan-summary/plan-summary.component';
import { InformationSummaryComponent } from './billing/information-summary/information-summary.component';
import { SummaryComponent } from './billing/summary/summary.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CartSharedModule,
    FormGeneratorModule
  ],
  declarations: [
    AppComponent,
    SelectPlanControlComponent,
    SelectPlanControlWrapperComponent,
    BillingComponent,
    PlanSummaryComponent,
    InformationSummaryComponent,
    SummaryComponent
  ],
  entryComponents: [
    SelectPlanControlWrapperComponent,
    BillingComponent
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
