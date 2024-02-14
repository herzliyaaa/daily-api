import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";

import { User } from "./user.entity";
import { ExpenseCategory } from "./category.entity";

@Entity()
export class Expense extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => ExpenseCategory, (expenseCategory) => expenseCategory.id)
  expenseCategory: ExpenseCategory;
}
