import { Module } from '@nestjs/common';
import { ConfigModule as ConfigNestModule } from '@nestjs/config';
import appConfig from 'src/infra/config/app.config';
import swaggerConfig from 'src/infra/config/swagger.config';

@Module({
  imports: [
    ConfigNestModule.forRoot({
      load: [appConfig, swaggerConfig],
    }),
  ],
})
export class ConfigModule {}
