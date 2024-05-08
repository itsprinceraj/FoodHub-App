import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const MONGO_URI = process.env.MONGODB_URL
export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
