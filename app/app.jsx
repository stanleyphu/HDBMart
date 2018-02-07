var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

var App = require('App');
var Main = require('Main');
var LoginPage = require('LoginPage');
var AdminPage = require('AdminPage');
var RegisterPage = require('RegisterPage');
var AboutUsPage = require('AboutUsPage');
var ContactUsPage = require('ContactUsPage');

// Load foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
// $(document).foundation();

// require('style-loader!css-loader!applicationStyles');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginPage}/>
      <Route path="admin" component={AdminPage}/>
      <Route path="register" component={RegisterPage}/>
      <Route path="aboutus" component={AboutUsPage}/>
      <Route path="contactus" component={ContactUsPage}/>
      <IndexRoute component={Main}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
