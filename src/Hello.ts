import { inject, injectable } from "inversify";
import { Service } from './services/service';
import { ILogger } from "./interfaces/interfaces";
import TYPES from "./types";
import { APIGatewayEvent } from "aws-lambda";

@injectable()
class Hello {

  public logger: ILogger;
  public service: Service

  constructor(
    @inject(TYPES.ILogger) logger: ILogger,
    @inject(Service) service: Service
  ) {
    this.logger = logger;
    this.service = service;
  }

  public SayHello(event: APIGatewayEvent) {
    let names = this.service.getAllNames();
    
    names.forEach((name) => {
      this.logger.info(name);
    });

    this.logger.debug("Dependencies are wired correctly");

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
  
}
export { Hello };

