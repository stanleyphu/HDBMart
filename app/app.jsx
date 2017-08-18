var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

var App = require('App');
var Main = require('Main');
var LoginPage = require('LoginPage');
var AdminPage = require('AdminPage');
var RegisterPage = require('RegisterPage');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginPage}/>
      <Route path="admin" component={AdminPage}/>
      <Route path="register" component={RegisterPage}/>
      <IndexRoute component={Main}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
