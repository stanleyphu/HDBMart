var React = require('react');

var ShoppingCart = React.createClass({
  render: function () {
    var {items} = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        );
      });
    };

    return (
      <div id="shoppingCart">
        <table className="hover stack">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {renderItems()}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = ShoppingCart;
