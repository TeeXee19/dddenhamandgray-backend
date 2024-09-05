import { Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';
import { UpdateStateDto, UpdateSummaryDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    private dbService: DbService,
    // private readonly eventEmitter: EventEmitter2
  ) { }
  
  async getStatesData(): Promise<any> {
    return await this.dbService.state.findMany();
  }

  async findStateById(id: number) {
    return await this.dbService.state.findUnique({
      where: {
        id
      }
    })
  }

  async updateStateById(id: number, updateStateDto: UpdateStateDto) {
    return await this.dbService.state.update({
      where: {
        id
      },
      data: updateStateDto
    })
  }
  
  async getSummary() {
    return await this.dbService.summary.findUnique({
      where: {
        id: 1
      }
    })
  }

  async updateSummary(updateSummaryDto: UpdateSummaryDto) {
    return await this.dbService.summary.update({
      where: {
        id: 1
      },
      data: updateSummaryDto
    })
  }

  getHello(): string {
    return 'Hello World!';
  }
}
