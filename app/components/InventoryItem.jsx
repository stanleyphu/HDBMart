var React = require('react');

var InventoryItem = React.createClass({
  handleAddItem: function (e) {
    e.preventDefault();
    //console.log(e);
    //console.log(e.target.id);
    this.props.onAddItem(e.target.id);
  },
  render: function () {
    var {name, price, stock} = this.props;
    var progressStatus, width;

    if (stock >= 10) {
      progressStatus = "success progress";
      width = (stock * 10) >= 100 ? 100 : (stock * 10);
    }
    else if (stock >= 5) {
      progressStatus = "warning progress";
      width = (stock * 10) >= 100 ? 100 : (stock * 10);
    }
    else {
      progressStatus = "alert progress";
      width = (stock * 10) >= 100 ? 100 : (stock * 10);
    }

    return (
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <div className={progressStatus}>
            <span className="progress-meter" style={{width: `${width}%`}}>
              <p className="progress-meter-text">{stock}</p>
            </span>
          </div>
        </td>
        <td><button data-open="shoppingCartModal" onClick={this.handleAddItem} type="button" className="primary button" id={name}>Add</button></td>
      </tr>
    )
  }
});

module.exports = InventoryItem;
