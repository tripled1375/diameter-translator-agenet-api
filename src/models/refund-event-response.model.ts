import {model, property} from '@loopback/repository';
import {ResponseHeader} from './response-header.model';
import {RefundEventResultCode} from './refund-event-result-code.model';
import {CreditId} from './credit-id.model';

/**
 * The model class is generated from OpenAPI schema - RefundEventResponse
 * This is the response message for the refund-event operation.
 */
@model({name: 'RefundEventResponse'})
export class RefundEventResponse {
  constructor(data?: Partial<RefundEventResponse>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * This is the message header for the response SLA http body.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/ResponseHeader',
}})
  responseHeader: ResponseHeader;

  /**
   * The result of the refund event request.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/RefundEventResultCode',
}})
  result: RefundEventResultCode;

  /**
   * The creditId from a successful refund event.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/CreditId',
}})
  creditId: CreditId;

}

export interface RefundEventResponseRelations {
  // describe navigational properties here
}

export type RefundEventResponseWithRelations = RefundEventResponse & RefundEventResponseRelations;


