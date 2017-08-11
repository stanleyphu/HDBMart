var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  //console.log(req);
  var token = req.header('x-auth');

  // var token = localStorage.getItem('token');
  // console.log("token " + token);

  User.findByToken(token).then((user) => {
    console.log("USER: " + user);
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
