const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/redis', (req,res) => {res.send("Hello redis")});

app.listen(port, ()=>console.log("Listening"));