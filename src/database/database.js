
import MongoClient from 'mongodb';

export async function connect(){

    try {
        // Connection URL
        const url = 'mongodb://localhost:27017';

        // Database Name
        const dbName = 'node-restapi';

        const client = await MongoClient.connect(url, {useUnifiedTopology: true});
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.log(error);
    }
}