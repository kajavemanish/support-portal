import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Packages } from 'src/packages/entity/Packages.entity';
import { UpdateResult } from  'typeorm';

@Injectable()
export class PackagessService {
    constructor(
        @InjectRepository(Packages)
        private PackagesRepository: Repository<Packages>,
    ) { }
    async  findAll(): Promise<Packages[]> {
        return await this.PackagesRepository.find();
    }
    async findOne(id):Promise<Packages>{
        return await this.PackagesRepository.findOne(id);
    }

    async getByLabel(label): Promise<Packages[]>{
        return await this.PackagesRepository.getByLabel(label);
    }
    async getActive(active):Promise<Packages[]>{
        return await this.PackagesRepository.getActive(active);
    }
    async getOnhold(onhold):Promise<Packages[]>{
        return await this.PackagesRepository.getOnhold(onhold);
    }
    async getInactive(inactivate):Promise<Packages[]>{
        return await this.PackagesRepository.getInactive(inactivate);
    }
    async getType(type): Promise<Packages[]>{
        return await this.PackagesRepository.getType(type);
    }
    async getReasons(reasons): Promise<Packages[]>{
        return await this.PackagesRepository.getReasons(reasons);
    }
    async  create(Packages: Packages): Promise<Packages> {
        return await this.PackagesRepository.save(Packages);
    }

    async testing(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages);
    }

    async plantings(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages);
    }

    async item(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages)
    }

    async rooms(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages)
    }

    async adjust(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages)
    }

    async finish(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages)
    }

    async unfinish(Packages: Packages): Promise<Packages>{
        return await this.PackagesRepository.save(Packages)
    }

    async update(Packages: Packages): Promise<UpdateResult> {
        return await this.PackagesRepository.update(Packages.id, Packages);
    }
}