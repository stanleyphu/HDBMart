var React = require('react');

import { Table, Progress, Button, Segment, Modal } from 'semantic-ui-react'

class InventoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  handleAddItem(e, data) {
    e.preventDefault();
    //console.log(e);
    // console.log(e.target.id);
    this.setState({
      modalOpen: true
    })

    this.props.onAddItem(data.id);
  }

  handleClose() {
    this.setState({
      modalOpen: false
    })
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
        <Table.Cell>
          <Modal size="tiny" open={this.state.modalOpen} onClose={this.handleClose} trigger={<Button primary onClick={this.handleAddItem} id={name}>Add</Button>} >
            <Modal.Header>Added to Cart</Modal.Header>
            <Modal.Content>
              <p><a href="#shoppingCart" onClick={this.handleClose}>Go to Shopping Cart</a></p>
            </Modal.Content>
          </Modal>
        </Table.Cell>
      </Table.Row>
    )
  }
}

module.exports = InventoryItem;
