import { searchData } from "../models/website.js";
import Joi from "joi";

export const getSites = async (req, res) => {
  const query = req.params.query.toLowerCase();
  const schema = Joi.string().min(1).required();

  const { value, error } = schema.validate(query);
  if (error) return res.status(400).json({ error: error.details, value });

  try {
    let sites = await searchData(value);
    if (sites.length !== 0) {
      // sort the sites array with the most backlinks first
      sites = sites
        .sort((a, b) => {
          return b.backLinks - a.backLinks;
        })
        .slice(0, 25);

      // sort the sites array with the least loadTime first
      sites = sites.sort((a, b) => {
        return a.loadTime - b.loadTime;
      });
    }

    res.status(200).json(sites);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err, value });
  }
};
