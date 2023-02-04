const {findAllFrom} = require("../database/connections");
const home = async (req,res)=>{
    try {
        const homeData = await findAllFrom({},"home")
        return res.status(200).send({homeData:homeData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = home;