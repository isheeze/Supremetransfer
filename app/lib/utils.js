import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(`mongodb+srv://ezeehs:QQ7Db9Tswlj2FMaT@cluster0.09zfu8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("app/utils.js => ",error)
    throw new Error(error);
  }
};
