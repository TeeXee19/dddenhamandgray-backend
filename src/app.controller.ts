import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { UpdateStateDto, UpdateSummaryDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard)
  @Get('states')
  getStatesData(): Promise<any> {
    return this.appService.getStatesData();
  }
  
  @Get('states/:id')
  findStateById(@Param('id') id: string) {
    return this.appService.findStateById(+id);
  }

  @UseGuards(AuthGuard)
  @Patch('states/:id')
  updateStateById(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    return this.appService.updateStateById(+id, updateStateDto);
  }
 
 
  @Get('summary')
  getSummary() {
    return this.appService.getSummary();
  }
 
  @UseGuards(AuthGuard)
  @Patch('summary')
  updateSummary(@Body() updateSummaryDto: UpdateSummaryDto) {
    return this.appService.updateSummary(updateSummaryDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
