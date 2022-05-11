const express = require('express')


const app = express();
const port = 3000
const friends = [
    {
        id: 0,
        name: 'Sir Isaac Newton'
    },
    {
        id: 1,
        name: 'Albert EInstein   '
    }
]
app.get('/friends',(req, res)=>{
    res.json(friends)
})
app.get('/friends/:friendId', (req, res)=>{
    const friendId=Number(req.params.friendId)
    const friend= friends[friendId]
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(404).json({
            error:"friend does not exist"
        })

    }
})

app.get('/messages',(req, res)=>{
    res.send('Hellooooo')
})
app.post('/messages',(req, res)=>{
    res.send('updating messages')
})








app.listen(port,()=>{
    console.log(`server is listening o port ${port}`)
})