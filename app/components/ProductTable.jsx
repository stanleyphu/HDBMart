var React = require('react');

var InventoryItem = require('InventoryItem');

var ProductTable = React.createClass({
  componentDidMount: function() {
    new Foundation.Reveal($('#appleModal'));
    new Foundation.Reveal($('#bagelModal'));
    new Foundation.Reveal($('#cheetosModal'));
    new Foundation.Reveal($('#emergencModal'));
    new Foundation.Reveal($('#fritosModal'));
    new Foundation.Reveal($('#gatoradeModal'));
    new Foundation.Reveal($('#dietHansenModal'));
    new Foundation.Reveal($('#hersheysccModal'));
    new Foundation.Reveal($('#laysscModal'));
    new Foundation.Reveal($('#laysClassicModal'));
    new Foundation.Reveal($('#starbucksMochaFrapModal'));
    new Foundation.Reveal($('#nutellaBreadModal'));
    new Foundation.Reveal($('#doritosDinamitaModal'));

    new Foundation.Reveal($('#shoppingCartModal'));
  },
  handleAddItem: function (id) {
      //e.preventDefault();
      //console.log(e.target.id);
      //this.props.onAddItem(e.target.id);
    this.props.onAddItem(id);
  },
  render: function() {
    var {inventory} = this.props;

    var renderInventory = () => {
      return inventory.map((item) => {
        var priceValue = item.price.toFixed(2);
        if (item.stock) {
          return (
            <InventoryItem key={item._id} name={item.name} price={priceValue} stock={item.stock} onAddItem={this.handleAddItem}/>
          );
        }
      });
    };

    return (
      <div>
        <table className="hover stack">
          <thead>
            <tr>
              <th width="500">Product</th>
              <th width="200">Price</th>
              <th width="200">Stock</th>
              <th width="100"></th>
            </tr>
          </thead>
          <tbody>
            {renderInventory()}
            <tr>
              <td></td>
              <td>*Stock levels may not be up to date.</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="reveal" id="shoppingCartModal" data-reveal="">
          <p className="lead">Added to cart!</p>
          <p><a href="#shoppingCart" data-close="">Go to Shopping Cart</a></p>
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>



        <div className="reveal" id="appleModal" data-reveal="">
          <img src="https://c1.staticflickr.com/9/8149/7118185745_067c4f833a.jpg" alt="apple" border="0" id="apple" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="bagelModal" data-reveal="">
          <img src="https://image.ibb.co/mymoO5/Bagel.jpg" alt="bagel" border="0" id="bagel" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="cheetosModal" data-reveal="">
          <img src="https://image.ibb.co/gBVtqk/cheetos.jpg" alt="cheetos" border="0" id="cheetos" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="emergencModal" data-reveal="">
          <img src="https://image.ibb.co/jpuKVk/Emergen_C.jpg" alt="emergenc" border="0" id="emergenc" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="fritosModal" data-reveal="">
          <img src="https://image.ibb.co/eLcv35/fritos.jpg" alt="fritos" border="0" id="fritos" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="gatoradeModal" data-reveal="">
          <img src="https://image.ibb.co/nfHjwQ/gatorade.jpg" alt="gatorade" border="0" id="gatorade" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="dietHansenModal" data-reveal="">
          <img src="https://image.ibb.co/hvYPwQ/Hansens.jpg" alt="dietHansen" border="0" id="dietHansen" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="hersheysccModal" data-reveal="">
          <img src="https://image.ibb.co/dM32i5/Hersheys.jpg" alt="hersheyscc" border="0" id="hersheyscc" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="laysscModal" data-reveal="">
          <img src="https://image.ibb.co/fHZmAk/Lays_sour_cream_and_onion.jpg" alt="layssc" border="0" id="layssc" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="laysClassicModal" data-reveal="">
          <img src="https://image.ibb.co/eQ6cGQ/Lays.jpg" alt="laysClassic" border="0" id="laysClassic" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="starbucksMochaFrapModal" data-reveal="">
          <img src="https://image.ibb.co/gjorbQ/Mocha_Frap.jpg" alt="starbucksMochaFrap" border="0" id="starbucksMochaFrap" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="nutellaBreadModal" data-reveal="">
          <img src="https://image.ibb.co/b7nTO5/Nutella_with_Bread.jpg" alt="nutellaBread" border="0" id="nutellaBread" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="doritosDinamitaModal" data-reveal="">
          <img src="http://image.ibb.co/fLzWTQ/9e258f75_9991_4a8e_951e_a67ff991d659_1_027d94fd31bcf81764669c45e229678b.jpg" alt="doritosDinamita" border="0" id="doritosDinamita" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>



      </div>
    );
  }
});

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
