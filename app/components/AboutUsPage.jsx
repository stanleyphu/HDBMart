var React = require('react');

var AboutUsPage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="callout">
          <p className="about-text">
            Here at the Luu Mart, our main focus and goal is to provide the best service to our customers at prices you have never seen before.
            We strive our ambition and goals towards obtaining the optimal success that we can bring to the table by offering premium quality
            items that no other store can provide. Our goal is not only to expand our vision, but to share with our customers our experience and
            to hear valuable feedback from them that can help us strive for the better.
          </p>
        </div>

        <div className="callout secondary">
          <div className="media-object">
            <div className="media-object-section">
              <div className="thumbnail">
                <img src="http://preview.ibb.co/mm9WHQ/20993388_10209923956154875_1026688284_o.jpg" alt="kona luu" border="0" id="kona-luu" />
              </div>
            </div>
            <div className="media-object-section">
              <h4>Kona Luu - CEO and Founder of Luu Mart</h4>
              <p className="about-text">
                Kona graduated from the University of California, San Diego in 2015 with a Bachelor of Science in Electrical Engineering and a minor in
                Business. His studies at UCSD has prepared him to embark on a new journey that will allow him to find an opportunity to do good for the
                community around him.
              </p>
              <p className="about-text">
                Kona’s interests include tennis, golf and basketball. He was played tennis almost all his life and has competed competitively from
                his younger days till college graduation. He enjoys playing sports in general and loves listening to music. EDM and Chinese are his top
                two categories.
              </p>
              <p className="about-text">
                In a couple years, Kona plans on going back to school to receive his MBA so that he can further pursue his dreams of mixing engineering
                with business as he sees that as one of his passions. He is also open to conversation and enjoys socializing with people so please feel
                free to contact him if you have any thoughts, questions, or opinions you’d like to share with him.
              </p>
            </div>
          </div>
        </div>

        <div className="callout secondary">
          <div className="media-object">
            <div className="media-object-section">
              <div className="thumbnail">
                <img src="http://preview.ibb.co/hpGYWk/20993326_10209923960114974_1742713695_o.jpg" alt="chris kim" border="0" id="chris-kim" />
              </div>
            </div>
            <div className="media-object-section">
              <h4>Chris Kim - CMO</h4>
              <p className="about-text">
                Christopher graduated from the University of California, San Diego in 2016 with a Bachelor of Science in Electrical Engineering and an area of
                focus on Content Marketing. Christopher decided to use his area of expertise in Marketing and Adobe to provide a much needed marketing campaign
                for the mart.
              </p>
              <p className="about-text">
                His interest lie in snowboarding, basketball, and hitting the gym. He grew up near the mountains so is considered one of the top snowboarders
                in his area. He enjoys watching the Los Angeles Lakers play and considers Kobe Bryant the best player of all time.
              </p>
              <p className="about-text">
                Christopher’s responsibilities will be to provide market research and to advertise the mart in ways never seen before to attract customers.
                He will be focused on knowing what the consumers want and how we can tailor our mart to be successful to all sorts of consumers.
              </p>
            </div>
          </div>
        </div>

        <div className="callout secondary">
          <div className="media-object">
            <div className="media-object-section">
              <div className="thumbnail">
                <img src="http://preview.ibb.co/cEfSrk/Singles6_3.jpg" alt="stanley phu" border="0" id="stanley-phu" />
              </div>
            </div>
            <div className="media-object-section">
              <h4>Stanley Phu - CWO</h4>
              <p className="about-text">
                Stanley graduated from the University of California, San Diego in 2016 with a Bachelor of Science in Electrical Engineering and a depth in
                Software Systems. Stanley joined the franchise as he had a vision of applying his software knowledge to help further his experience.
              </p>
              <p className="about-text">
                Stanley’s responsibilities will be to manage and update the online website as well as find ways moving forward to enhance the customer
                experience of purchasing items. He will also implement new features on the site that will put our company in a position to continue to strive.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = AboutUsPage;
