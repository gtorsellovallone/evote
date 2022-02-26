const config=require("./config.js");
const express = require('express');
const app = express();
const port = 3000;

var data=config.load();
console.log(data);

app.listen(port, () => {
    console.log("Porta aperta!");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send(data);
})
  