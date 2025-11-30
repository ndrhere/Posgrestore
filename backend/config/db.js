import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

console.log("PGHOST is:", PGHOST);

// Creates a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)
// this sql function we export is used as a tagged template literal, which allows as to write SQL queries safely


// # psql 'postgresql://neondb_owner:npg_qm2VBAn9hpxs@ep-shiny-bonus-a8uopil0-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'