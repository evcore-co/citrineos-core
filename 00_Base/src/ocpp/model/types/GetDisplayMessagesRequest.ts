// Copyright 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import { MessagePriorityEnumType, MessageStateEnumType } from '../enums';
import { OcppRequest } from '../../..';

export interface GetDisplayMessagesRequest extends OcppRequest {
  customData?: CustomDataType;
  /**
   * If provided the Charging Station shall return Display Messages of the given ids. This field SHALL NOT contain more ids than set in &lt;&lt;configkey-number-of-display-messages,NumberOfDisplayMessages.maxLimit&gt;&gt;
   *
   *
   *
   * @minItems 1
   */
  id?: [number, ...number[]];
  /**
   * The Id of this request.
   *
   */
  requestId: number;
  priority?: MessagePriorityEnumType;
  state?: MessageStateEnumType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
