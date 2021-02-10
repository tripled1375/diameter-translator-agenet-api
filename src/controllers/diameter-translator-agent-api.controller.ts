import {api, operation, param, requestBody} from '@loopback/rest';
import {DirectDebtEventRequest} from '../models/direct-debt-event-request.model';
import {DirectDebtEventResponse} from '../models/direct-debt-event-response.model';
import {RefundEventRequest} from '../models/refund-event-request.model';
import {RefundEventResponse} from '../models/refund-event-response.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by diameter_translator_agent_api.
 *
 */
@api({
  components: {
    schemas: {
      Amount: {
        description: 'The amount to be charged/refunded.',
        required: [
          'amount',
        ],
        properties: {
          amount: {
            description: 'The amount to be charged/refunded.',
            type: 'string',
          },
        },
        example: '{\n    "amount": "100.12"\n}',
      },
      AccountId: {
        description: 'The TOPS BA ID for this mdn.',
        required: [],
        properties: {
          accountId: {
            description: 'The TOPS BA ID for this mdn.',
            type: 'string',
          },
        },
        example: '{\n    "accountId": "<TOPS_BAID>"\n}',
      },
      Description: {
        description: 'The description of the charge/refund.',
        required: [
          'description',
        ],
        properties: {
          description: {
            description: 'The description of the charge/refund.',
            type: 'string',
          },
        },
        example: '{\n    "description": "some text about the charge or refund."\n}',
      },
      ApiMajorVersion: {
        description: 'Major version. This is marked for compatibility requests with different versions are not guaranteed to be compatible.',
        required: [
          'apiMajorVersion',
        ],
        properties: {
          apiMajorVersion: {
            description: 'Major version. This is marked for compatibility requests with different versions are not guaranteed to be compatible.',
            type: 'number',
          },
        },
        example: '{\n    "apiMajorVersion": 1\n}',
      },
      DirectDebtEventResultCode: {
        description: 'The result of the direct debt event request.',
        required: [
          'result',
        ],
        properties: {
          result: {
            description: 'The result of the direct debt event request.',
            enum: [
              'SUCCESS',
              'FAILED',
            ],
            type: 'string',
          },
        },
        example: '{\n    "result": "some result"\n}',
      },
      DirectDebtEventRequest: {
        description: 'This is the request message for the direct-debt-event operation.',
        required: [
          'requestHeader',
          'mdn',
          'amount',
          'description',
        ],
        properties: {
          requestHeader: {
            $ref: '#/components/schemas/RequestHeader',
          },
          mdn: {
            $ref: '#/components/schemas/Mdn',
          },
          amount: {
            $ref: '#/components/schemas/Amount',
          },
          description: {
            $ref: '#/components/schemas/Description',
          },
        },
        example: '{\n    "requestHeader": {\n        "requestId": 95.92,\n        "requestTimestamp": 50.01,\n        "apiMajorVersion": "some text"\n    },\n    "mdn": "some text",\n    "amount": "some text",\n    "description": "some text about the charge or refund."\n}',
      },
      ChargeId: {
        description: 'The chargeId from a successful direct debt event.',
        required: [
          'chargeId',
        ],
        properties: {
          chargeId: {
            description: 'The chargeId from a successful direct debt event.',
            type: 'string',
          },
        },
        example: '{\n    "chargeId": "UUID"\n}',
      },
      CreditId: {
        description: 'The creditId from a successful refund event.',
        required: [
          'creditId',
          'chargeId',
        ],
        properties: {
          chargeId: {
            description: '**REQUIRED** The creditId from a successful refund event.',
            type: 'string',
          },
        },
        example: '{\n    "creditId": "UUID"\n}',
      },
      RefundEventRequest: {
        description: 'The result of the direct debt event request.',
        required: [
          'requestHeader',
          'mdn',
          'chargeId',
          'amount',
          'description'
        ],
        properties: {
          requestHeader: {
            $ref: '#/components/schemas/RequestHeader',
          },
          mdn: {
            $ref: '#/components/schemas/Mdn',
          },
          amount: {
            $ref: '#/components/schemas/Amount',
          },
          chargeId: {
            $ref: '#/components/schemas/ChargeId',
          },
          description: {
            $ref: '#/components/schemas/Description',
          },
          accountId: {
            $ref: '#/components/schemas/AccountId',
          },
        },
        example: '{\n    "requestHeader": {\n        "requestId": 95.92,\n        "requestTimestamp": 50.01,\n        "apiMajorVersion": "some text"\n    },\n    "mdn": "some text",\n    "accountId": "<TOPS_BAID>",\n    "chargeId": "UUID",\n    "amount": "some text",\n    "description": "some text about the charge or refund."\n}',
      },
      DirectDebtEventResponse: {
        description: 'This is the response message for the direct-debt-event operation.',
        required: [
          'responseHeader',
          'result',
          'chargeId',
        ],
        properties: {
          responseHeader: {
            $ref: '#/components/schemas/ResponseHeader',
          },
          result: {
            $ref: '#/components/schemas/DirectDebtEventResultCode',
          },
          chargeId: {
            $ref: '#/components/schemas/ChargeId',
          },
        },
        example: '{\n    "responseHeader": {\n        "requestTimestamp": 50.01\n    },\n   "result": "some text",\n   "chargeId": "UUID"\n}',
      },
      RefundEventResponse: {
        description: 'This is the response message for the refund-event operation.',
        required: [
          'responseHeader',
          'result',
          'chargeId',
          'creditId',
        ],
        properties: {
          responseHeader: {
            $ref: '#/components/schemas/ResponseHeader',
          },
          result: {
            $ref: '#/components/schemas/RefundEventResultCode',
          },
          creditId: {
            $ref: '#/components/schemas/CreditId',
          },
        },
        example: '{\n    "responseHeader": {\n        "requestTimestamp": 50.01\n    },\n   "result": "some text",\n   "creditId": "UUID"\n}',
      },
      RefundEventResultCode: {
        description: 'The result of the refund event request.',
        required: [
          'result',
        ],
        properties: {
          result: {
            description: 'The result of the refund event request.',
            enum: [
              'SUCCESS',
              'FAILED',
            ],
            type: 'string',
          },
        },
        example: '{\n    "result": "some result"\n}',
      },
      RequestHeader: {
        title: 'Root Type for RequestHeader',
        description: 'This is the message header for the request SLA http body.',
        required: [
          'requestId',
          'requestTimestamp',
          'apiMajorVersion',
        ],
        type: 'object',
        properties: {
          requestId: {
            $ref: '#/components/schemas/RequestId',
          },
          requestTimestamp: {
            $ref: '#/components/schemas/RequestTimestamp',
          },
          apiMajorVersion: {
            $ref: '#/components/schemas/ApiMajorVersion',
          },
        },
        example: '{\n    "requestId": "string",\n    "requestTimestamp":  "number",\n    "apiMajorVersion": "number"\n}',
      },
      RequestId: {
        description: 'Unique identifier of this request. This is a string that has a max length of 100 characters, and contains only the characters \\"a-z\\", \\"A-Z\\", \\"0-9\\", \\":\\", \\"-\\", and \\"_\\".',
        required: [
          'requestId',
        ],
        properties: {
          requestId: {
            description: 'Unique identifier of this request. This is a string that has a max length of 100 characters, and contains only the characters \\"a-z\\", \\"A-Z\\", \\"0-9\\", \\":\\", \\"-\\", and \\"_\\".',
            type: 'string',
          },
        },
        example: '{\n    "requestId": "UUID"\n}',
      },
      RequestTimestamp: {
        description: "Timestamp of this request represented as milliseconds since epoch. The receiver should verify that this timestamp is +/- 60s of 'now'. This request timestamp is not idempotent upon retries.",
        required: [
          'requestTimestamp',
        ],
        properties: {
          requestTimestamp: {
            description: "Timestamp of this request represented as milliseconds since epoch. The receiver should verify that this timestamp is +/- 60s of 'now'. This request timestamp is not idempotent upon retries.",
            type: 'number',
          },
        },
        example: '{\n    "requestTimestamp": 0000000000\n}',
      },
      ResponseHeader: {
        title: 'Root Type for RequestHeader',
        description: 'This is the message header for the response SLA http body.',
        required: [
          'requestId',
          'apiMajorVersion',
          'requestTimestamp',
          'responseTimestamp',
        ],
        type: 'object',
        properties: {
          responseTimestamp: {
            $ref: '#/components/schemas/ResponseTimestamp',
          },
        },
        example: '{\n    "responseTimestamp":  0000000000\n}',
      },
      ResponseTimestamp: {
        description: "Timestamp of this request represented as milliseconds since epoch. The receiver should verify that this timestamp is +/- 60s of 'now'. This request timestamp is not idempotent upon retries.",
        required: [
          'requestTimestamp',
          'responseTimestamp',
        ],
        properties: {
          responseTimestamp: {
            description: "Timestamp of this request represented as milliseconds since epoch. The receiver should verify that this timestamp is +/- 60s of 'now'. This request timestamp is not idempotent upon retries.",
            type: 'number',
          },
        },
        example: '{\n    "responseTimestamp": 0000000000\n}',
      },
      Mdn: {
        description: 'The MDN to be charged/refunded.',
        required: [
          'mdn',
        ],
        properties: {
          mdn: {
            description: 'The MDN to be charged/refunded.',
            type: 'string',
          },
        },
        example: '{\n    "mdn": "string"\n}',
      },
    },
  },
  paths: {},
})
export class DiameterTranslatorAgentApiController {
  constructor() {}

  /**
   * Create a new charge against a mdn.
   *
   * @param _requestBody
   * @returns The result of the request.
   */
  @operation('post', '/v1/direct-debt-event', {
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/DirectDebtEventRequest',
        },
      },
    },
  },
  tags: [
    'diameter_translator_agent_api',
  ],
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/DirectDebtEventResponse',
          },
        },
      },
      description: 'The result of the request.',
    },
  },
  operationId: 'DirectDebtEvent',
  summary: 'MDN Charge',
  description: 'Create a new charge against a mdn.',
})
  async directDebtEvent(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/DirectDebtEventRequest',
      },
    },
  },
}) _requestBody: DirectDebtEventRequest): Promise<DirectDebtEventResponse> {
    throw new Error('Not implemented');
  }

  /**
   * Create a new credit for a mdn.
   *
   * @param _requestBody
   * @returns The result of the request.
   */
  @operation('post', '/v1/refund-event', {
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/RefundEventRequest',
        },
      },
    },
  },
  tags: [
    'diameter_translator_agent_api',
  ],
  responses: {
    '200': {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RefundEventResponse',
          },
        },
      },
      description: 'The result of the request.',
    },
  },
  operationId: 'RefundEvent',
  summary: 'MDN Credit',
  description: 'Create a new credit for a mdn.',
})
  async refundEvent(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/RefundEventRequest',
      },
    },
  },
}) _requestBody: RefundEventRequest): Promise<RefundEventResponse> {
    throw new Error('Not implemented');
  }

}

