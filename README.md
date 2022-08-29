# Juhu - search engine

Juhu is an open source search engine that doesn't track users and id fully customizable.

![home page](https://user-images.githubusercontent.com/60884239/187238474-58389c1e-0a40-44ef-a9c6-cc973298f4cc.png)
![juhu search result](https://user-images.githubusercontent.com/60884239/187239207-8bf91d3f-97f7-4720-822f-14178c69ed44.png)
![juhu image search](https://user-images.githubusercontent.com/60884239/187238929-203137d1-0146-4ba7-9caa-d5b3c89f54b0.png)



# Overview video

Here's a short video that explains the project and how it uses Redis:

[![Embed your YouTube video](https://i.ytimg.com/vi/vyxdC1qK4NE/maxresdefault.jpg)](https://www.youtube.com/watch?v=vyxdC1qK4NE)

## How it works
Firstly of all a bot is used to run through different websites and that bot checks if the url is allowed to crawl or not. If able to crawl, it means it is able to be indexed. So, the bot scrapes the data from that website. Filters the data and stores in a form that it will be easier to search and index the scraped data. I want to attach a little architecture diagram here to clear out the things I said:
![Juhu architecture](https://user-images.githubusercontent.com/60884239/187257511-a66aa549-1f74-4d56-87fe-8302a618b4ad.png)


### How the data is stored:
First of all, our server needs to be connected with the redis database. This is a long code but it works :).
```javascript
import { Client } from "redis-om";

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
```

Yes, I created a function to call it again and again. But if the server is connected to the database already then it won't try to connect again, meaning our useless effort is saved.

Then I created a Schema to store the data. Yes, the scraped data in a proper structured way. I am using JSON database provided by redis as a primary database here.

```javascript
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

```

And to save the data, I have created a function and exported that so it can be called again and again from anywhere I want.
```javascript
export const saveWebsiteData = async (website) => {
  const repository = await getRepository();
  const site = repository.createEntity(website);
  const id = await repository.save(site);

  return id;
};
```

As I have created another database to save images, so there is a seperate schema and nearly the name save method:
```javascript
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
```

### How the data is accessed:

The data is accessed using Redis search and I have also used the datatypes in schema that will make me comfortable searching the query and getting the relevant result.

```javascript

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
```

I have created a function named as searchData to createIndex and search for the results and if the result is found or if results are found then the function returns it and from another file or another part of the program, I can call this function with a query as an argument and search for the result. I have nested a lot of or statements here because at this moment, I don't have enough data to display so I am in a path `Something is better than nothing`.

And nearly same goes for image searching.
```javascript

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
```


## How to run it locally?

If you want to use the code or try out the code then I am going to discuss the process in some points here.
#### 1. Get Node and NPM running

```bash
node --version && npm --version
```

Run the above command and if you get an error or don't get anything back. Try setting up nodejs and npm. If you get some numbers back then you are ready to go.

#### 2. Clone the repository

```bash
git clone https://github.com/aashishpanthi/search-engine
```

Clone this repository in order to use the code. Remember you must have git installed in your computer before using the above command.

#### 3. Install dependencies

The package.json file is in root directory of the project so you can install the dependencies directly with this command:
```bash
npm install
```

And to install the dependecy of the frontend part, go to client directory and run npm install there. I mean use the following commands:
```bash
cd client
npm install
```

#### 4. Configure .env file
The most important files needed for us to run our application is .env file. This file stores the secrets like API token, access token and other informations that we don't want to share with anyone. Let's create a .env file with command:

```bash
touch .env
```

You can create and edit files using graphical medium also. And those who are using windows, please use graphical way or swicth to linux.

Now paste these variables inside of the .env file.

```
MONGO_URI = 
REDIS_IMAGE_URL = 
REDIS_WEBSITE_URL = 
PORT = 5000
NODE_ENV = development
```

May be you have already guessed what each variable is for but anyways, I will tell you one by one. **MONGO_URI** contains the configured url to the mongodb database. **REDIS_IMAGE_URL** and **REDIS_WEBSITE_URL** contain the configured url for the redis databases. I have used two seperate databases for the website data and the images. **PORT** is used to define the port where our server will listen to. And **NODE_ENV** contains the environment on which we are working on, that is either `development` or `production`.

#### 5. Run client and server
Open two seperate terminal. Open the react server on one terminal as:
```
cd client
npm start
```

And open the express server on another terminal as:
```bash
node index.js
```

or with mongoose as
```bash
npm run devStart
```

### Prerequisites
Node version of minimum 16.x is needed. The app is developed on Node v16.14.2

NPM version of minimum 8.x is needed. The app is developed on NPM v8.5.0.

### Local installation

[Insert instructions for local installation]

## Deployment

First of all I created an account on redis cloud and used the cloud database. You can also create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

### Digital Ocean
The MERN app is deployed over digital ocean. And an IP address is got. You can access the website from here [http://143.198.136.81/](http://143.198.136.81/)

### Linode
The scraper/crawler/bot or spider whatever you call it is deployed over a linode server. The Ubuntu server is used to deploy the bot. Yes, I have also used the Ubuntu to develop the application. I could have shared the IP address of bot but it doesn't listen to any http request to I don't think I will share.

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)

I have used Redis OM Node (JS) to make this search engine.

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
