'use strict';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { APIGatewayEvent, Handler } from "aws-lambda";
import "reflect-metadata";
import DIContainer from "../di-container";
import { ILogger } from "../interfaces/interfaces";
import TYPES from "../types";
import { Service } from '../services/service';

const hello = async (event: APIGatewayEvent): Promise<any> => {
  const service: Service = DIContainer.resolve<Service>(Service);
  const logger = DIContainer.get<ILogger>(TYPES.ILogger);
  const deps = await exports.deps();

  let names = service.getAllNames();
  names.forEach(function(name){  
    logger.info(name);
  });
  logger.debug("Dependencies are wired correctly");

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

export { hello };
