const {findAllFrom} = require("../database/connections");
const technology = async (req,res)=>{
    try {
        const techData = await findAllFrom({},"technology")
        return res.status(200).send({techData:techData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = technology;