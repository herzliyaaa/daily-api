import { DataSource } from "typeorm";
import * as  dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const dataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: true,
});


