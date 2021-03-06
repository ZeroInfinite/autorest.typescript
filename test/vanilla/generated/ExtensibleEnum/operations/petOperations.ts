/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/petOperationsMappers";
import * as Parameters from "../models/parameters";
import { PetStoreIncContext } from "../petStoreIncContext";

/** Class representing a PetOperations. */
export class PetOperations {
  private readonly client: PetStoreIncContext;

  /**
   * Create a PetOperations.
   * @param {PetStoreIncContext} client Reference to the service client.
   */
  constructor(client: PetStoreIncContext) {
    this.client = client;
  }

  /**
   * @param petId Pet id
   * @param [options] The optional parameters
   * @returns Promise<Models.PetGetByPetIdResponse>
   */
  getByPetId(petId: string, options?: msRest.RequestOptionsBase): Promise<Models.PetGetByPetIdResponse>;
  /**
   * @param petId Pet id
   * @param callback The callback
   */
  getByPetId(petId: string, callback: msRest.ServiceCallback<Models.Pet>): void;
  /**
   * @param petId Pet id
   * @param options The optional parameters
   * @param callback The callback
   */
  getByPetId(petId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pet>): void;
  getByPetId(petId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Pet>): Promise<Models.PetGetByPetIdResponse> {
    return this.client.sendOperationRequest(
      {
        petId,
        options
      },
      getByPetIdOperationSpec,
      callback) as Promise<Models.PetGetByPetIdResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.PetAddPetResponse>
   */
  addPet(options?: Models.PetAddPetOptionalParams): Promise<Models.PetAddPetResponse>;
  /**
   * @param callback The callback
   */
  addPet(callback: msRest.ServiceCallback<Models.Pet>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  addPet(options: Models.PetAddPetOptionalParams, callback: msRest.ServiceCallback<Models.Pet>): void;
  addPet(options?: Models.PetAddPetOptionalParams, callback?: msRest.ServiceCallback<Models.Pet>): Promise<Models.PetAddPetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      addPetOperationSpec,
      callback) as Promise<Models.PetAddPetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByPetIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "extensibleenums/pet/{petId}",
  urlParameters: [
    Parameters.petId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    },
    default: {}
  },
  serializer
};

const addPetOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "extensibleenums/pet/addPet",
  requestBody: {
    parameterPath: [
      "options",
      "petParam"
    ],
    mapper: Mappers.Pet
  },
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    },
    default: {}
  },
  serializer
};
