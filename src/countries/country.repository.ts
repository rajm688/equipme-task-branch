import { Country } from 'src/entities/country.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
  findAllCountries() {
    return 'hello world';
  }
}
