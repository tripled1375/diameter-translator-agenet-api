import {model, property} from '@loopback/repository';
import {RequestHeader} from './request-header.model';
import {Mdn} from './mdn.model';
import {Amount} from './amount.model';
import {ChargeId} from './charge-id.model';
import {Description} from './description.model';
import {AccountId} from './account-id.model';

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
  $ref: '#/components/schemas/Mdn',
}})
  mdn: Mdn;

  /**
   * The amount to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/Amount',
}})
  amount: Amount;

  /**
   * The chargeId from a successful direct debt event.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/ChargeId',
}})
  chargeId: ChargeId;

  /**
   * The description of the charge/refund.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/Description',
}})
  description: Description;

  /**
   * The TOPS BA ID for this mdn.
   */
  @property({jsonSchema: {
  $ref: '#/components/schemas/AccountId',
}})
  accountId?: AccountId;

}

export interface RefundEventRequestRelations {
  // describe navigational properties here
}

export type RefundEventRequestWithRelations = RefundEventRequest & RefundEventRequestRelations;


