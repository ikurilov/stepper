import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGeneratorService } from './form-generator.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [
    FormControlComponent,
    FormGroupComponent
  ],
  providers: [
    FormGeneratorService
  ],
  exports: [
    FormGroupComponent
  ]
})
export class FormGeneratorModule {
}
