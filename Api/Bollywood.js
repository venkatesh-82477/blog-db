const {findAllFrom} = require("../database/connections");
const bollywood = async (req,res)=>{
    try {
        const bollyData = await findAllFrom({},"bollywood")
        return res.status(200).send({bollyData:bollyData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = bollywood;