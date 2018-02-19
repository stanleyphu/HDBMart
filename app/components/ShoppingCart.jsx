var React = require('react');

import { Container, Table, Button } from 'semantic-ui-react'

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
  }

  handleRemoveCartItem(e, data) {
    e.preventDefault();
    console.log(e.target.id);
    console.log(data.id);
    this.props.onRemoveCartItem(data.id);
  }

  render() {
    var {items} = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return (
          // <tr key={item.id}>
          //   <td>
          //     <button onClick={this.handleRemoveCartItem} id={item.name} className="alert button" type="button">
          //       <span aria-hidden="true">&times;</span>
          //     </button>
          //   </td>
          //   <td>{item.name}</td>
          //   <td>{item.price}</td>
          // </tr>
          <Table.Row key={item.id}>
            <Table.Cell>
              <Button negative onClick={this.handleRemoveCartItem} id={item.name}>
                Remove
              </Button>
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.price}</Table.Cell>
          </Table.Row>
        );
      });
    };

    return (
      <Container id="shoppingCart">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}/>
              <Table.HeaderCell width={8}>Product</Table.HeaderCell>
              <Table.HeaderCell width={6}>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderItems()}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

module.exports = ShoppingCart;
