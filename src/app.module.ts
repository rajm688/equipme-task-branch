import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesModule } from './countries/countries.module';
import { StatesModule } from './states/states.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CountriesModule, StatesModule],
})
export class AppModule {}
