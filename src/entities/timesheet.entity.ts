import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
  } from "typeorm";
  
  @Entity()
  export class Timesheet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    timeIn: string;
  
    @Column()
    timeOut: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  