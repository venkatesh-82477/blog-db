const {findAllFrom} = require("../database/connections");
const hollywood = async (req,res)=>{
    try {
        const hollyData = await findAllFrom({},"hollywood")
        return res.status(200).send({hollyData:hollyData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = hollywood;