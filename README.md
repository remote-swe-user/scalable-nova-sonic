# Scalable Nova Sonic

This project provides a scalable implementation of a voice chat application using Amazon Bedrock's Nova Sonic model. It is extracted from AWS's generative AI use cases examples.

## Project Structure

The project is organized into two main parts:

1. **CDK Infrastructure** - Contains AWS CDK code for deploying the backend infrastructure
2. **Web Frontend** - Contains a React-based web application using Vite

## Features

- Real-time voice conversation with Amazon Nova Sonic AI model
- Low-latency audio processing using Web Audio API
- Barge-in capability allowing users to interrupt the AI
- Real-time text transcript of the conversation
- Secure authentication via Amazon Cognito

## Prerequisites

- Node.js 16+
- AWS Account with Bedrock access enabled
- AWS CLI configured with appropriate permissions

## Getting Started

### Deploy Backend Infrastructure

1. Navigate to the CDK directory:
   ```
   cd cdk
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Deploy the CDK stack:
   ```
   npm run cdk deploy
   ```

4. Note the outputs from the CDK deployment, you will need them for the web app configuration.

### Run Web Frontend

1. Navigate to the web directory:
   ```
   cd web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the example, filling in values from the CDK outputs:
   ```
   cp .env.example .env
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
