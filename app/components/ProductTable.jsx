var React = require('react');

var ProductTable = (props) => {
  return (
    <div>
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
            <td>Tangerines (2)</td>
            <td><del style={{'color': 'red'}}>$0.50</del> $0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '64%'}}>
                  <p className="progress-meter-text">16</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Banana</td>
            <td><del style={{'color': 'red'}}>$0.50</del> $0.25</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '36%'}}>
                  <p className="progress-meter-text">9</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Bread with Nutella</td>
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
                <span className="progress-meter" style={{width: '80%'}}>
                  <p className="progress-meter-text">20</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Emergen-C Packet (Orange)</td>
            <td>$0.50</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '32%'}}>
                  <p className="progress-meter-text">8</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Bagel with Cream Cheese</td>
            <td>$1.00</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '24%'}}>
                  <p className="progress-meter-text">6</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Hershey's Cookies & Cream</td>
            <td>$0.85</td>
            <td>
              <div className="alert progress">
                <span className="progress-meter" style={{width: '8%'}}>
                  <p className="progress-meter-text">2</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Gatorade (Lemon-Lime)</td>
            <td>$1.00</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '20%'}}>
                  <p className="progress-meter-text">5</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Trident Gum (2)</td>
            <td>$0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '40%'}}>
                  <p className="progress-meter-text">10</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Cheetos Crunchy</td>
            <td>$0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '64%'}}>
                  <p className="progress-meter-text">16</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lays Classic</td>
            <td>$0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '48%'}}>
                  <p className="progress-meter-text">12</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Fritos Original</td>
            <td>$0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '40%'}}>
                  <p className="progress-meter-text">10</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Doritos Nacho Cheese</td>
            <td>$0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '32%'}}>
                  <p className="progress-meter-text">8</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lays Sour Cream & Onion</td>
            <td>$0.25</td>
            <td>
              <div className="alert progress">
                <span className="progress-meter" style={{width: '16%'}}>
                  <p className="progress-meter-text">4</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>*Stock levels may not be up to date</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

module.exports = ProductTable;
