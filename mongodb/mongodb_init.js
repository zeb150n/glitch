const { MongoClient, ServerApiVersion } = require("mongodb");
const prompt = require('prompt-sync')();

const uri = prompt("mongodb uri : "); //"mongodb://192.168.178.100:27017/";
const username = prompt("username : ");
const password = prompt("password : ", {echo: '*'});

const client = new MongoClient(uri,  {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    },
  auth: {
    password: password,
    username: username,
  },
  authSource: 'admin'
  }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = client
