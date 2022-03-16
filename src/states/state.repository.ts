import { State } from 'src/entities/state.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(State)
export class StateRepository extends Repository<State> {
  //   findAllStates() {
  //     return 'hello world';
  //   }
}
