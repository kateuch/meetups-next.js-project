import { MongoClient } from "mongodb";

//api/new-meetup
// POST /api/new-meetup
// this code never end up on the client side. this is secure place to store credentials

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://kateuch:femOFMMt9H4pJSf8@cluster0.7j1hg.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups"); //hold multiple documents

    const result = await meetupsCollections.insertOne(data); //new document into this collection (JS object)

console.log(result)

    client.close();
    console.log(res)

    res.status(201).json({ message: "Meetup inserted" });
  }
}
export default  handler