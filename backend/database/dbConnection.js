import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGODB_URL;
export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://devprince116:yzltwx1m7W8GHx4M@foodhubapp.yqzfo0l.mongodb.net/?retryWrites=true&w=majority&appName=foodHubApp",
      {
        dbName: "RESERVATIONS",
      }
    )
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
