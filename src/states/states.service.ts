import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateRepository } from './state.repository';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StateRepository)
    private stateRepo: StateRepository,
  ) {} // , //
  findAllStates() {
    // return this.stateRepo.findAllStates();
  }
}
