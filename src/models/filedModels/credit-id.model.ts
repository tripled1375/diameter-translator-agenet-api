import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - CreditId
 * The creditId from a successful refund event.
 */
@model({name: 'CreditId'})
export class CreditId {
  constructor(data?: Partial<CreditId>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * **REQUIRED** The creditId from a successful refund event.
   */
  @property({required: true, jsonSchema: {
  description: '**REQUIRED** The creditId from a successful refund event.',
  type: 'string',
}})
  chargeId: string;

}

export interface CreditIdRelations {
  // describe navigational properties here
}

export type CreditIdWithRelations = CreditId & CreditIdRelations;


