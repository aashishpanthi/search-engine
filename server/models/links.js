import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "url is required"],
    unique: true,
  },
  found: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    required: [true, "lastUpdated is required"],
    default: Date.now,
  },
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
