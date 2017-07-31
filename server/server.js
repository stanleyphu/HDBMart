require('./config/config');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var {mongoose} = require('./db/mongoose');
var {Item} = require('./models/item');

// Create our app
var app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/inventory', (req, res) => {
  console.log(req.body);
  var item = new Item({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  });

  item.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/inventory', (req, res) => {
  Item.find({}).then((items) => {
    res.send({items});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);

  // var item = new Item({
  //   name: 'Boba',
  //   price: '4.00',
  //   stock: 1
  // });
  // item.save().then((doc) => {
  //   console.log(doc);
  // }, (e) => {
  //   console.log('error');
  // });

  // Item.find({}).then((items) => {
  //   console.log({items});
  // }, (err) => {
  //   console.log('Unable to fetch items', err);
  // });
});
