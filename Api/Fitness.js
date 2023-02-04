const {findAllFrom} = require("../database/connections");
const fitness = async (req,res)=>{
    try {
        const fitnessData = await findAllFrom({},"fitness")
        return res.status(200).send({fitnessData:fitnessData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = fitness;