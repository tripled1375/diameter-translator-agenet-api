import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - RequestTimestamp
 * Timestamp of this request represented as milliseconds since epoch. The
receiver should verify that this timestamp is +/- 60s of 'now'. This request
timestamp is not idempotent upon retries.
 */
@model({name: 'RequestTimestamp'})
export class RequestTimestamp {
  constructor(data?: Partial<RequestTimestamp>) {
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
  requestTimestamp: number;

}

export interface RequestTimestampRelations {
  // describe navigational properties here
}

export type RequestTimestampWithRelations = RequestTimestamp & RequestTimestampRelations;


