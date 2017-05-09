var React = require('react');
var ProductTable = require('ProductTable');

var Main = (props) => {
  return (
    <div>
      <h1 className="text-center" style={{'color': 'red'}}>GRAND OPENING</h1>
      <h2 className="text-center" style={{'color': 'blue'}}>Luu's FuErDai</h2>
      <ProductTable />
      <h4 className="text-center">For any questions, please contact Kona Luu, CEO, by e-mail or Lync at kluu@greenlee.textron.com.</h4>
      <img src="http://imgur.com/Ewfr3Id"></img>
    </div>
  );
};

module.exports = Main;
