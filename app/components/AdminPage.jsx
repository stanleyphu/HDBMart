var React = require('react');
var axios = require('axios');

var AdminPage = React.createClass({
  componentWillMount: function() {
    // e.preventDefault();
    //
    // var username = this.refs.username.value;
    // var password = this.refs.password.value;
    // // alert(this.refs.username.value + " : " + this.refs.password.value);
    //
    axios.get('/users/me', {
        headers: {
          'x-auth': localStorage.getItem('token')
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    //
    // // axios.post('/users', {
    // //   username: username,
    // //   password: password
    // // }).then((res) => {
    // //   console.log(res);
    // // });
    //
    // //this.props.onFormSubmit(user);
  },
  render: function () {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
});

module.exports = AdminPage;
