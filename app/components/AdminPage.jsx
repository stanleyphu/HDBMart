var React = require('react');
var axios = require('axios');

var AdminProductTable = require('AdminProductTable');
var AddItem = require('AddItem');

import { Segment } from 'semantic-ui-react'

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
      price: item.price,
      category: item.category
    }, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    }).then((res) => {
      //console.log(res);
      axios.get('/inventory')
        .then((res) => {
          this.setState({
            inventory: res.data.items
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }).catch((e) => {
      console.log(e);
    });
  },
  handleIncreaseStock: function (itemName) {
    axios.patch('/inventory', {
        name: itemName,
        increase: true,
        remove: false
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
        increase: false,
        remove: false
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
  handleDeleteItem: function (itemName) {
    axios.patch('/inventory', {
        name: itemName,
        remove: true
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
          <AddItem id="addItem" onFormSubmit={this.handleFormSubmit}/>
          <AdminProductTable inventory={this.state.inventory} onIncreaseStock={this.handleIncreaseStock} onDecreaseStock={this.handleDecreaseStock} onDeleteItem={this.handleDeleteItem}/>
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
