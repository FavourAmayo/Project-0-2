import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "database-1.ch4fpdxcfwkt.us-east-2.rds.amazonaws.com",
  database: "workout",
  password: "gettingData5",
  port: 5432,
});
