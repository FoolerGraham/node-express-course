const express = require('express');
const app = express();

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/users', functtion(req,res){
        res.json({
            success: true,
            message: 'successfullygot users. Nice!',
            users: mockUserData
        })
})

app.listen(8000,function(){
    console.log("server is runnig")
})