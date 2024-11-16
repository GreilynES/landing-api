import { Module } from '@nestjs/common';
import { ServicesLController } from './servicesL.controller';
import { ServicesLService } from './servicesL.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesL } from './entities/servicesL.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ServicesL])],
  controllers: [ServicesLController],
  providers: [ServicesLService],
})
export class ServicesLModule {}