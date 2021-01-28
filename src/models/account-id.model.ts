import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - AccountId
 * The TOPS BA ID for this mdn.
 */
@model({name: 'AccountId'})
export class AccountId {
  constructor(data?: Partial<AccountId>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The TOPS BA ID for this mdn.
   */
  @property({required: true, jsonSchema: {
  description: 'The TOPS BA ID for this mdn.',
  type: 'string',
}})
  accountId: string;

}

export interface AccountIdRelations {
  // describe navigational properties here
}

export type AccountIdWithRelations = AccountId & AccountIdRelations;


