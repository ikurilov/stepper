import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormOptions } from './form-options.model';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor(private fb: FormBuilder) {
  }

  convertToFormGroup(options: IFormOptions): FormGroup {
    const formGroupConfig = <any>{};

    options.fields.forEach(field => {
      const formControlName = field.id;
      const formControlConfig: any[] = [''];
      if (field.validators) {
        const validators = this.getValidators(field.validators);
        if (validators) {
          formControlConfig.push(validators);
        }
      }
      formGroupConfig[formControlName] = formControlConfig;
    });

    console.log(formGroupConfig);
    return this.fb.group(formGroupConfig);
  }

  private getValidators(validators: { [key: string]: any }[]) {
    const validatorsConfig = validators.map(validator => {
      const keys = Object.keys(validator).filter(k => validator.hasOwnProperty(k));
      const validatorName = keys ? keys[0] : null;
      switch (validatorName) {
        case 'pattern': {
          return Validators.pattern(validator[validatorName]);
        }
        default: {
          return null;
        }
      }
    });
    if (validatorsConfig && validatorsConfig.length) {
      return Validators.compose(validatorsConfig.filter(v => v !== null));
    }
  }
}
