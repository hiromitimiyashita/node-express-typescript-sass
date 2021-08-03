import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const  { MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } = process.env;

export const sequelize = new Sequelize(
    MYSQL_DB as string,
    MYSQL_USER as string,
    MYSQL_PASSWORD as string,
    {
        dialect: 'mysql',
        port: parseInt(MYSQL_PORT as string)
    }
);

