import {model, property} from '@loopback/repository';
import {ResponseTimestamp} from './filedModels/response-timestamp.model';

/**
 * The model class is generated from OpenAPI schema - ResponseHeader
 * This is the message header for the response SLA http body.
 */
@model({name: 'ResponseHeader'})
export class ResponseHeader {
  constructor(data?: Partial<ResponseHeader>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Timestamp of this request represented as milliseconds since epoch. The
receiver should verify that this timestamp is +/- 60s of 'now'. This request
timestamp is not idempotent upon retries.
   */
  @property({required: true, jsonSchema: {
    description: "Timestamp of this request represented as milliseconds since epoch. The receiver should verify that this timestamp is +/- 60s of 'now'. This request timestamp is not idempotent upon retries.",
    type: 'number',
  }})
    responseTimestamp: number;

}

export interface ResponseHeaderRelations {
  // describe navigational properties here
}

export type ResponseHeaderWithRelations = ResponseHeader & ResponseHeaderRelations;


