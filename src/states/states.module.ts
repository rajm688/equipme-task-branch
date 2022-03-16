import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateRepository } from './state.repository';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateRepository])],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
