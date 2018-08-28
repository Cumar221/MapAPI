const express = require('express');
const router  = require('./router');
const app     = express();

app.use('/api', router);

const server = app.listen(9000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});