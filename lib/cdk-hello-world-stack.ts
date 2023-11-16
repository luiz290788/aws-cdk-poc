import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class CdkHelloWorldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new cdk.aws_apigateway.RestApi(this, "MyApi", {
      deploy: false,
    });

    const myFunction = new cdk.aws_lambda_nodejs.NodejsFunction(
      this,
      "MyFunction",
      {
        handler: "handler",
      }
    );

    const integration = new cdk.aws_apigateway.LambdaIntegration(myFunction, {
      proxy: true,
    });

    const resource = api.root.addResource("my-endpoint-testing");

    resource.addMethod("GET", integration);
    resource.addMethod("POST", integration);
  }
}
