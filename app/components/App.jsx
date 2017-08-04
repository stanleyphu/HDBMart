var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="top-bar">
          <h1 className="text-center" style={{'color': 'blue'}}>Luu's FuErDai</h1>
        </div>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
