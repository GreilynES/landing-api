import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrincipalModule } from './principal/principal.module';
import { ServicesLModule } from './servicesL/servicesL.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'greilynES04*',
      database: 'landing',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PrincipalModule, ServicesLModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}