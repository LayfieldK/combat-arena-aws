import "jasmine";
import { hello } from "../../src/handlers/handler";
import { APIGatewayProxyEvent, Callback, Context } from "aws-lambda";
import * as TypeMoq from "typemoq";

describe("handler", function () {
    it("should return some json", async () => {
        const mock: TypeMoq.IMock<APIGatewayProxyEvent> = TypeMoq.Mock.ofType<APIGatewayProxyEvent>();
        const result = await hello(mock.object);
        console.log(result);
        expect(result.statusCode).toEqual(200);
    });
});