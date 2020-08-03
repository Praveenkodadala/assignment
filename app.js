const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World',
}));

app.listen(port, ()=>{
  console.log(`server at ${port}`);
})

module.exports = app;
