/** @type {import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://accounts:5UnFktHAVrR1@ep-still-cake-a1yf9zgx.ap-southeast-1.aws.neon.tech/AI-Interview?sslmode=require"
  }
};