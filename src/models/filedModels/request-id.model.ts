import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - RequestId
 * Unique identifier of this request. This is a string that has a max length of
100 characters, and contains only the characters \"a-z\", \"A-Z\", \"0-9\",
\":\", \"-\", and \"_\".
 */
@model({name: 'RequestId'})
export class RequestId {
  constructor(data?: Partial<RequestId>) {
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

}

export interface RequestIdRelations {
  // describe navigational properties here
}

export type RequestIdWithRelations = RequestId & RequestIdRelations;


