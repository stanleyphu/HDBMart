var React = require('react');

var ShoppingCart = React.createClass({
  render: function () {
    var {items} = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return (
          <p key={item.name}>{item.name}</p>
        );
      });
    };

    return (
      <div>
        {renderItems()}
      </div>
    );
  }
});

module.exports = ShoppingCart;
