import { Injectable } from '@nestjs/common';
import { ItemsService } from '../../entity/items.service';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ItemsHelperService {

    constructor(
        private readonly itemsService: ItemsService
    ){}

    async findOneByKey(key){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM items WHERE $1=true`,[key] 
        )
    }
    async findAll(categories){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM items WHERE $1=true`,[categories]
        )
    }
    async findOne(brands){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM items WHERE $1=true`,[brands]
        )
    }
    async findById(id){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM item WHERE $1=true`,[id]
        )
    }
    async findByActive(active){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM items WHERE $1=true`,[active]
        )
    }
    async createItem(create){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM item WHERE $1=true`,[create]
        )
    }
    async updateItem(update){
        return await this.itemsService.getRepository().query(
            `SELECT * FROM item WHERE $1=true`,[update]
        )
    }

    async delete(id): Promise<DeleteResult> {
        return await this.itemsService.delete(id);
    }
    /*
    async  create(items: Items): Promise<Items> {
        return await this.itemsService.save(Items);
    }*/

}
