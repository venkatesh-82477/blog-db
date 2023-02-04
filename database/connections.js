const {MongoClient} = require("mongodb")
const url = "mongodb+srv://venkatesh222:qjGvU8z7Ww7cikKO@cluster0.ghqbuqp.mongodb.net/blogProject?retryWrites=true&w=majority"

const client = new MongoClient(url)
const findAllFrom = async (query,collectionName) =>{
    try{
        await client.connect();
        console.log("connection to db is successfull");
        const database = client.db("blogProject")
        const collection = database.collection(collectionName)
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse
    }
    catch (error) { 
         return error.message
    }

}

module.exports = {findAllFrom}