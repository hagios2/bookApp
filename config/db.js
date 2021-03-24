const express = require('express')
const mongodb = require('mongodb')

// const connectDB = async() => {
//     try {
//         const con = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         })

//         console.log(con)

//        console.log(`MongoDB Connected: ${con.connection.host}`)

//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }
// }

// module.exports = connectDB




const connectDb = async function loadPostCollection()
{
    const client = await mongodb.MongoClient.connect("mongodb+srv://oteng:toor8853@cluster0.mjhvs.mongodb.net/posts_app?retryWrites=true&w=majority", 
    { useNewUrlParser: true });
    
    return client.db("posts_app").collection("posts");
    
}

module.exports = connectDb