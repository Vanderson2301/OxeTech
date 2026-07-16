import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL, {max: 5});

export { sql };