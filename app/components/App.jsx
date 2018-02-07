var React = require('react');
import { Link, IndexLink } from 'react-router'

import { Menu, Segment } from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
      this.setState({
          activeItem: name
      });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment basic>
        <Menu pointing secondary size="large" color="blue">
          <Menu.Item 
            as={IndexLink} to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Luu Mart
          </Menu.Item>

          <Menu.Item
            as={Link} to='/aboutus'
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}
          >
            About Us
          </Menu.Item>

          <Menu.Item
            as={Link} to='/contactus'
            name='contactUs'
            active={activeItem === 'contactUs'}
            onClick={this.handleItemClick}
          >
            Contact Us
          </Menu.Item>
        </Menu>
        </Segment>

        {/* <h1 className="text-center" id="martName" style={{'color': 'blue'}}>Luu's FuErDai</h1> */}

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = App;
