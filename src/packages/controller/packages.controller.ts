import { Controller, Get, NotFoundException,Res, HttpStatus } from '@nestjs/common';
import { Packages } from '../entity/Packages.entity';
import { PackagessService } from '../entity/packages.service';
import { Post,Put, Body, Param } from  '@nestjs/common';


@Controller('Packagess')
export class PackagessController {
    constructor(private PackagessService: PackagessService){}

    @Get()
    index(): Promise<Packages[]> {
      return this.PackagessService.findAll();
    } 

    @Get('v1/get/:id')
    async findOne(@Param('id') id: Packages) {
      return await this.PackagessService.findOne({ id });
      if (!id) throw new NotFoundException('id does not exist!');
      return res.status(HttpStatus.OK).json(Packages);
    } 

    @Get('v1/get/:label')
    async getByLabel(@Param('label') label: string) {
      return await this.PackagessService.getByLabel({ label });
      if (!label) throw new NotFoundException('label does not exist!');
      return res.status(HttpStatus.OK).json(Packages);
    }
    @Get('v1/get/:active')
    async getActive(@Param('active') active:string){
      return await this.PackagessService.getActive({active});
      if (!active) throw new NotFoundException('active package does not exist!');
      return res.status(HttpStatus.OK).json(Packages);
    }
    @Get('v1/get/:onhold')
    async getOnhold(@Param('onhold') onhold:string){
      return await this.PackagessService.getOnhold({onhold});
    }
    @Get('v1/get/:inactive')
    async getInactive(@Param('inactive') inactive:string){
      return await this.PackagessService.getInactive([inactive]);
    }
    @Get('v1/get/:type')
    async getType(@Param('type') type:string){
      return await this.PackagessService.getType(type);
    }
    @Get('v1/get/:adjust/reasons')
    async getReasons(@Param('reasons') reasons:string){
      return await this.PackagessService.getReasons(reasons);
    }
    @Post('v1/get/:create')
    async create(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/:create/testing')
    async testing(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/:create/plantings')
    async plantings(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/:change/item')
    async item(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/:change/rooms')
    async rooms(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/adjust')
    async adjust(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/finish')
    async finish(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Post('v1/get/unfinish')
    async unfinish(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 
    
    @Post('v1/get/remediate')
    async remediate(@Body() PackagesData: Packages): Promise<any> {
      return this.PackagessService.create(PackagesData);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() PackagesData: Packages): Promise<any> {
        PackagesData.id = Number(id);
        console.log('Update #' + PackagesData.id)
        return this.PackagessService.update(PackagesData);
    }
    
}
