import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from 'src/items/entity/items.entity';
import { UpdateResult, DeleteResult } from  'typeorm';


@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        private ItemsRepository: Repository<Items>,
    ) { }
    async  findAll(): Promise<Items[]> {
        return await this.ItemsRepository.find();
    }
    async findOne(id): Promise<Items>{
       return await this.ItemsRepository.findOne({id});
    }

    async  create(Items: Items): Promise<Items> {
        return await this.ItemsRepository.save(Items);
    }

    async update(Items: Items): Promise<UpdateResult> {
        return await this.ItemsRepository.update(Items.id, Items);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.ItemsRepository.delete(id);
    }
    
    getRepository(){
        return this.ItemsRepository;
    }
}
