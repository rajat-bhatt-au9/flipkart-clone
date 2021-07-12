import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce.ulzam.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error", error.message);
  }
};

export default Connection;
