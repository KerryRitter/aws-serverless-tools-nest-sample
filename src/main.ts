import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiGatewayOpenApi } from '@aws-serverless-tools/nest';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openapi = await app.get(ApiGatewayOpenApi)
    .setNestAppContext(app)
    .generateOpenApiFile();

  await app.listen(3000);
}
bootstrap();
