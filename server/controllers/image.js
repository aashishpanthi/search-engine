import { searchImage } from "../models/image.js";
import Joi from "joi";

export const getImages = async (req, res) => {
  const query = req.params.query.toLowerCase();
  const schema = Joi.string().min(1).required();

  const { value, error } = schema.validate(query);
  if (error) return res.status(400).json({ error: error.details, value });

  try {
    let images = await searchImage(value);

    if (images.length !== 0) {
      // remove the dulicate images with same url
      images = images = images.filter(
        (image, index, self) =>
          index === self.findIndex((t) => t.imageUrl === image.imageUrl)
      );

      // get only the images that contain https protocol
      images = images.filter((image) => image.imageUrl.includes("https"));
    }

    res.status(200).json(images);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err, value });
  }
};
