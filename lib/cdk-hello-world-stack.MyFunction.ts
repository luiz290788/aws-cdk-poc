import {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log("my lambda running");
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "Does it update",
    }),
  };
};
