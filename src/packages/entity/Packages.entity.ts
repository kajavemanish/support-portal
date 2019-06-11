import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Packages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Label: string;

    @Column()
    PackageType: string;

    @Column()
    SourceHarvestNames: null;

    @Column()
    RoomId: null;

    @Column()
    RoomName:null;

    @Column()
    Quantity:number;

    @Column()
    UnitOfMeasureName:string;

    @Column()
    UnitOfMeasureAbbreviation:string;

    @Column()
    PatientLicenseNumber:null;

    @Column()
    ProductId:number;

    @Column()
    ProductName:string;

    @Column()
    ProductCategoryName:string;

    @Column()
    PackagedDate:string;

    @Column()
    InitialLabTestingState:string;

    @Column()
    LabTestingState:string;

    @Column()
    LabTestingStateDate:string;

    @Column()
    IsProductionBatch:Boolean;

    @Column()
    ProductionBatchNumber:null;

    @Column()
    IsTestingSample:Boolean;

    @Column()
    IsProcessValidationTestingSample:Boolean;

    @Column()
    ProductRequiresRemediation:Boolean;

    @Column()
    ContainsRemediatedProduct:Boolean;

    @Column()
    RemediationDate:null;

    @Column()
    ReceivedFromManifestNumber:null;

    @Column()
    ReceivedFromFacilityLicenseNumber:null;

    @Column()
    ReceivedFromFacilityName:null;

    @Column()
    ReceivedDateTime:null;

    @Column()
    IsOnHold:Boolean;

    @Column()
    ArchivedDate:null;

    @Column()
    FinishedDate:null;

    @Column()
    LastModified:Date;
}