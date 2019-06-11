import { Module } from '@nestjs/common';
import { ItemsService } from './entity/items.service';
import { ItemsController } from './controller/items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './entity/items.entity';
import { ItemsHelperService } from './services/items-helper/items-helper.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Items]),
  ],
  providers: [ItemsService,ItemsHelperService],
  controllers: [ItemsController]
})
export class ItemsModule {}


