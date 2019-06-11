import { Controller, Get, Param, Post, Delete,Body } from "@nestjs/common";
import { ItemsHelperService } from "../services/items-helper/items-helper.service";

@Controller('items')
export class ItemsController {

    constructor(
        private readonly itemsHelperService: ItemsHelperService
    ){}

    @Get('v1/get_one/:key')
    async getOneByKey(@Param('key') key){
        return await this.itemsHelperService.findOneByKey(key);
    }
    @Get('v1/:categories')
    async findAll(@Param('categories') categories){
        return await this.itemsHelperService.findAll(categories);
    }
    @Get('v1/:brands')
    async findOne(@Param('brands') brands){
        return await this.itemsHelperService.findOne(brands);
    }
    @Get('v1/:id')
    async getId(@Param('id') id){
        return await this.itemsHelperService.findById(id);
    }
    @Get('v1/:active')
    async getActive(@Param('active') active){
        return await this.itemsHelperService.findByActive(active);
    }
    @Post('v1/:create')
    async createItem(@Param('create') create){
        return await this.itemsHelperService.createItem(create);
    }
    @Post('v1/:update')
    async updateItem(@Param('update') update){
        return await this.itemsHelperService.updateItem(update);
    }
    @Delete('v1/:id')
    async delete(@Param('id') id): Promise<any> {
      return await this.itemsHelperService.delete(id);
    } /* 
    @Post('create')
    async create(@Body() itemData: Items): Promise<any> {
      return await this.itemsHelperService.create(Items);
    } */ 
   
}
