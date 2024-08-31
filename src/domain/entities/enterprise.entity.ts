import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { TypeEnterprise } from '../enums/typeEnterprise.enum';

@Entity('enterprise')
export class Enterprise {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'bigint', length: 14})
    CNPJ: number;

    @Column({type: 'varchar', length: 100})
    companyName: string;

    @Column({type: 'int', length: 9})
    CEP: number;

    @Column({type: 'varchar', length: 100})
    address: string;

    @Column({type: 'enum', enum: TypeEnterprise})
    type: TypeEnterprise;
}

