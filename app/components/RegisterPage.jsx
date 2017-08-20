var React = require('react');
var axios = require('axios');

var RegisterPage = React.createClass({
  handleFormSubmit: function(e) {
    e.preventDefault();

    var username = this.refs.username.value;
    var password = this.refs.password.value;
    // alert(this.refs.username.value + " : " + this.refs.password.value);

    axios.post('/users', {
      username: username,
      password: password
    }).then((res) => {
      //console.log(res);
      alert("Success!");
    }).catch((e) => {
      alert("Error! Try again.");
    });
  },
  render: function () {
    return (
      <div>
        <h2 className="text-center">Register for an Account</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="medium-6 medium-centered columns">
              <label>Username
                <input type="text" ref="username" placeholder="username"/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="medium-6 medium-centered columns">
              <label>Password
                <input type="password" ref="password" placeholder="password"/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="medium-6 medium-centered columns">
              <button className="button primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = RegisterPage;
