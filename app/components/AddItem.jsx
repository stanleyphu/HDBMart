var React = require('react');

import { Container, Form, Button, Message } from 'semantic-ui-react'

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      stock: '',
      price: '',
      error: false,
      itemError: false,
      stockError: false,
      priceError: false
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleFormChange(e, { name, value } ) {
    this.setState({
      [name]: value
    });
  }

  onFormSubmit () {
    const { item, stock, price } = this.state;

    console.log(item);
    console.log(stock);
    console.log(price);

    var itemName = item;
    var itemStock = stock;
    var itemPrice = price;

    // Check for valid inputs
    if (itemName.length <= 0) {
      this.setState({
        error: true,
        itemError: true
      });
      // this.refs.item.focus();
    }
    else if (!itemStock || itemStock < 0) {
      this.setState({
        error: true,
        stockError: true
      });
      // this.refs.stock.focus();
    }
    else if (!itemPrice || itemPrice < 0) {
      this.setState({
        error: true,
        priceError: true
      });
      // this.refs.price.focus();
    }
    else {
      this.setState({
        item: '',
        stock: '',
        price: '',
        error: false,
        itemError: false,
        stockError: false,
        priceError: false
      });
      // this.refs.item.focus();

      // Pass up to app - call props handler
      this.props.onFormSubmit({
        name: itemName,
        stock: itemStock,
        price: itemPrice
      });
    }

  }

  render () {
    const { item, stock, price, error, itemError, stockError, priceError } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onFormSubmit} error={error}>
          <Form.Group>
            <Form.Input placeholder='Enter item' name='item' value={item} onChange={this.handleFormChange} width={10} error={itemError}/>
            <Form.Input placeholder='Stock' name='stock' value={stock} onChange={this.handleFormChange} width={3} error={stockError}/>
            <Form.Input placeholder='Price' name='price' value={price} onChange={this.handleFormChange} width={3} icon="usd" iconPosition="left" error={priceError}/>
            <Form.Button content='Submit' />
          </Form.Group>
          <Message 
            error
            header="Error"
            content="Invalid value"
          />
        </Form>
      </Container>
    );
  }
}

module.exports = AddItem;
