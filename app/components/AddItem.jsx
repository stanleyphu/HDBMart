var React = require('react');

var AddItem = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    //alert(this.refs.item.value + ': ' + this.refs.stock.value + ' ' + this.refs.price.value + '!');

    var itemName = this.refs.item.value;
    var itemStock = this.refs.stock.value;
    var itemPrice = this.refs.price.value;

    // Check for valid inputs
    if (itemName.length <= 0) {
      this.refs.item.focus();
    }
    else if (!itemStock || itemStock < 0) {
      this.refs.stock.focus();
    }
    else if (!itemPrice || itemPrice < 0) {
      this.refs.price.focus();
    }
    else {
      this.refs.item.value = "";
      this.refs.stock.value = "";
      this.refs.price.value = "";
      this.refs.item.focus();

      // Pass up to app - call props handler
      this.props.onFormSubmit({
        name: itemName,
        stock: itemStock,
        price: itemPrice
      });
    }

  },
  render: function() {
    return (
      <div>
        <div style={{'textAlign': 'center'}}>
          <form onSubmit={this.onFormSubmit} style={{display: 'inline-block'}}>
            <input type="text" ref="item" placeholder="Enter item" style={{display: 'inline-block', width: '400px', 'margin-right': '10px'}}/>
            <input type="number" ref="stock" placeholder="Stock" style={{display: 'inline-block', width: '100px', 'margin-right': '10px'}}/>
            <input type="number" ref="price" placeholder="Price" step="0.05" style={{display: 'inline-block', width: '100px', 'margin-right': '10px'}}/>
            <button className="button primary" style={{display: 'inline-block', width: '100px', margin: 'auto'}}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = AddItem;
