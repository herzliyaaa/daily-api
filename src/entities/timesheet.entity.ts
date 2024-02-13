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
    time_in: string;
  
    @Column()
    time_out: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  