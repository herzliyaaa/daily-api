import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany
} from "typeorm";

import { Expense } from "./expense.entity";

@Entity({ name: 'expenseCategory' })
export class ExpenseCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Expense, expense => expense.id)
  expense: Expense[];
  

}
