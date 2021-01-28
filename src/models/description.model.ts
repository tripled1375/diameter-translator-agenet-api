import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Description
 * The description of the charge/refund.
 */
@model({name: 'Description'})
export class Description {
  constructor(data?: Partial<Description>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The description of the charge/refund.
   */
  @property({required: true, jsonSchema: {
  description: 'The description of the charge/refund.',
  type: 'string',
}})
  description: string;

}

export interface DescriptionRelations {
  // describe navigational properties here
}

export type DescriptionWithRelations = Description & DescriptionRelations;


