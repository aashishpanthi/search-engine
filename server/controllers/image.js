import { searchImage } from "../models/image.js";
import Joi from "joi";

export const getImages = async (req, res) => {
  const query = req.params.query.toLowerCase();
  const schema = Joi.string().min(1).required();

  const { value, error } = schema.validate(query);
  if (error) return res.status(400).json({ error: error.details, value });

  try {
    let images = await searchImage(value);
    res.status(200).json(images);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err, value });
  }
};
