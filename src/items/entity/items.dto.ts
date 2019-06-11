import { IsString } from 'class-validator';

export class ItemsDto {
  @IsString()
   status: string;

    @IsString()
    Name: string;

    @IsString()
    ProductCategoryName: string;

    @IsString()
    ProductCategoryType: string;

    @IsString()
    QuantityType: string;

    @IsString()
    bTestingState: string;

    @IsString()
    UnitOfMeasureName: string;

    @IsString()
    provalStatus: string;

    @IsString()
    StrainId: string;

    @IsString()
    rainName: string;

    @IsString()
    dministrationMethod: string;

    @IsString()
    UnitCbdPercent: string;

    @IsString()
    UnitCbdContent: string;

    @IsString()
    ontentUnitOfMeasureName: string;

    @IsString()
    UnitThcPercent: string;

    @IsString()
    UnitThcContent: string;

    @IsString()
    UnitThcContentUnitOfMeasureName: string;

    @IsString()
    UnitVolume: string;

    @IsString()
    UnitVolumeUnitOfMeasureName: string;

    @IsString()
    UnitWeight: string;

    @IsString()
    UnitWeightUnitOfMeasureName: string;

    @IsString()
    ServingSize: string;

    @IsString()
    SupplyDurationDays: string;

    @IsString()
    UnitQuantity: string;

    @IsString()
    UnitQuantityUnitOfMeasureName: string;

    @IsString()
    Ingredients: string;

    @IsString()
    IsUsed: string;
}