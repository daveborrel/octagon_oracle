import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: {
  users?: mongoDB.Collection;
  fighters?: mongoDB.Collection;
} = {};

export async function connectToDatabase() {
  // Pulls in the .env file so we can access it using "process.env"
  dotenv.config();

  if (
    !process.env.DB_CONN_STRING ||
    !process.env.USER_COLLECTION_NAME ||
    !process.env.FIGHTER_COLLECTION_NAME
  ) {
    throw new Error("Missing required environment variables");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const usersCollection: mongoDB.Collection = db.collection(
    process.env.USERS_COLLECTION_NAME
  );

  const fightersCollection: mongoDB.Collection = db.collection(
    process.env.FIGHTERS_COLLECTION_NAME
  );

  collections.users = usersCollection;
  collections.fighters = fightersCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName} and collection: ${fightersCollection.collectionName}`
  );
}
