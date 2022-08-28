import Link from "../models/links.js";
import Joi from "joi";

export const addLink = async (req, res, next) => {
  const url = new URL(req.body.url);
  const baseUrl = `${url.protocol}//${url.hostname}${url.pathname}`;

  const schema = Joi.object({
    url: Joi.string().required(),
  });

  const { value, error } = schema.validate({ url: baseUrl });
  if (error) return res.status(400).json({ error: error.details, ...value });

  const link = new Link({
    ...value,
    lastUpdated: new Date(new Date().setMonth(new Date().getMonth() - 1)),
  });
  try {
    await link.save((err, s) => {
      res.status(200).json({ success: true, item: s });
    });
  } catch (err) {
    next(err);
    res.status(400).json({ error: err, ...value });
  }
};
