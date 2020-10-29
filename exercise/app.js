const express = require('express');
const app = express();
const axios = require('axios');

//routes
app.get('/tweets', (req,res) => {
    const query = req.query.q;
    const count = req.query.count;
    const URL = 'https://api.twitter.com/1.1/search/tweets.json';
    axios.get(URL,{
        params: {
            q:query,
            count:count
        },
        headers: {
            "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAAGzUJAEAAAAAnHRQ55chxA%2Fyv%2BY3xvuyX1uPQBU%3D4aHjVhyHROZFbDbSgjauUf4LR4MI4mGwBvJgWmnEPJZGPPeu2Z",
        }
    }).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error);

    })
})





//setting up the server
app.listen(3000,console.log('listening on port 3000'));