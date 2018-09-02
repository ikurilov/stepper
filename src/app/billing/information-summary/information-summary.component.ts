import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-information-summary',
  templateUrl: './information-summary.component.html',
  styleUrls: ['./information-summary.component.css']
})
export class InformationSummaryComponent implements OnChanges {
  @Input() information;
  infoFormatted;

  constructor() {
  }

  ngOnChanges() {
    if (this.information) {
      this.infoFormatted = this.formatInformation(this.information);
    }
  }

  formatInformation(information) {
    const info = [];
    const keys = ['firstname', 'lastname', 'email', 'phone'];
    keys.forEach(key => {
      const value = information[key];
      if (value) {
        info.push(value);
      }
    });
    return info.join(', ');
  }
}
