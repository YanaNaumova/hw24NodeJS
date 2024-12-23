import mongoose from "mongoose";
import "dotenv/config";

const dbUri = process.env.MONGO_URI || "uri";
function connectDb(): void {
  try {
    mongoose.connect(dbUri);
    console.log("Connectet to DB");
  } catch (error) {
    console.log("Failed connected to DB", error);
    process.exit();
  }
}

export default connectDb;
