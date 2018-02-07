var React = require('react');

import { Container, Image, Header } from 'semantic-ui-react'

var ContactUsPage = React.createClass({
  render: function () {
    return (
      <Container>
        <Header as="h1" textAlign="center">
          For any questions, please contact Kona Luu, CEO, by e-mail or Lync at kluu@greenlee.textron.com.
        </Header>

        <Image centered src="https://preview.ibb.co/k6DWAk/kona_luu.jpg" alt="kona luu" border="0" id="konaluu" />
      </Container>
    );
  }
});

module.exports = ContactUsPage;
