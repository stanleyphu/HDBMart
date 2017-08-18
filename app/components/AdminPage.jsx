var React = require('react');
var axios = require('axios');

var AdminProductTable = require('AdminProductTable');
var AddItem = require('AddItem');

var AdminPage = React.createClass({
  getInitialState: function () {
    return {
      inventory: [],
      loggedIn: false
    };
  },
  componentWillMount: function () {
    axios.get('/users/me', {
        headers: {
          'x-auth': localStorage.getItem('token')
        }
      })
      .then((res) => {
        //console.log(res);
        this.setState({
          loggedIn: true
        });
      })
      .catch((e) => {
        console.log(e);
      });

      this.loadInventoryFromServer();
  },
  handleFormSubmit: function (item) {
    axios.post('/inventory', {
      name: item.name,
      stock: item.stock,
      price: item.price
    }, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });
  },
  handleIncreaseStock: function (itemName) {
    axios.patch('/inventory', {
        name: itemName,
        increase: true
      }, {
        headers: {
          'x-auth': localStorage.getItem('token')
        }
    }).then((res) => {
      console.log(res);
      this.loadInventoryFromServer();
    }).catch((e) => {
      console.log(e);
    });
  },
  handleDecreaseStock: function (itemName) {
    axios.patch('/inventory', {
        name: itemName,
        increase: false
      }, {
        headers: {
          'x-auth': localStorage.getItem('token')
        }
    }).then((res) => {
      console.log(res);
      this.loadInventoryFromServer();
    }).catch((e) => {
      console.log(e);
    });
  },
  loadInventoryFromServer: function () {
    axios.get('/inventory')
      .then((res) => {
        this.setState({
          inventory: res.data.items
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  render: function () {
    if (this.state.loggedIn) {
      return (
        <div>
          <AddItem onFormSubmit={this.handleFormSubmit}/>
          <AdminProductTable inventory={this.state.inventory} onIncreaseStock={this.handleIncreaseStock} onDecreaseStock={this.handleDecreaseStock}/>
        </div>
      );
    }
    else {
      return (
        <div>
          <h1 className="text-center">Not logged in!</h1>
        </div>
      )
    }
  }
});

module.exports = AdminPage;
