import knexConfig from "./knexfile";
import knex from "knex";

const database = knex(knexConfig);

export default database;
