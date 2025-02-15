import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { users?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  // Pulls in the .env file so we can access it using "process.env"
  dotenv.config();

  if (!process.env.DB_CONN_STRING || !process.env.COLLECTION_NAME) {
    throw new Error("Missing required environment variables");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const usersCollection: mongoDB.Collection = db.collection(
    process.env.COLLECTION_NAME
  );

  collections.users = usersCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`
  );
}
