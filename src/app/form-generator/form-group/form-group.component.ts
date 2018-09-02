import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { groupBy as _groupBy } from 'lodash';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  @Input() fields: any[];
  @Input() fg: FormGroup;
  rows: any[][] = [];

  constructor() {
  }

  ngOnInit() {
    console.log(this.fields);
    const rowsMap = _groupBy(this.fields, field => field.row);
    for (const row in rowsMap) {
      if (rowsMap.hasOwnProperty(row)) {
        this.rows.push(rowsMap[row]);
      }
    }
  }
}
