import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { RootModule } from './di/root.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class ServerApplication {
  private readonly app: INestApplication;
  private readonly configService: ConfigService;

  private constructor(app: INestApplication) {
    this.app = app;
    this.configService = this.app.get(ConfigService);

    this.buildApiDocumentation();
  }

  buildApiDocumentation() {
    const documentOptions = new DocumentBuilder()
      .setTitle(this.configService.get<string>('swagger.title'))
      .setDescription(this.configService.get<string>('swagger.description'))
      .setVersion(this.configService.get<string>('swagger.version'))
      .build();

    const document = SwaggerModule.createDocument(this.app, documentOptions);

    SwaggerModule.setup('docs', this.app, document);
  }

  start() {
    return this.app.listen(this.configService.get<number>('app.port'));
  }

  public static async create(): Promise<ServerApplication> {
    const app = await NestFactory.create(RootModule);

    return new ServerApplication(app);
  }
}
