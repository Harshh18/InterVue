import mongoose from "mongoose"
const connect = async()=>{
    try{
        
        await mongoose.connect(process.env.MONGODB_URL)
    }
    catch(e){
        
    }
   
}
export default connect