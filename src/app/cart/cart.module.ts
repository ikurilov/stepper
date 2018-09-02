import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormGeneratorModule } from '../form-generator/form-generator.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { StepWrapperComponent } from './step-wrapper/step-wrapper.component';
import { DefaultStepComponent } from './default-step/default-step.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepContainerComponent } from './step-container/step-container.component';
import { StepResolverService } from './resolvers/step-resolver.service';
import { StepsService } from './steps.service';
import { CartResolverService } from './resolvers/cart-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { CartSharedModule } from './cart-shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartSharedModule,
    CartRoutingModule,
    FormGeneratorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    CartComponent,
    DefaultStepComponent,
    TabsComponent,
    StepContainerComponent
  ],
  entryComponents: [
    DefaultStepComponent,
  ],
  providers: [
    StepResolverService,
    StepsService,
    CartResolverService,
  ],
  exports: [
    StepWrapperComponent
  ]
})
export class CartModule {
}
