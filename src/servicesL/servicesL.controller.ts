import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServiceLDto } from './dto/ServiceLDto';
import { ServicesLService } from './servicesL.service';

@Controller('servicesL')
export class ServicesLController {

  constructor(private servicesLService: ServicesLService){}

  @Post()
  create(@Body() createServicesLDto: ServiceLDto) {
    return this.servicesLService.createServicesL(createServicesLDto);
  }

  @Get()
  findAll() {
    return this.servicesLService.findAllServicesL();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.servicesLService.findOneServicesL(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateservicesLDto: ServiceLDto) {
    return this.servicesLService.updateServicesL(id, updateservicesLDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.servicesLService.deleteServicesL(id);
  }
}