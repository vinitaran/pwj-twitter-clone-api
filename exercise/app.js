const express = require('express');
const app = express();
const Twitter = require('./api/helper/twitter');
const twitter = new Twitter;
require('dotenv').config();

//routes
app.get('/tweets', (req,res) => {
    const query = req.query.q;
    const count = req.query.count;
    twitter.get(query,count).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error);

    })
    
})

//setting up the server
app.listen(3000,console.log('listening on port 3000'));