var React = require('react');

var AdminInventoryItem = require('AdminInventoryItem');

var AdminProductTable = React.createClass({
  componentDidMount: function() {

  },
  handleIncreaseStock: function (id) {
    this.props.onIncreaseStock(id);
  },
  handleDecreaseStock: function (id) {
    this.props.onDecreaseStock(id);
  },
  render: function() {
    var {inventory} = this.props;

    var renderAdminInventory = () => {
      return inventory.map((item) => {
        var priceValue = item.price.toFixed(2);
        return (
          <AdminInventoryItem key={item._id} name={item.name} price={priceValue} stock={item.stock} onIncreaseStock={this.handleIncreaseStock} onDecreaseStock={this.handleDecreaseStock}/>
        );
      });
    };

    return (
      <div>
        <table className="hover stack">
          <thead>
            <tr>
              <th width="500">Product</th>
              <th width="100">Price</th>
              <th width="200">Stock</th>
              <th width="200"></th>
            </tr>
          </thead>
          <tbody>
            {renderAdminInventory()}
            <tr>
              <td></td>
              <td>*Stock levels may not be up to date.</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
});

module.exports = AdminProductTable;
