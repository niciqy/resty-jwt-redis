const express = require('express')
const app = express()
const _ = require('lodash');

app.get('/api/hello', (req, res) => {
  console.log(req.headers);
    res.send("Hello world");
})

app.listen(process.env.APP_PORT || 80, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))
