var React = require('react');
var ProductTable = require('ProductTable');

var Main = (props) => {
  return (
    <div>
      <h1 className="text-center">GRAND OPENING</h1>
      <h2 className="text-center">Luu Run</h2>
      <ProductTable />
      <h3 className="text-center">For any questions, please contact Kona Luu at kluu@greenlee.textron.com or find him in the Engineering Department.</h3>
    </div>
  );
};

module.exports = Main;
