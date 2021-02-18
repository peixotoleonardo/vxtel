import { Global, Module } from '@nestjs/common';
import { ConfigModule } from './config.module';

@Global()
@Module({
  imports: [ConfigModule],
})
export class InfraModule {}
