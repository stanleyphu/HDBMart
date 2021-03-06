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
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSort = this.handleSort.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
    if (this.state.column != null) {
      this.setState({
        data: _.sortBy(nextProps.inventory, [this.state.column])
      });
    }
    else {
      this.setState({
        data: nextProps.inventory
      });
    }
  }

  handleIncreaseStock (id) {
    this.props.onIncreaseStock(id);
  }

  handleDecreaseStock (id) {
    this.props.onDecreaseStock(id);
  }

  handleDeleteItem (id) {
    this.props.onDeleteItem(id);
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

    console.log(data);

    var renderAdminInventory = () => {
      return data.map((item) => {
        var priceValue = item.price.toFixed(2);
        return (
          <AdminInventoryItem key={item._id} category={item.category} name={item.name} price={priceValue} stock={item.stock} onIncreaseStock={this.handleIncreaseStock} onDecreaseStock={this.handleDecreaseStock} onDeleteItem={this.handleDeleteItem}/>
        );
      });
    };

    return (
      <Segment basic>
        <Table sortable celled striped color="blue" size="large">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column ==='category' ? direction : null} onClick={this.handleSort.bind(this, 'category')}>Category</Table.HeaderCell>
              <Table.HeaderCell width={6} sorted={column === 'product' ? direction : null} onClick={this.handleSort.bind(this, 'name')}>Product</Table.HeaderCell>
              <Table.HeaderCell width={3} sorted={column === 'price' ? direction : null} onClick={this.handleSort.bind(this, 'price')}>Price</Table.HeaderCell>
              <Table.HeaderCell width={4} sorted={column === 'stock' ? direction : null} onClick={this.handleSort.bind(this, 'stock')}>Stock</Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderAdminInventory()}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

module.exports = AdminProductTable;
