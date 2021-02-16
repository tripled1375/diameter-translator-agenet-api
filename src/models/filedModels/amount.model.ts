import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Amount
 * The amount to be charged/refunded.
 */
@model({name: 'Amount'})
export class Amount {
  constructor(data?: Partial<Amount>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The amount to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
  description: 'The amount to be charged/refunded.',
  type: 'string',
}})
  amount: string;

}

export interface AmountRelations {
  // describe navigational properties here
}

export type AmountWithRelations = Amount & AmountRelations;


