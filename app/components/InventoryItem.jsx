var React = require('react');

import { Table, Progress, Button, Segment } from 'semantic-ui-react'

var InventoryItem = React.createClass({
  handleAddItem: function (e, data) {
    e.preventDefault();
    //console.log(e);
    // console.log(e.target.id);
    this.props.onAddItem(data.id);
  },
  render: function () {
    var {name, price, stock} = this.props;
    var progressStatus, width;

    if (stock >= 10) {
      progressStatus = "green";
      width = (stock * 10) >= 100 ? 100 : (stock * 10);
    }
    else if (stock >= 5) {
      progressStatus = "yellow";
      width = (stock * 10) >= 100 ? 100 : (stock * 10);
    }
    else {
      progressStatus = "red";
      width = (stock * 10) >= 100 ? 100 : (stock * 10);
    }

    return (
      // <tr>
      //   <td>{name}</td>
      //   <td>${price}</td>
      //   <td>
      //     <div className={progressStatus}>
      //       <span className="progress-meter" style={{width: `${width}%`}}>
      //         <p className="progress-meter-text">{stock}</p>
      //       </span>
      //     </div>
      //   </td>
      //   <td><button data-open="shoppingCartModal" onClick={this.handleAddItem} type="button" className="primary button" id={name}>Add</button></td>
      // </tr>
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell>
            <Progress percent={width} style={{'marginBottom': '0px'}} color={progressStatus}/>
        </Table.Cell>
        <Table.Cell><Button primary onClick={this.handleAddItem} id={name}>Add</Button></Table.Cell>
      </Table.Row>
    )
  }
});

module.exports = InventoryItem;
