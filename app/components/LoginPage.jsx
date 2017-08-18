var React = require('react');
var axios = require('axios');

var LoginPage = React.createClass({
  handleFormSubmit: function(e) {
    e.preventDefault();

    var username = this.refs.username.value;
    var password = this.refs.password.value;
    // alert(this.refs.username.value + " : " + this.refs.password.value);

    axios.post('/users/login', {
      username: username,
      password: password
    }).then((res) => {
      // console.log(res);
      // console.log(res.headers["x-auth"]);
      localStorage.setItem('token', res.headers["x-auth"]);
    }).catch((e) => {
      alert("Error! Login failed");
      this.refs.password.focus();
      console.log(e);
    });

    // axios.post('/users', {
    //   username: username,
    //   password: password
    // }).then((res) => {
    //   console.log(res);
    // });

    //this.props.onFormSubmit(user);
  },
  render: function () {
    return (
      <div>
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
              <button className="button primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = LoginPage;
