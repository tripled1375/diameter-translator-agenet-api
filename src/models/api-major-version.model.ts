import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ApiMajorVersion
 * Major version. This is marked for compatibility requests with different
versions are not guaranteed to be compatible.
 */
@model({name: 'ApiMajorVersion'})
export class ApiMajorVersion {
  constructor(data?: Partial<ApiMajorVersion>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

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

export interface ApiMajorVersionRelations {
  // describe navigational properties here
}

export type ApiMajorVersionWithRelations = ApiMajorVersion & ApiMajorVersionRelations;


