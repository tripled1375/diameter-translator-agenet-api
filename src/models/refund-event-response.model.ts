import {model, property} from '@loopback/repository';
import {ResponseHeader} from './response-header.model';
import {RefundEventResultCode} from '../utils/refund-event-result-code.model';


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
  @property({required: true,
    jsonSchema: {
      description: 'Result Code',
      RefundEventResultCode,
      $ref: '#/components/schemas/RefundEventResultCode',
}})
  result: RefundEventResultCode;

  /**
   * **REQUIRED** The creditId from a successful refund event.
   */
  @property({required: true, jsonSchema: {
    description: '**REQUIRED** The creditId from a successful refund event.',
    type: 'string',
  }})
    creditId: string;

}

export interface RefundEventResponseRelations {
  // describe navigational properties here
}

export type RefundEventResponseWithRelations = RefundEventResponse & RefundEventResponseRelations;


