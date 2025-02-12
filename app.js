require('dotenv').config()
const express = require('express')
const {StreamChat} = require('stream-chat')
const cors = require("cors")

const app = express()
const client = StreamChat.getInstance(process.env.STREAM_KEY, process.env.STREAM_SECRET)
app.use(express.json())
app.use(cors())
app.post("/connect", async (req,res,next)=>{
    console.log("in the endpoint")
    try{
        
        const {user_id} = req.body
        if(!user_id) throw new Error('No user_id')
        const token = client.createToken(user_id)
        // console.log(token)
        return res.json({token: token})
    }catch(err){
       next(err)
    }
    
})

app.use((err, req, res, next)=>{
    console.log("this is an error")

    return res.status(400).send({error_msg: "please supply user_id"})
})  

app.listen(+process.env.PORT, '0.0.0.0', ()=>{
    console.log("SERVER RUNNING: Listening on port: ", process.env.PORT)
})
