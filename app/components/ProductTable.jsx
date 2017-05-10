var React = require('react');

var ProductTable = React.createClass({
  componentDidMount: function() {
    new Foundation.Reveal($('#appleModal'));
    new Foundation.Reveal($('#bagelModal'));
    new Foundation.Reveal($('#cheetosModal'));
    new Foundation.Reveal($('#doritosModal'));
    new Foundation.Reveal($('#emergencModal'));
    new Foundation.Reveal($('#fritosModal'));
    new Foundation.Reveal($('#gatoradeModal'));
    new Foundation.Reveal($('#dietHansenModal'));
    new Foundation.Reveal($('#hersheysccModal'));
    new Foundation.Reveal($('#laysscModal'));
    new Foundation.Reveal($('#laysClassicModal'));
    new Foundation.Reveal($('#starbucksMochaFrapModal'));
    new Foundation.Reveal($('#nutellaBreadModal'));
  },
  render: function() {
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
              <td><a data-open="appleModal" style={{color: 'black', display: 'block'}}>Apple</a></td>
              <td>$0.25</td>
              <td>
                <div className="alert progress">
                  <span className="progress-meter" style={{width: '8%'}}>
                    <p className="progress-meter-text">2</p>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td><a data-open="nutellaBreadModal" style={{color: 'black', display: 'block'}}>Bread with Nutella</a></td>
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
              <td><a data-open="bagelModal" style={{color: 'black', display: 'block'}}>Everything Bagel with Cream Cheese</a></td>
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
              <td><a data-open="hersheysccModal" style={{color: 'black', display: 'block'}}>Hershey's Cookies & Cream</a></td>
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
              <td><a data-open="cheetosModal" style={{color: 'black', display: 'block'}}>Cheetos Crunchy</a></td>
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
              <td><a data-open="laysClassicModal" style={{color: 'black', display: 'block'}}>Lays Classic</a></td>
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
              <td><a data-open="fritosModal" style={{color: 'black', display: 'block'}}>Fritos Original</a></td>
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
              <td><a data-open="doritosModal" style={{color: 'black', display: 'block'}}>Doritos Nacho Cheese</a></td>
              <td>$0.25</td>
              <td>
                <div className="alert progress">
                  <span className="progress-meter" style={{width: '20%'}}>
                    <p className="progress-meter-text">5</p>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td><a data-open="laysscModal" style={{color: 'black', display: 'block'}}>Lays Sour Cream & Onion</a></td>
              <td>$0.25</td>
              <td>
                <div className="alert progress">
                  <span className="progress-meter" style={{width: '4%'}}>
                    <p className="progress-meter-text">1</p>
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
              <td><a data-open="gatoradeModal" style={{color: 'black', display: 'block'}}>Gatorade (Lemon-Lime)</a></td>
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
              <td><a data-open="starbucksMochaFrapModal" style={{color: 'black', display: 'block'}}>Starbucks Mocha Frappuccino</a></td>
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
              <td><a data-open="dietHansenModal" style={{color: 'black', display: 'block'}}>Hensen Diet Soda (Cherry) - NO CALORIES OR SUGAR</a></td>
              <td>$0.75</td>
              <td>
                <div className="warning progress">
                  <span className="progress-meter" style={{width: '24%'}}>
                    <p className="progress-meter-text">6</p>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td><a data-open="emergencModal" style={{color: 'black', display: 'block'}}>Emergen-C Packet (Orange)</a></td>
              <td>$0.50</td>
              <td>
                <div className="warning progress">
                  <span className="progress-meter" style={{width: '24%'}}>
                    <p className="progress-meter-text">6</p>
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


        <div className="reveal" id="appleModal" data-reveal="">
          <img src="https://c1.staticflickr.com/9/8149/7118185745_067c4f833a.jpg" alt="apple" border="0" id="apple" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="bagelModal" data-reveal="">
          <img src="https://image.ibb.co/mymoO5/Bagel.jpg" alt="bagel" border="0" id="bagel" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="cheetosModal" data-reveal="">
          <img src="https://image.ibb.co/gBVtqk/cheetos.jpg" alt="cheetos" border="0" id="cheetos" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="doritosModal" data-reveal="">
          <img src="https://image.ibb.co/eeUWbQ/doritos.jpg" alt="doritos" border="0" id="doritos" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="emergencModal" data-reveal="">
          <img src="https://image.ibb.co/jpuKVk/Emergen_C.jpg" alt="emergenc" border="0" id="emergenc" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="fritosModal" data-reveal="">
          <img src="https://image.ibb.co/eLcv35/fritos.jpg" alt="fritos" border="0" id="fritos" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="gatoradeModal" data-reveal="">
          <img src="https://image.ibb.co/nfHjwQ/gatorade.jpg" alt="gatorade" border="0" id="gatorade" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="dietHansenModal" data-reveal="">
          <img src="https://image.ibb.co/hvYPwQ/Hansens.jpg" alt="dietHansen" border="0" id="dietHansen" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="hersheysccModal" data-reveal="">
          <img src="https://image.ibb.co/dM32i5/Hersheys.jpg" alt="hersheyscc" border="0" id="hersheyscc" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="laysscModal" data-reveal="">
          <img src="https://image.ibb.co/fHZmAk/Lays_sour_cream_and_onion.jpg" alt="layssc" border="0" id="layssc" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="laysClassicModal" data-reveal="">
          <img src="https://image.ibb.co/eQ6cGQ/Lays.jpg" alt="laysClassic" border="0" id="laysClassic" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="starbucksMochaFrapModal" data-reveal="">
          <img src="https://image.ibb.co/gjorbQ/Mocha_Frap.jpg" alt="starbucksMochaFrap" border="0" id="starbucksMochaFrap" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="reveal" id="nutellaBreadModal" data-reveal="">
          <img src="https://image.ibb.co/b7nTO5/Nutella_with_Bread.jpg" alt="nutellaBread" border="0" id="nutellaBread" />
          <button className="close-button" data-close="" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      </div>
    );
  }
});

module.exports = ProductTable;


/* <tr>
  <td>Tangerines (2)</td>
  <td><del style={{'color': 'red'}}>$0.50</del> $0.25</td>
  <td>
    <div className="success progress">
      <span className="progress-meter" style={{width: '48%'}}>
        <p className="progress-meter-text">12</p>
      </span>
    </div>
  </td>
</tr> */
