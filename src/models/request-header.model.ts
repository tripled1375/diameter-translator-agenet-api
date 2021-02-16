import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - RequestHeader
 * This is the message header for the request SLA http body.
 */
@model({name: 'RequestHeader'})
export class RequestHeader {
  constructor(data?: Partial<RequestHeader>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Unique identifier of this request. This is a string that has a max length of
100 characters, and contains only the characters \"a-z\", \"A-Z\", \"0-9\",
\":\", \"-\", and \"_\".
   */
  @property({required: true, jsonSchema: {
    description: 'Unique identifier of this request. This is a string that has a max length of 100 characters, and contains only the characters \\"a-z\\", \\"A-Z\\", \\"0-9\\", \\":\\", \\"-\\", and \\"_\\".',
    type: 'string',
  }})
    requestId: string;

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

  /**
   * Major version. This is marked for compatibility requests with different
versions are not guaranteed to be compatible.
   */
  @property({required: true, jsonSchema: {
    description: 'Major version. This is marked for compatibility requests with different versions are not guaranteed to be compatible.',
    type: 'number',
  }})
    apiMajorVersion: number;

}

export interface RequestHeaderRelations {
  // describe navigational properties here
}

export type RequestHeaderWithRelations = RequestHeader & RequestHeaderRelations;


