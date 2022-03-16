import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryRepository)
    private countryRepo: CountryRepository,
  ) {}
  findAllCountries() {
    return this.countryRepo.findAllCountries();
  }
}
