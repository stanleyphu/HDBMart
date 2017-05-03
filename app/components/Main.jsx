var React = require('react');
var ProductTable = require('ProductTable');

var Main = (props) => {
  return (
    <div>
      <h1 className="alert text-center">GRAND OPENING</h1>
      <h2 className="text-center">Luu's FuErDai</h2>
      <ProductTable />
      <h3 className="text-center">For any questions, please contact Kona Luu, CEO, by e-mail or Lync at kluu@greenlee.textron.com.</h3>
    </div>
  );
};

module.exports = Main;
