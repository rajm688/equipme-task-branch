import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private countryService: CountriesService) {}
  @Get()
  findAllCountries() {
    return this.countryService.findAllCountries();
  }
}
