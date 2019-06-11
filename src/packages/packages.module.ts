import { Module } from '@nestjs/common';
import { PackagessService } from './entity/packages.service';
import { PackagessController } from './controller/packages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packages } from './entity/Packages.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Packages]),
  ],
  providers: [PackagessService],
  controllers: [PackagessController]
})
export class PackagesModule {}

