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
            <td>
              <div className="alert progress">
                <span className="progress-meter" style={{width: '10%'}}>
                  <p className="progress-meter-text">0</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Bread and Nutella</td>
            <td>$0.50</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '60%'}}>
                  <p className="progress-meter-text">15</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Water bottle</td>
            <td>$0.75</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '70%'}}>
                  <p className="progress-meter-text">20</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>More items coming soon!!</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-center">Web orders current in development!</h3>
    </div>
  );
};

module.exports = Main;
