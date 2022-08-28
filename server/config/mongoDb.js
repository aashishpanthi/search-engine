import mongoose from "mongoose";

export default function connectDB() {
  // Get MongoDB connection URL from env file
  const uri = process.env.MONGO_URI;
  // Connect to MongoDB
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      console.log(error ? error : `Database connection established`);
    }
  );

  //Get the default connection
  const db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
}
