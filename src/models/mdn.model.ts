import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Mdn
 * The MDN to be charged/refunded.
 */
@model({name: 'Mdn'})
export class Mdn {
  constructor(data?: Partial<Mdn>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The MDN to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
  description: 'The MDN to be charged/refunded.',
  type: 'string',
}})
  mdn: string;

}

export interface MdnRelations {
  // describe navigational properties here
}

export type MdnWithRelations = Mdn & MdnRelations;


