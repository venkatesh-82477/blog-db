const {findAllFrom} = require("../database/connections");
const food = async (req,res)=>{
    try {
        const foodData = await findAllFrom({},"food")
        return res.status(200).send({foodData:foodData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = food;