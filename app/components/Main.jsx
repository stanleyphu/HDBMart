var React = require('react');
var uuid = require('node-uuid');
var axios = require('axios');
var _ = require('lodash');

var ProductTable = require('ProductTable');
var ShoppingCart = require('ShoppingCart');
var InventoryAPI = require('InventoryAPI');

import { Header, Container, Divider, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router'

var Main = React.createClass({
  getInitialState: function () {
    return {
      items: [],
      inventory: []
    };
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
  componentDidMount: function () {
    this.loadInventoryFromServer();
  },
  handleAddItem: function (itemName) {
    var item = InventoryAPI.findInventoryItem(this.state.inventory, itemName);
    if (item) {
      this.setState({
        items: [
          ...this.state.items,
          {
            id: uuid(),
            name: item.name,
            price: item.price.toFixed(2)
          }
        ]
      });

      // axios.post('/inventory', {
      //   name: item.name,
      //   price: item.price.toFixed(2),
      //   stock: item.stock
      // }).then((res) => {
      //   console.log(res);
      // }).catch((e) => {
      //   console.log(e);
      // });
    }
  },
  handleRemoveCartItem: function(id) {
    var newItems = _.filter(this.state.items, function(item) {
        return item.name !== id;
    });

    this.setState({
      items: newItems
    });
  },
  render: function () {
    var username = 'kona-luu';
    var amount = 0.00;
    var note = '';
    for (var i = 0; i < this.state.items.length; i++) {
      amount += parseFloat(this.state.items[i].price);

      if (i == this.state.items.length - 1)
        note += this.state.items[i].name;
      else
        note += (this.state.items[i].name + ', ');
    }
    note = note.replace(/ /g, '+');

    //console.log(amount);
    //console.log(note);
    var link = `https://venmo.com/?txn=pay&audience=friends&recipients=${username}&amount=${amount}&note=${note}`;
    //console.log(link);

    var renderShoppingCart = () => {
      var {items} = this.state;

      if (items.length > 0)
        return (
          <Container>
            <Header as="h2" textAlign="center">Shopping Cart</Header>
            <ShoppingCart id="shoppingCart" items={items} onRemoveCartItem={this.handleRemoveCartItem}/>
            <Divider/>
            <Button as="a" href={link} primary fluid>Purchase Items</Button>
          </Container>
        );
    };

    let breakfastInventory = this.state.inventory.filter((item) => {
      return item.category == 'Breakfast';
    })

    let chipsInventory = this.state.inventory.filter((item) => {
      return item.category == 'Chips';
    })

    let snacksInventory = this.state.inventory.filter((item) => {
      return item.category == 'Snacks';
    })

    let drinksInventory = this.state.inventory.filter((item) => {
      return item.category == 'Drinks';
    })

    return (
      <div>
        <Header as="h2" textAlign="center">Breakfast</Header>
        <ProductTable onAddItem={this.handleAddItem} inventory={breakfastInventory}/>
        <Header as="h2" textAlign="center">Chips</Header>
        <ProductTable onAddItem={this.handleAddItem} inventory={chipsInventory}/>
        <Header as="h2" textAlign="center">Snacks</Header>
        <ProductTable onAddItem={this.handleAddItem} inventory={snacksInventory}/>
        <Header as="h2" textAlign="center">Drinks</Header>
        <ProductTable onAddItem={this.handleAddItem} inventory={drinksInventory}/>
        {renderShoppingCart()}
      </div>
    );
  }
});

module.exports = Main;
