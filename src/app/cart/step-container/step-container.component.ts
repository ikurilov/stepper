import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultStepComponent } from '../default-step/default-step.component';
import { IStepConfig, StepsService } from '../steps.service';

@Component({
  selector: 'app-step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.scss']
})
export class StepContainerComponent implements OnInit {

  @ViewChild('stepContent', {read: ViewContainerRef}) stepContentViewContainer: ViewContainerRef;
  stepConfig: IStepConfig;

  constructor(private cfr: ComponentFactoryResolver, private cdr: ChangeDetectorRef, private route: ActivatedRoute, private stepsService: StepsService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { step: IStepConfig }) => {
      this.stepConfig = data.step;
      console.log(this.stepConfig);
      this.loadComponent();
    });
  }

  loadComponent() {
    const componentFactory = this.cfr.resolveComponentFactory(this.stepConfig.component || DefaultStepComponent);
    this.stepContentViewContainer.clear();
    const componentRef = this.stepContentViewContainer.createComponent(componentFactory);
    /*TODO not any*/
    const componentInstance = <any>componentRef.instance;
    componentInstance.header = this.stepConfig.header;
    componentInstance.fields = this.stepConfig.formConfig.fields;
    componentInstance.fg = this.stepsService.form.get(this.stepConfig.id);
    this.cdr.detectChanges(); // to prevent 'ExpressionChangedAfterItHasBeenCheckedError' on form controls
  }
}
