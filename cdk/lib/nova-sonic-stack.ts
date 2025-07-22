import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { SpeechToSpeech } from './construct/speech-to-speech';

export class NovaSonicStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Cognito User Pool for authentication
    const userPool = new cognito.UserPool(this, 'NovaSonicUserPool', {
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      standardAttributes: {
        email: { required: true, mutable: true },
      },
    });

    // Create a Cognito User Pool Client
    const userPoolClient = userPool.addClient('NovaSonicUserPoolClient', {
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
    });

    // Create API Gateway REST API
    const api = new apigateway.RestApi(this, 'NovaSonicApi', {
      restApiName: 'Nova Sonic API',
      description: 'API for Nova Sonic voice chat',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
    });

    // Create Speech-to-Speech construct
    const speechToSpeech = new SpeechToSpeech(this, 'SpeechToSpeech', {
      envSuffix: '',
      userPool,
      api,
      speechToSpeechModelIds: [
        { modelId: 'amazon.nova-sonic-v1:0' }
      ],
      crossAccountBedrockRoleArn: null,
    });

    // Output values
    new cdk.CfnOutput(this, 'UserPoolId', {
      value: userPool.userPoolId,
    });

    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value: userPoolClient.userPoolClientId,
    });

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url,
    });

    new cdk.CfnOutput(this, 'EventApiEndpoint', {
      value: speechToSpeech.eventApiEndpoint,
    });

    new cdk.CfnOutput(this, 'SpeechToSpeechNamespace', {
      value: speechToSpeech.namespace,
    });
  }
}
