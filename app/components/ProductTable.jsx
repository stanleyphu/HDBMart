var React = require('react');
import _ from 'lodash'

var InventoryItem = require('InventoryItem');

import { Table, Segment } from 'semantic-ui-react'

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: null,
      data: this.props.inventory,
      direction: null
    };

    this.handleSort = this.handleSort.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    // new Foundation.Reveal($('#appleModal'));
    // new Foundation.Reveal($('#bagelModal'));
    // new Foundation.Reveal($('#cheetosModal'));
    // new Foundation.Reveal($('#emergencModal'));
    // new Foundation.Reveal($('#fritosModal'));
    // new Foundation.Reveal($('#gatoradeModal'));
    // new Foundation.Reveal($('#dietHansenModal'));
    // new Foundation.Reveal($('#hersheysccModal'));
    // new Foundation.Reveal($('#laysscModal'));
    // new Foundation.Reveal($('#laysClassicModal'));
    // new Foundation.Reveal($('#starbucksMochaFrapModal'));
    // new Foundation.Reveal($('#nutellaBreadModal'));
    // new Foundation.Reveal($('#doritosDinamitaModal'));
    // new Foundation.Reveal($('#shoppingCartModal'));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.inventory
    });
  }

  handleAddItem(id) {
      //e.preventDefault();
      // console.log(id + " " + this.props);
      //this.props.onAddItem(e.target.id);
    this.props.onAddItem(id);
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
    var { inventory } = this.props;

    // if (data !== null) {
    //   console.log(data);
    // }
    

    var renderInventory = () => {
      return data.map((item) => {
        var priceValue = item.price.toFixed(2);
        if (item.stock) {
          return (
            <InventoryItem key={item._id} name={item.name} price={priceValue} stock={item.stock} onAddItem={this.handleAddItem}/>
          );
        }
      });
    };

    return (
      <Segment basic>

        <Table sortable celled striped color="blue" size="large">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={8} sorted={column === 'product' ? direction : null} onClick={this.handleSort.bind(this, 'name')}>Product</Table.HeaderCell>
              <Table.HeaderCell width={4} sorted={column === 'price' ? direction : null} onClick={this.handleSort.bind(this, 'price')}>Price</Table.HeaderCell>
              <Table.HeaderCell width={3} sorted={column === 'stock' ? direction : null} onClick={this.handleSort.bind(this, 'stock')}>Stock</Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderInventory()}
            {/* <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>*Stock levels may not be up to date.</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>

      </Segment>
    );
  }
}

module.exports = ProductTable;


/* <tr>
  <td>Tangerines (2)</td>
  <td><del style={{'color': 'red'}}>$0.50</del> $0.25</td>
  <td>
    <div className="success progress">
      <span className="progress-meter" style={{width: '48%'}}>
        <p className="progress-meter-text">12</p>
      </span>
    </div>
  </td>
</tr> */
