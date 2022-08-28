import { Client, Entity, Schema, Repository } from "redis-om";

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
      type: "string",
      textSearch: true,
    },
    siteURL: {
      type: "string",
    },
    altTag: {
      type: "string",
      textSearch: true,
    },
  },
  {
    dataStructure: "JSON",
  }
);

export const getImages = async (url) => {
  await connectDB();

  const repository = client.fetchRepository(imageSchema);

  await repository.createIndex();

  const images = await repository
    .search()
    .where("imageUrl")
    .equals(url)
    .return.all();

  console.log("got images from redis", images);

  return images;
};
