import { Controller, Get } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private stateService: StatesService) {}
  @Get()
  findAllStates() {
    return this.stateService.findAllStates();
  }
}
