'use strict';
import "regenerator-runtime/runtime";
import { APIGatewayEvent } from "aws-lambda";
import "reflect-metadata";
import DIContainer from "../di-container";
import TYPES from "../types";
import { Hello } from '../Hello';

const hello = async (event: APIGatewayEvent): Promise<any> => {
  return DIContainer.get<Hello>(TYPES.Hello).SayHello(event);
}

export { hello };
