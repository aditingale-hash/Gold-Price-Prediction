const getCount = require('./count')
const getTweets = require('././Twitter/tweets')
const getNews = require('./News/news')
const executeScirpt = require('./routes/script')
const fs = require('fs');

const express = require('express');
const router = express.Router();

router.post('/news/', async (req, res, next) => {

        
        const newsList = await getNews(req.query.keyword);
        const finalNewsList =newsList.articles.map(item => item.description);
        const filteredNewsList = finalNewsList.filter(item => item.length < 220 && item.includes("\n") === false && item.includes("<ol>") === false);
        let fileData = '';
        for(let i = 0; i < filteredNewsList.length; i++){
            fileData += filteredNewsList[i] + '\n';
        }

        fs.writeFileSync('/app/Python/testData.txt', fileData);
        executeScirpt().then(data => {
            res.send(data);
        }).catch(error => {
            res.send(error);
        })
        
});
router.post('/socialMedia', async (req, res, next) => {
   
    const count = await getCount(req.query.keyword);
     if(count < 2000){
         res.send("Not a trend");
     }
     else{
         const twitterList = await getTweets(req.query.keyword);
         const finalTwitterList = twitterList.map(item => item.text);

         let fileData = '';
         for(let i = 0; i < 10; i++){
             fileData += finalTwitterList[i] + '\n';
         }
 
         fs.writeFileSync('/app/Python/testData.txt', fileData);
         executeScirpt().then(data => {
            res.send(data);
        }).catch(error => {
            res.send(error);
        })
            // res.send("Trend");
     }
 });

module.exports = router;