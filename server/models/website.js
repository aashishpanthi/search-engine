import { Client, Entity, Schema } from "redis-om";

const client = new Client();

const connectDB = async () => {
  if (!client.isOpen()) {
    try {
      await client.open(process.env.REDIS_WEBSITE_URL);
      console.log("Connected to redis !");
    } catch (error) {
      console.log("failed connecting redis", error);
    }
  }
};

class Website extends Entity {}

export const websiteSchema = new Schema(
  Website,
  {
    url: {
      type: "string",
    },
    title: {
      type: "text",
      textSearch: true,
    },
    description: {
      type: "text",
      textSearch: true,
    },
    firstFewWords: {
      type: "string",
    },
    loadTime: {
      type: "number",
    },
    lastUpdated: {
      type: "date",
    },
    backLinks: {
      type: "number",
    },
    backLinkKeywords: {
      type: "string[]",
    },
    urlKeywords: {
      type: "string[]",
    },
    mainKeywords: {
      type: "string[]",
      textSearch: true,
    },
    headings: {
      type: "string[]",
      textSearch: true,
    },
    favicon: {
      type: "string",
    },
    ogImage: {
      type: "string",
    },
  },
  {
    dataStructure: "JSON",
  }
);

export const searchData = async (query) => {
  await connectDB();
  const repository = await client.fetchRepository(websiteSchema);
  await repository.createIndex();

  const sites = await repository
    .search()
    .where("title")
    .matches(query)
    .or("description")
    .matches(query)
    .or("urlKeywords")
    .contain(query)
    .or("headings")
    .contains(query)
    .or("mainKeywords")
    .contains(query)
    .return.all();

  console.log("got website from redis", sites);

  return sites;
};
