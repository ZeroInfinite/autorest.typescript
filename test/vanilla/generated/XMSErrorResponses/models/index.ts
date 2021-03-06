/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import * as msRest from "ms-rest-js";


/**
 * @interface
 * An interface representing Animal.
 */
export interface Animal {
  /**
   * @member {string} [aniType]
   */
  aniType?: string;
}

/**
 * @interface
 * An interface representing Pet.
 * @extends Animal
 */
export interface Pet extends Animal {
  /**
   * @member {string} [name] Gets the Pet by id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
}

/**
 * @interface
 * An interface representing BaseError.
 */
export interface BaseError {
  /**
   * @member {string} [someBaseProp]
   */
  someBaseProp?: string;
}

/**
 * Contains the possible cases for NotFoundErrorBase.
 */
export type NotFoundErrorBaseUnion = NotFoundErrorBase | LinkNotFound | AnimalNotFound;

/**
 * @interface
 * An interface representing NotFoundErrorBase.
 */
export interface NotFoundErrorBase {
  /**
   * @member {string} whatNotFound Polymorphic Discriminator
   */
  whatNotFound: "NotFoundErrorBase";
  /**
   * @member {string} [someBaseProp]
   */
  someBaseProp?: string;
  /**
   * @member {string} [reason]
   */
  reason?: string;
}

/**
 * @interface
 * An interface representing LinkNotFound.
 */
export interface LinkNotFound {
  /**
   * @member {string} whatNotFound Polymorphic Discriminator
   */
  whatNotFound: "InvalidResourceLink";
  /**
   * @member {string} [someBaseProp]
   */
  someBaseProp?: string;
  /**
   * @member {string} [reason]
   */
  reason?: string;
  /**
   * @member {string} [whatSubAddress]
   */
  whatSubAddress?: string;
}

/**
 * @interface
 * An interface representing AnimalNotFound.
 */
export interface AnimalNotFound {
  /**
   * @member {string} whatNotFound Polymorphic Discriminator
   */
  whatNotFound: "AnimalNotFound";
  /**
   * @member {string} [someBaseProp]
   */
  someBaseProp?: string;
  /**
   * @member {string} [reason]
   */
  reason?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing PetAction.
 */
export interface PetAction {
  /**
   * @member {string} [actionResponse] action feedback
   */
  actionResponse?: string;
}

/**
 * Contains the possible cases for PetActionError.
 */
export type PetActionErrorUnion = PetActionError | PetSadErrorUnion;

/**
 * @interface
 * An interface representing PetActionError.
 */
export interface PetActionError {
  /**
   * @member {string} errorType Polymorphic Discriminator
   */
  errorType: "PetActionError";
  /**
   * @member {string} [errorMessage] the error message
   */
  errorMessage?: string;
}

/**
 * Contains the possible cases for PetSadError.
 */
export type PetSadErrorUnion = PetSadError | PetHungryOrThirstyError;

/**
 * @interface
 * An interface representing PetSadError.
 */
export interface PetSadError {
  /**
   * @member {string} errorType Polymorphic Discriminator
   */
  errorType: "PetSadError";
  /**
   * @member {string} [errorMessage] the error message
   */
  errorMessage?: string;
  /**
   * @member {string} [reason] why is the pet sad
   */
  reason?: string;
}

/**
 * @interface
 * An interface representing PetHungryOrThirstyError.
 */
export interface PetHungryOrThirstyError {
  /**
   * @member {string} errorType Polymorphic Discriminator
   */
  errorType: "PetHungryOrThirstyError";
  /**
   * @member {string} [errorMessage] the error message
   */
  errorMessage?: string;
  /**
   * @member {string} [reason] why is the pet sad
   */
  reason?: string;
  /**
   * @member {string} [hungryOrThirsty] is the pet hungry or thirsty or both
   */
  hungryOrThirsty?: string;
}

/**
 * @interface
 * An interface representing XMSErrorResponseExtensionsOptions.
 * @extends ServiceClientOptions
 */
export interface XMSErrorResponseExtensionsOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * Contains response data for the getPetById operation.
 */
export type PetGetPetByIdResponse = Pet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Pet;
    };
};

/**
 * Contains response data for the doSomething operation.
 */
export type PetDoSomethingResponse = PetAction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PetAction;
    };
};
