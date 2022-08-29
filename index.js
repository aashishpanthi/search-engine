//import dependencies
import express from "express";
import dotenv from "dotenv";
import connectDB from "./server/config/mongoDb.js";

//router imports
import searchRoutes from "./server/routes/search.js";
import imagesRoutes from "./server/routes/image.js";
import linkRoutes from "./server/routes/link.js";

//making instance
const app = express();
dotenv.config();

//middleware
app.use(express.json({ extented: false }));

//inserting  router
app.use("/api/search", searchRoutes);
app.use("/api/images", imagesRoutes);
app.use("/api/link", linkRoutes);

//Server listening to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//Connect database
connectDB();

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("./client/build"));
}
