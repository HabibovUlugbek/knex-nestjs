import { Knex } from "knex";

const knexConfig: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/author.sqlite3",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./migrations",
  },
};

export default knexConfig;
