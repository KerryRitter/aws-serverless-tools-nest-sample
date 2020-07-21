import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsServerlessToolsModule } from '@aws-serverless-tools/nest';

@Module({
  imports: [AwsServerlessToolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
