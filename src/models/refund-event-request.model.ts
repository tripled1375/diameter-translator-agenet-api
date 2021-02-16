import {model, property} from '@loopback/repository';
import {RequestHeader} from './request-header.model';
import {Mdn} from './filedModels/mdn.model';
import {Amount} from './filedModels/amount.model';
import {ChargeId} from './filedModels/charge-id.model';
import {Description} from './filedModels/description.model';
import {AccountId} from './filedModels/account-id.model';

/**
 * The model class is generated from OpenAPI schema - RefundEventRequest
 * The result of the direct debt event request.
 */
@model({name: 'RefundEventRequest'})
export class RefundEventRequest {
  constructor(data?: Partial<RefundEventRequest>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * This is the message header for the request SLA http body.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/RequestHeader',
}})
  requestHeader: RequestHeader;

  /**
   * The MDN to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
    description: 'The MDN to be charged/refunded.',
    type: 'string',
  }})
    mdn: string;
  /**
   * The amount to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
    description: 'The amount to be charged/refunded.',
    type: 'string',
  }})
    amount: string;

  /**
   * The chargeId from a successful direct debt event.
   */
  @property({required: true, jsonSchema: {
    description: 'The chargeId from a successful direct debt event.',
    type: 'string',
  }})
    chargeId: string;

  /**
   * The description of the charge/refund.
   */
  @property({required: true, jsonSchema: {
    description: 'The description of the charge/refund.',
    type: 'string',
  }})
    description: string;

  /**
   * The TOPS BA ID for this mdn.
   */
  @property({jsonSchema: {
    description: 'The TOPS BA ID for this mdn.',
    type: 'string',
  }})
    accountId?: string;

}

export interface RefundEventRequestRelations {
  // describe navigational properties here
}

export type RefundEventRequestWithRelations = RefundEventRequest & RefundEventRequestRelations;


