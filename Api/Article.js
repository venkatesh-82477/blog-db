const {findAllFrom} = require("../database/connections");

const article = async (req,res)=>{
    try {
        const articleData = await findAllFrom({},"article")
        return res.status(200).send({articleData:articleData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = article;