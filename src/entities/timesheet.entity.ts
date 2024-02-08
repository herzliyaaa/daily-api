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
    name: string;
  
    @Column({
      unique: true,
    })
    email: string;
  
    @Column({
      unique: true,
    })
    username: string;
  
    @Column()
    password: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  