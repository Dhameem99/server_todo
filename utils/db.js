const mongoose =require('mongoose')

const connection=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://Dhameem:Incorrect890@cluster0.ur6f92k.mongodb.net/test')
        
        console.log("db connected");
    } catch (error) {
        console.log("db connection failed");
    }
}
module.exports=connection