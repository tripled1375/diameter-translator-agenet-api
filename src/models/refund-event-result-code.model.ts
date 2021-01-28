import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - RefundEventResultCode
 * The result of the refund event request.
 */
@model({name: 'RefundEventResultCode'})
export class RefundEventResultCode {
  constructor(data?: Partial<RefundEventResultCode>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The result of the refund event request.
   */
  @property({required: true, jsonSchema: {
  description: 'The result of the refund event request.',
  enum: [
    'SUCCESS',
    'FAILED',
  ],
  type: 'string',
}})
  result: 'SUCCESS' | 'FAILED';

}

export interface RefundEventResultCodeRelations {
  // describe navigational properties here
}

export type RefundEventResultCodeWithRelations = RefundEventResultCode & RefundEventResultCodeRelations;


