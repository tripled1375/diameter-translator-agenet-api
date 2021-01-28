import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ChargeId
 * The chargeId from a successful direct debt event.
 */
@model({name: 'ChargeId'})
export class ChargeId {
  constructor(data?: Partial<ChargeId>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The chargeId from a successful direct debt event.
   */
  @property({required: true, jsonSchema: {
  description: 'The chargeId from a successful direct debt event.',
  type: 'string',
}})
  chargeId: string;

}

export interface ChargeIdRelations {
  // describe navigational properties here
}

export type ChargeIdWithRelations = ChargeId & ChargeIdRelations;


