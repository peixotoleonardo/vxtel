import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { PlanModule } from './plan.module';

@Module({
  imports: [InfraModule, PlanModule],
})
export class RootModule {}
