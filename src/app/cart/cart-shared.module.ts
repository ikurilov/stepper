import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepWrapperComponent } from './step-wrapper/step-wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StepWrapperComponent
  ],
  exports: [
    StepWrapperComponent
  ]
})
export class CartSharedModule {
}
