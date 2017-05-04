var React = require('react');
var ProductTable = require('ProductTable');

var Main = (props) => {
  return (
    <div>
      <h1 className="text-center" style={{'color': 'red'}}>GRAND OPENING</h1>
      <h2 className="text-center" style={{'color': 'blue'}}>Luu's FuErDai</h2>
      <h3 className="text-center">TODAY ONLY: FREE CHOCOLATE TEDDY GRAHAM CRACKERS W/ ANY PURCHASE OF BAGELS, NUTELLA, OR CHIPS</h3>      
      <ProductTable />
      <h4 className="text-center">For any questions, please contact Kona Luu, CEO, by e-mail or Lync at kluu@greenlee.textron.com.</h4>
    </div>
  );
};

module.exports = Main;
