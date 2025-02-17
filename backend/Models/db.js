const mongoose= require( 'mongoose')

const mongo_url= process.env.MONGO_STRING;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MONGODB Connected...')
    }).catch((err)=>{
        console.log('MONGODB Connection Error',err)
    })