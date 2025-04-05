import env from "dotenv";
env.config();

import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db("bookshelf");
    return db.collection("books");
  } catch {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

getAllBooks();
async function getAllBooks() {
  const col = await run();
  const cursor = col.find();
  const result = await cursor.toArray();
  console.log(result);

  await client.close();
}
