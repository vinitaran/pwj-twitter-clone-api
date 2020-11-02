const express = require('express');
const app = express();
const Twitter = require('./api/helper/twitter');
const twitter = new Twitter;
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//middleware
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

//routes
app.get('/tweets', (req,res) => {
    const query = req.query.q;
    const count = req.query.count;
    const maxId = req.query.max_id;
    twitter.get(query,count,maxId).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error);

    })
    
})

//setting up the server
app.listen(PORT,console.log(`listening on port ${PORT}`));