// imports
const express = require('express');
const cors = require('cors');

const router = express.Router();
require('dotenv/config');

var nlpRouter = require('./woker');

// Constants
const token = process.env.BEARER_TOKEN;
const NewsAPIKey = process.env.NewsAPIKey;

// const newsApi = require("")
const app = express();
app.use(cors());
const path = require('path');
app.use(express.json());

// app.use('/public', express.static(__dirname + '/public'));   
// app.use('/api/', nlpRouter);

app.use('/api/nlp', nlpRouter);

app.get('/ping', (_, res)=> {
    res.send("Yes, It's online");
})

app.listen(process.env.PORT, () => console.log(`Server Started at port : ${process.env.PORT}`));