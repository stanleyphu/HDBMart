var React = require('react');
var ProductTable = require('ProductTable');

var Main = (props) => {
  var username = 'konaluu';
  var amount = '.25';
  var link = `https://venmo.com/?txn=pay&audience=friends&recipients=${username}&amount=${amount}`;

  return (
    <div>
      <h1 className="text-center" style={{'color': 'blue'}}>Luu's FuErDai</h1>
      <ProductTable />
      <h4 className="text-center">For any questions, please contact Kona Luu, CEO, by e-mail or Lync at kluu@greenlee.textron.com.</h4>
      <img src="https://preview.ibb.co/k6DWAk/kona_luu.jpg" alt="kona luu" border="0" id="kona-luu" />
    </div>
  );
};

module.exports = Main;
