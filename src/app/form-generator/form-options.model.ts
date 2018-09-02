export interface IFormOptions {
  fields: IFormControlOptions[];
}

export interface IFormControlOptions {
  id: string;
  title?: string;
  type?: string;
  validators?: any[];
  items?: ISelectItem[];
  data?: any;
}

export interface ISelectItem {
  id: number;
  title: string;
}
