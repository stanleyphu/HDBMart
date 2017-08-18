var React = require('react');

var AdminInventoryItem = React.createClass({
  handleIncreaseStock: function (e) {
    e.preventDefault();
    console.log(e.target.id);
    this.props.onIncreaseStock(e.target.id);
  },
  handleDecreaseStock: function (e) {
    e.preventDefault();
    console.log(e.target.id);
    this.props.onDecreaseStock(e.target.id);
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
        <td>
          <div className="expanded button-group">
            <a className="button" onClick={this.handleIncreaseStock} id={name}>Add</a>
            <a className="button" onClick={this.handleDecreaseStock} id={name}>Remove</a>
          </div>
        </td>
      </tr>
    )
  }
});

module.exports = AdminInventoryItem;
