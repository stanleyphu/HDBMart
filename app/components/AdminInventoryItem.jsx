var React = require('react');

import { Table, Progress, Button, Segment } from 'semantic-ui-react'

class AdminInventoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncreaseStock = this.handleIncreaseStock.bind(this);
    this.handleDecreaseStock = this.handleDecreaseStock.bind(this);
  }

  handleIncreaseStock(e) {
    e.preventDefault();
    console.log(this.ref);
    this.props.onIncreaseStock(e.target.id);
  }

  handleDecreaseStock(e) {
    e.preventDefault();
    console.log(e.target.id);
    this.props.onDecreaseStock(e.target.id);
  }

  render() {
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
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell>
            <Progress percent={width} style={{'marginBottom': '0px'}} color={progressStatus}/>
        </Table.Cell>
        <Table.Cell><Button primary onClick={this.handleIncreaseStock} id={name} >Add</Button></Table.Cell>
        <Table.Cell><Button primary onClick={this.handleDecreaseStock} id={name}>Remove</Button></Table.Cell>
      </Table.Row>
    )
  }
}

module.exports = AdminInventoryItem;
