import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesL } from './entities/servicesL.entity';
import { ServiceLDto } from './dto/ServiceLDto';

 
@Injectable()
export class ServicesLService {
  constructor(
    @InjectRepository(ServicesL)
    private servicesLRepository: Repository<ServicesL>,
  ) {}

  // Métodos para Major
  findAllServicesL() {
    return this.servicesLRepository.find();
  }

  findOneServicesL(id: number) {
    return this.servicesLRepository.findOneBy({ id });
  }

  async createServicesL(serviceLDto: ServiceLDto) {
    const newServicesL = this.servicesLRepository.create(serviceLDto);
    await this.servicesLRepository.save(newServicesL);
    return newServicesL;
  }

  deleteServicesL(id: number) {
    return this.servicesLRepository.delete(id);
  }

  updateServicesL(id: number, serviceLDto: ServiceLDto) {
    return this.servicesLRepository.update(id, serviceLDto);
  }
}