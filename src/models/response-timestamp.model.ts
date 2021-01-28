import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ResponseTimestamp
 * Timestamp of this request represented as milliseconds since epoch. The
receiver should verify that this timestamp is +/- 60s of 'now'. This request
timestamp is not idempotent upon retries.
 */
@model({name: 'ResponseTimestamp'})
export class ResponseTimestamp {
  constructor(data?: Partial<ResponseTimestamp>) {
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

export interface ResponseTimestampRelations {
  // describe navigational properties here
}

export type ResponseTimestampWithRelations = ResponseTimestamp & ResponseTimestampRelations;


