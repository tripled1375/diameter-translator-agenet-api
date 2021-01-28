import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - DirectDebtEventResultCode
 * The result of the direct debt event request.
 */
@model({name: 'DirectDebtEventResultCode'})
export class DirectDebtEventResultCode {
  constructor(data?: Partial<DirectDebtEventResultCode>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The result of the direct debt event request.
   */
  @property({required: true, jsonSchema: {
  description: 'The result of the direct debt event request.',
  enum: [
    'SUCCESS',
    'FAILED',
  ],
  type: 'string',
}})
  result: 'SUCCESS' | 'FAILED';

}

export interface DirectDebtEventResultCodeRelations {
  // describe navigational properties here
}

export type DirectDebtEventResultCodeWithRelations = DirectDebtEventResultCode & DirectDebtEventResultCodeRelations;


