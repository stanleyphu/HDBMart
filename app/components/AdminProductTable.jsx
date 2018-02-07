var React = require('react');

var AdminInventoryItem = require('AdminInventoryItem');

import { Table, Segment } from 'semantic-ui-react'

class AdminProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: null,
      data: this.props.inventory,
      direction: null
    };

    this.handleIncreaseStock = this.handleIncreaseStock.bind(this);
    this.handleDecreaseStock = this.handleDecreaseStock.bind(this);
    this.handleSort = this.handleSort.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.inventory
    });
  }

  handleIncreaseStock (id) {
    this.props.onIncreaseStock(id);
  }

  handleDecreaseStock (id) {
    this.props.onDecreaseStock(id);
  }

  handleSort(clickedColumn) {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending' 
    });
  }

  render() {
    const { column, data, direction } = this.state;
    var {inventory} = this.props;

    var renderAdminInventory = () => {
      return data.map((item) => {
        var priceValue = item.price.toFixed(2);
        return (
          <AdminInventoryItem key={item._id} name={item.name} price={priceValue} stock={item.stock} onIncreaseStock={this.handleIncreaseStock} onDecreaseStock={this.handleDecreaseStock}/>
        );
      });
    };

    return (
      <Segment basic>
        <Table sortable celled striped color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={8} sorted={column === 'product' ? direction : null} onClick={this.handleSort.bind(this, 'name')}>Product</Table.HeaderCell>
              <Table.HeaderCell width={4} sorted={column === 'price' ? direction : null} onClick={this.handleSort.bind(this, 'price')}>Price</Table.HeaderCell>
              <Table.HeaderCell width={3} sorted={column === 'stock' ? direction : null} onClick={this.handleSort.bind(this, 'stock')}>Stock</Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderAdminInventory()}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>*Stock levels may not be up to date.</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

module.exports = AdminProductTable;
