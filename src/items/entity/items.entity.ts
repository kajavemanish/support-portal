import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    ProductCategoryName: string;

    @Column()
    ProductCategoryType: string;

    @Column()
    QuantityType: string;

    @Column()
    bTestingState: string;

    @Column()
    UnitOfMeasureName: string;

    @Column()
    provalStatus: string;

    @Column()
    StrainId: string;

    @Column()
    rainName: string;

    @Column()
    dministrationMethod: string;

    @Column()
    UnitCbdPercent: string;

    @Column()
    UnitCbdContent: string;

    @Column()
    ontentUnitOfMeasureName: string;

    @Column()
    UnitThcPercent: string;

    @Column()
    UnitThcContent: string;

    @Column()
    UnitThcContentUnitOfMeasureName: string;

    @Column()
    UnitVolume: string;

    @Column()
    UnitVolumeUnitOfMeasureName: string;

    @Column()
    UnitWeight: string;

    @Column()
    UnitWeightUnitOfMeasureName: string;

    @Column()
    ServingSize: string;

    @Column()
    SupplyDurationDays: string;

    @Column()
    UnitQuantity: string;

    @Column()
    UnitQuantityUnitOfMeasureName: string;

    @Column()
    Ingredients: string;

    @Column()
    IsUsed: string;
}