import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() options;
  @Input() fg: FormGroup;
  @ViewChild('customControl', {read: ViewContainerRef}) customControlViewContainer: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.options.customControl) {
      this.loadComponent();
    }
  }

  loadComponent() {
    const componentFactory = this.cfr.resolveComponentFactory(this.options.customControl);
    const componentRef = this.customControlViewContainer.createComponent(componentFactory);
    /*TODO no any*/
    const componentInstance = <any>componentRef.instance;
    componentInstance.data = this.options.data;
    componentInstance.fg = this.fg;
    componentInstance.name = this.options.id;
  }
}
