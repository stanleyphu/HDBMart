var React = require('react');
var axios = require('axios');

import { Container, Form, Button, Header, Icon, Segment } from 'semantic-ui-react'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e, data) {
    e.preventDefault();

    var { username, password } = this.state;

    // var username = this.refs.username.value;
    // var password = this.refs.password.value;
    // alert(this.refs.username.value + " : " + this.refs.password.value);

    axios.post('/users/login', {
      username: username,
      password: password
    }).then((res) => {
      // console.log(res);
      // console.log(res.headers["x-auth"]);
      localStorage.setItem('token', res.headers["x-auth"]);
      alert("Success!");
    }).catch((e) => {
      alert("Error! Login failed");
      //this.refs.password.focus();
      console.log(e);
    });

    //this.props.onFormSubmit(user);
  }

  handleFormChange(e, { name, value } ) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <Header as="h2" textAlign="center">
          Login
        </Header>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input label="Username" placeholder="Username" name="username" value={username} onChange={this.handleFormChange} />
          <Form.Input label="Password" placeholder="Password" name="password" type="password" value={password} onChange={this.handleFormChange} />
          <Form.Button content="Submit"/>
        </Form>
      </Container>
    );
  }
}

module.exports = LoginPage;
