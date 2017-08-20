var React = require('react');
var {Link, IndexLink} = require('react-router');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <IndexLink to="/" activeClassName="active-link">Mart Home</IndexLink>
              </li>
            </ul>
          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/aboutus" activeClassName="active-link">About Us</Link>
              </li>
              <li>
                <Link to="/contactus" activeClassName="active-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div id="topBarTitle">
              <h2 className="text-center" id="martName">Luu's FuErDai</h2>
          </div>


        </div>

        {/* <h1 className="text-center" id="martName" style={{'color': 'blue'}}>Luu's FuErDai</h1> */}

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
