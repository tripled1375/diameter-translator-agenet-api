import {model, property} from '@loopback/repository';
import {ResponseHeader} from './response-header.model';
import {DirectDebtEventResultCode} from './direct-debt-event-result-code.model';
import {ChargeId} from './charge-id.model';

/**
 * The model class is generated from OpenAPI schema - DirectDebtEventResponse
 * This is the response message for the direct-debt-event operation.
 */
@model({name: 'DirectDebtEventResponse'})
export class DirectDebtEventResponse {
  constructor(data?: Partial<DirectDebtEventResponse>) {
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
   * The result of the direct debt event request.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/DirectDebtEventResultCode',
}})
  result: DirectDebtEventResultCode;

  /**
   * The chargeId from a successful direct debt event.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/ChargeId',
}})
  chargeId: ChargeId;

}

export interface DirectDebtEventResponseRelations {
  // describe navigational properties here
}

export type DirectDebtEventResponseWithRelations = DirectDebtEventResponse & DirectDebtEventResponseRelations;


