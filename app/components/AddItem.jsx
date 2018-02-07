var React = require('react');

import { Form, Button, Message } from 'semantic-ui-react'

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      stock: '',
      price: '',
      error: false
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleFormChange(e, { name, value } ) {
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  onFormSubmit () {
    const { item, stock, price } = this.state;

    console.log(item);
    console.log(stock);
    console.log(price);

    //alert(this.refs.item.value + ': ' + this.refs.stock.value + ' ' + this.refs.price.value + '!');

    var itemName = item;
    var itemStock = stock;
    var itemPrice = price;

    // Check for valid inputs
    if (itemName.length <= 0) {
      this.setState({
        error: true
      });
      // this.refs.item.focus();
    }
    else if (!itemStock || itemStock < 0) {
      this.setState({
        error: true
      });
      // this.refs.stock.focus();
    }
    else if (!itemPrice || itemPrice < 0) {
      this.setState({
        error: true
      });
      // this.refs.price.focus();
    }
    else {
      this.setState({
        item: '',
        stock: '',
        price: '',
        error: false 
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
    const { item, stock, price, error } = this.state;

    return (
      // <div>
      //   <div style={{'textAlign': 'center'}}>
      //     <form onSubmit={this.onFormSubmit} style={{display: 'inline-block'}}>
      //       <input type="text" ref="item" placeholder="Enter item" style={{display: 'inline-block', width: '400px', 'margin-right': '10px'}}/>
      //       <input type="number" ref="stock" placeholder="Stock" style={{display: 'inline-block', width: '100px', 'margin-right': '10px'}}/>
      //       <input type="number" ref="price" placeholder="Price" step="0.05" style={{display: 'inline-block', width: '100px', 'margin-right': '10px'}}/>
      //       <button className="button primary" style={{display: 'inline-block', width: '100px', margin: 'auto'}}>Submit</button>
      //     </form>
      //   </div>
      // </div>

      <Form onSubmit={this.onFormSubmit} error={error} >
        <Form.Group>
          <Form.Input placeholder='Enter item' name='item' value={item} onChange={this.handleFormChange} />
          <Form.Input placeholder='Stock' name='stock' value={stock} onChange={this.handleFormChange} />
          <Form.Input placeholder='Price' name='price' value={price} onChange={this.handleFormChange} />
          <Form.Button content='Submit' />
        </Form.Group>
        <Message 
          error
          header="Error"
          content="Invalid value"
        />
      </Form>
    );
  }
}

module.exports = AddItem;
