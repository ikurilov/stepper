import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FormGeneratorService } from '../form-generator/form-generator.service';
import { IFormOptions } from '../form-generator/form-options.model';
import { of } from 'rxjs';

export type IFormConfigMapper = (data: any) => IFormOptions;

export interface IStepConfig {
  id: string;
  title: string;
  header?: string;
  formConfigUrl: string;
  formConfigMapper?: IFormConfigMapper;
  formConfig?: IFormOptions;
  component?: any;
}


@Injectable()
export class StepsService {
  private steps: IStepConfig[];
  private currentStep: IStepConfig;

  form = new FormGroup({});

  constructor(private http: HttpClient, private formGenerator: FormGeneratorService) {
  }

  getCurrentStep() {
    return this.currentStep;
  }

  getNextStep() {
    const currentStepIdx = this.steps.findIndex(step => step.id === this.currentStep.id);
    if (currentStepIdx < this.steps.length - 1) {
      return this.steps[currentStepIdx + 1];
    } else {
      return null;
    }
  }

  getStep(id: string) {
    return this.steps.find(step => step.id === id);
  }

  setCurrentStep(step: IStepConfig) {
    this.currentStep = step;
  }

  getSteps() {
    return this.steps;
  }

  setSteps(steps: IStepConfig[]) {
    this.steps = steps;
  }

  isLastStep(step: IStepConfig) {
    return this.steps.findIndex(s => s.id === step.id) === this.steps.length - 1;
  }

  addStepFormGroup(step: IStepConfig, formConfig: IFormOptions) {
    const formGroup = this.formGenerator.convertToFormGroup(formConfig);
    this.form.addControl(step.id, formGroup);
  }

  /**
   * Returns observable of form config from assets
   * @param step
   */
  getStepFormConfig(step: IStepConfig) {
    if (!this.form.get(step.id)) {
      return this.http.get('assets/' + step.formConfigUrl).pipe(
        map((config: any) => {
          let formConfig: IFormOptions = config;
          if (step.formConfigMapper) {
            // json config structure differs from IFormOptions interface
            formConfig = step.formConfigMapper(config);
          }
          this.addStepFormGroup(step, formConfig);
          step.formConfig = formConfig;
          return step;
        })
      );
    } else {
      return of(step);
    }
  }

  /**
   * checks validity of previous steps
   * @param step
   */
  canNavigateToStep(step: IStepConfig) {
    const stepIdx = this.steps.findIndex(s => s.id === step.id);
    if (stepIdx === 0) {
      return true;
    } else {
      let prevStepsValid = true;
      for (let i = 0; i < stepIdx; i++) {
        const stepForm = this.form.get(this.steps[i].id);
        if (!stepForm || !stepForm.valid) {
          prevStepsValid = false;
          break;
        }
      }
      return prevStepsValid;
    }
  }
}
