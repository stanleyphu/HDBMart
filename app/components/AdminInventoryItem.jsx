var React = require('react');

import { Table, Progress, Button, Segment } from 'semantic-ui-react'

class AdminInventoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncreaseStock = this.handleIncreaseStock.bind(this);
    this.handleDecreaseStock = this.handleDecreaseStock.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleIncreaseStock(e, data) {
    e.preventDefault();
    console.log("data: " + data.id);
    this.props.onIncreaseStock(data.id);
  }

  handleDecreaseStock(e, data) {
    e.preventDefault();
    console.log("data: " + data.id);
    this.props.onDecreaseStock(data.id);
  }

  handleDeleteItem(e, data) {
    e.preventDefault();
    console.log("data: " + data.id);
    this.props.onDeleteItem(data.id);
  }

  render() {
    var {category, name, price, stock} = this.props;
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
      <Table.Row>
        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell>
            <Progress percent={width} style={{'marginBottom': '0px'}} color={progressStatus}>{stock}</Progress>
        </Table.Cell>
        <Table.Cell><Button primary onClick={this.handleIncreaseStock} id={name}>+</Button></Table.Cell>
        <Table.Cell><Button primary onClick={this.handleDecreaseStock} id={name}>-</Button></Table.Cell>
        <Table.Cell><Button color="red" onClick={this.handleDeleteItem} id={name}>X</Button></Table.Cell>
      </Table.Row>
    )
  }
}

module.exports = AdminInventoryItem;
