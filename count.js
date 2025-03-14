const needle = require('needle');
require('dotenv').config()

const token = process.env.BEARER_TOKEN;

const endpointUrl = "https://api.twitter.com/2/tweets/counts/recent";

async function getRequest(keyword) {

    // Edit query parameters below and specify a search query
    // optional params: start_time,end_time,since_id,until_id,next_token,granularity
    const params = {
        'query': keyword,
        'granularity': 'day'
    }

    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentTweetCountsJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

const getCount = async(keyword) => {

    try {
        // Make request
        const response = await getRequest(keyword);
        return response.meta.total_tweet_count;
        console.dir(response.meta.total_tweet_count, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
};

module.exports = getCount;
