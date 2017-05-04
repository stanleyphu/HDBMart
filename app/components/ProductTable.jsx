var React = require('react');

var ProductTable = (props) => {
  return (
    <div>
      <table className="hover">
        <thead>
          <tr>
            <th width="200">Product</th>
            <th width="100">Price</th>
            <th width="100">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tangerines (2)</td>
            <td><del style={{'color': 'red'}}>$0.50</del> $0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '56%'}}>
                  <p className="progress-meter-text">14</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Banana</td>
            <td><del style={{'color': 'red'}}>$0.50</del> $0.25</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '24%'}}>
                  <p className="progress-meter-text">6</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Bread with Nutella</td>
            <td>$0.50</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '40%'}}>
                  <p className="progress-meter-text">10</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Everything Bagel with Cream Cheese</td>
            <td>$1.00</td>
            <td>
              <div className="alert progress">
                <span className="progress-meter" style={{width: '4%'}}>
                  <p className="progress-meter-text">1</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Cinnamon Bagel with Cream Cheese</td>
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
                <span className="progress-meter" style={{width: '60%'}}>
                  <p className="progress-meter-text">15</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lays Classic</td>
            <td>$0.25</td>
            <td>
              <div className="success progress">
                <span className="progress-meter" style={{width: '44%'}}>
                  <p className="progress-meter-text">11</p>
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
                <span className="progress-meter" style={{width: '28%'}}>
                  <p className="progress-meter-text">7</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lays Sour Cream & Onion</td>
            <td>$0.25</td>
            <td>
              <div className="alert progress">
                <span className="progress-meter" style={{width: '12%'}}>
                  <p className="progress-meter-text">3</p>
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
            <td>Gatorade (Lemon-Lime)</td>
            <td>$1.00</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '32%'}}>
                  <p className="progress-meter-text">8</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Starbucks Mocha Frappuccino</td>
            <td>$2.00</td>
            <td>
              <div className="alert progress">
                <span className="progress-meter" style={{width: '16%'}}>
                  <p className="progress-meter-text">4</p>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Hensen Diet Soda (Cherry) - NO CALORIES OR SUGAR</td>
            <td>$0.75</td>
            <td>
              <div className="warning progress">
                <span className="progress-meter" style={{width: '32%'}}>
                  <p className="progress-meter-text">8</p>
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
            <td></td>
            <td>*Stock levels may not be up to date</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th width="200">Breakfast</th>
            <th width="200"></th>
            <th width="100"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

module.exports = ProductTable;
