require('./config/config');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Item} = require('./models/item');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

// Create our app
var app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/inventory', (req, res) => {
  //console.log(req.body);
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

app.patch('/inventory', authenticate, (req, res) => {
  var itemName = req.body.name;
  var increase = req.body.increase;

  if (increase) {
    Item.findOneAndUpdate({
      name: itemName
    }, {$inc: {stock: 1}}).then((item) => {
      if (!item) {
        return res.status(404).send();
      }

      res.send({item});
    }).catch((e) => {
      res.status(400).send();
    });
  }
  else {
    //decrease
    Item.findOneAndUpdate({
      name: itemName
    }, {$inc: {stock: -1}}).then((item) => {
      if (!item) {
        return res.status(404).send();
      }

      res.send({item});
    }).catch((e) => {
      res.status(400).send();
    });
  }
});

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['username', 'password']);
  var user = new User(body);

  user.save().then((user) => {
    res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['username', 'password']);

  User.findByCredentials(body.username, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
