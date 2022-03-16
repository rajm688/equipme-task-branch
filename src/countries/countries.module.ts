import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { CountryRepository } from './country.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CountryRepository])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
