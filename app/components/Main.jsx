var React = require('react');

var Main = (props) => {
  return (
    <div>
      <h1 className="text-center">HDB Mart</h1>
      <table className="hover">
        <thead>
          <tr>
            <th width="200">Product</th>
            <th width="200">Price</th>
            <th width="100">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tangerines</td>
            <td>2 for $0.25</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Bread and Nutella</td>
            <td>$0.50</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Water bottle</td>
            <td>$0.75</td>
            <td>20</td>
          </tr>
          <tr>
            <td>More items coming soon!!</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

module.exports = Main;
