const express = require('express');
const redis = require('redis');


const app = express();
const client = redis.createClient();

client.set('visits', 0);
app.get('/', (req, res) => {
    client.get('visits', (error, visits) => {
        res.send('Number of Visits is: ', visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, ()=> {
    console.log('Listening on Port 8081');
    
})