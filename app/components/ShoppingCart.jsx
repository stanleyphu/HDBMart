var React = require('react');

var ShoppingCart = React.createClass({
  handleRemoveCartItem: function (e) {
    e.preventDefault();
    console.log(e.target.id);
    this.props.onRemoveCartItem(e.target.id);
  },
  render: function () {
    var {items} = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return (
          <tr key={item.id}>
            <td>
              <button onClick={this.handleRemoveCartItem} id={item.name} className="alert button" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </td>
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
              <th></th>
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
