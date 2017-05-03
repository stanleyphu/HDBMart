var React = require('react');

var Main = (props) => {
  return (
    <div>
      <h1>HDB Mart</h1>
      <table className="hover">
        <thead>
          <tr>
            <th width="200">Product</th>
            <th width="200">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tangerines</td>
            <td>2 for $0.25</td>
          </tr>
          <tr>
            <td>Bread and Nutella</td>
            <td>$0.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

module.exports = Main;
