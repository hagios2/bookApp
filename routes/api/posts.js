const express = require('express')
const connectDb = require('../../config/db')
const router = express.Router()
const connectDB = require('../../config/db')
const mongodb = require('mongodb')


//get
router.get('/', async (req, res) => {

    const posts = await connectDB()

    res.send(await posts.find({}).toArray())
    
})

router.post('/', async (req, res) => {
    const post = await connectDb()

    await post.insertOne({
        test: req.body.test,
        created_at: new Date()
    })

    res.status(200).json({message: "new post added"})
})

router.delete('/:id', async (req, res) => {
    const post = await connectDb()

    post.deleteOne({_id: new mongodb.ObjectID(req.params.id)})

    res.status(200).json({message: "post deleted"})
})

module.exports = router