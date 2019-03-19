const express = require('express');
const bodyParser = require('body-parser');
const port = 7000;
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(port, () => console.log("listening on port " + port));
require('./backend/config/routes')(app);
