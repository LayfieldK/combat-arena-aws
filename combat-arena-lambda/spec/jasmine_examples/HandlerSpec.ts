import "jasmine";
import "reflect-metadata";
import { Hello } from "../../src/Hello";
import { APIGatewayProxyEvent, Callback, Context } from "aws-lambda";
import { Service } from '../../src/services/service';
import { Logger } from '../../src/services/logger';
import { ILogger } from "../../src/interfaces/interfaces";
import * as TypeMoq from "typemoq";

describe("handler", function () {
    it("should return some json", async () => {
        const eventMock: TypeMoq.IMock<APIGatewayProxyEvent> = TypeMoq.Mock.ofType<APIGatewayProxyEvent>();
        const loggerMock: TypeMoq.IMock<ILogger> = TypeMoq.Mock.ofType<ILogger>(Logger);
        const serviceMock: TypeMoq.IMock<Service> = TypeMoq.Mock.ofType<Service>();
        serviceMock.setup(x => x.getAllNames()).returns(() => ["At vero eos et accusamus"]);
        const hello = new Hello(loggerMock.object, serviceMock.object);
        const result = await hello.SayHello(eventMock.object);
        console.log(result);
        expect(result.statusCode).toEqual(200);
    });
});