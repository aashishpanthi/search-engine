import { Client, Entity, Schema } from "redis-om";

const client = new Client();

const connectDB = async () => {
  if (!client.isOpen()) {
    try {
      await client.open(process.env.REDIS_IMAGE_URL);
      console.log("Connected to redis !");
    } catch (error) {
      console.log("failed connecting redis", error);
    }
  }
};

class Image extends Entity {}

export const imageSchema = new Schema(
  Image,
  {
    imageUrl: {
      type: "string",
    },
    siteTitle: {
      type: "text",
      textSearch: true,
    },
    siteURL: {
      type: "string",
    },
    altTag: {
      type: "text",
      textSearch: true,
    },
  },
  {
    dataStructure: "JSON",
  }
);

export const searchImage = async (query) => {
  await connectDB();
  const repository = await client.fetchRepository(imageSchema);
  await repository.createIndex();

  const images = await repository
    .search()
    .where("altTag")
    .matches(query)
    .or("siteTitle")
    .matches(query)
    .return.all();

  console.log("got images from redis", images);

  return images;
};
