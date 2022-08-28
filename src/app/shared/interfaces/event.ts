import { ImageProps } from './slider';

export interface IEvent {
  displayField: string;
  fields: IEventFields;
  sys: {
    id: number;
  };
}

export interface IEventFields {
  eventDescription: string;
  eventImages: ImageProps[];
  eventTitle: string;
}
