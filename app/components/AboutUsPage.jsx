var React = require('react');

import { Container, Segment, Card, Image, Divider } from 'semantic-ui-react'

var AboutUsPage = React.createClass({
  render: function () {
    return (
      <Container>
        <Segment padded raised size="big" color="blue">
          <p className="about-text">
            Here at the Luu Mart, our main focus and goal is to provide the best service to our customers at prices you have never seen before.
            We strive our ambition and goals towards obtaining the optimal success that we can bring to the table by offering premium quality
            items that no other store can provide. Our goal is not only to expand our vision, but to share with our customers our experience and
            to hear valuable feedback from them that can help us strive for the better.
          </p>
        </Segment>

        <Divider section />

        <Card.Group centered itemsPerRow={3}>
          <Card color='blue'>
            <Image src="http://image.ibb.co/dPBzsQ/kona_luu_profile.jpg" />
            <Card.Content>
              <Card.Header>
                Kona Luu
              </Card.Header>
              <Card.Meta>
                CEO and Founder
              </Card.Meta>
              <Card.Description>
                Kona graduated from the University of California, San Diego in 2015 with a Bachelor of Science in Electrical Engineering and a minor in
                Business. His studies at UCSD has prepared him to embark on a new journey that will allow him to find an opportunity to do good for the
                community around him.<br/><br/>
                Kona’s interests include tennis, golf and basketball. He was played tennis almost all his life and has competed competitively from
                his younger days till college graduation. He enjoys playing sports in general and loves listening to music. EDM and Chinese are his top
                two categories.<br/><br/>
                In a couple years, Kona plans on going back to school to work on his MBA so that he can further pursue his dreams of mixing engineering
                with business as he sees that as one of his passions. He is also open to conversation and enjoys socializing with people so please feel
                free to contact him if you have any thoughts, questions, or opinions you’d like to share with him.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card color='blue'>
            <Image src="http://preview.ibb.co/hpGYWk/20993326_10209923960114974_1742713695_o.jpg" />
            <Card.Content>
              <Card.Header>
                Chris Kim
              </Card.Header>
              <Card.Meta>
                Chief Marketing Officer
              </Card.Meta>
              <Card.Description>
                Christopher graduated from the University of California, San Diego in 2016 with a Bachelor of Science in Electrical Engineering and an area of
                focus on Content Marketing. Christopher decided to use his area of expertise in Marketing and Adobe to provide a much needed marketing campaign
                for the mart.<br/><br/>
                His interest lie in snowboarding, basketball, and hitting the gym. He grew up near the mountains so is considered one of the top snowboarders
                in his area. He enjoys watching the Los Angeles Lakers play and considers Kobe Bryant the best player of all time.<br/><br/>
                Christopher’s responsibilities will be to provide market research and to advertise the mart in ways never seen before to attract customers.
                He will be focused on knowing what the consumers want and how we can tailor our mart to be successful to all sorts of consumers.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card color='blue'>
            <Image src="http://preview.ibb.co/cEfSrk/Singles6_3.jpg" />
            <Card.Content>
              <Card.Header>
                Stanley Phu
              </Card.Header>
              <Card.Meta>
                Chief Web Officer
              </Card.Meta>
              <Card.Description>
                Stanley graduated from the University of California, San Diego in 2016 with a Bachelor of Science in Electrical Engineering and a depth in
                Software Systems. Stanley joined the franchise as he had a vision of applying his software knowledge to help further his experience.<br/><br/>
                His interests include basketball, tennis, and working out but he enjoys playing all types of sports. His favorite sports teams are the Lakers,
                Dodgers, and Raiders. He also likes learning about new technology and working on software projects in his spare time.<br/><br/>
                Stanley’s responsibilities will be to manage and update the online website as well as find ways moving forward to enhance the customer
                experience of purchasing items. He will also implement new features on the site that will put our company in a position to continue to strive.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>

      </Container>
    );
  }
});

module.exports = AboutUsPage;
