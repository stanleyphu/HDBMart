var React = require('react');
var uuid = require('node-uuid');

var ProductTable = require('ProductTable');
var ShoppingCart = require('ShoppingCart');
var InventoryAPI = require('InventoryAPI');

var Main = React.createClass({
  getInitialState: function () {
    return {
      items: [],
      inventory: InventoryAPI.getInventory()
    };
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
    }
  },
  render: function () {
    var username = 'kona-luu';
    var amount = 0.00;
    var note = '';
    for (var i = 0; i < this.state.items.length; i++) {
      amount += parseFloat(this.state.items[i].price);
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
          <div>
            <h3 className="text-center">Shopping Cart</h3>
            <ShoppingCart id="shoppingCart" items={items}/>
            <a href={link} className="button" id="purchaseButton">Purchase Items</a>
          </div>
        );
    };

    return (
      <div>
        <h1 className="text-center" style={{'color': 'blue'}}>Luu's FuErDai</h1>
        <ProductTable onAddItem={this.handleAddItem} inventory={this.state.inventory}/>
        {renderShoppingCart()}
        <img src="https://preview.ibb.co/k6DWAk/kona_luu.jpg" alt="kona luu" border="0" id="kona-luu" />
        <h4 className="text-center">For any questions, please contact Kona Luu, CEO, by e-mail or Lync at kluu@greenlee.textron.com.</h4>
      </div>
    );
  }
});

module.exports = Main;
