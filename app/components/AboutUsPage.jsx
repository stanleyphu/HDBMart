var React = require('react');

var AboutUsPage = React.createClass({
  render: function () {
    return (
      <div>
        {/* <h3 className="text-center" id="aboutUs">About Us</h3> */}

        <div className="callout secondary">
          <div className="media-object">
            <div className="media-object-section">
              <div className="thumbnail">
                <img src="http://preview.ibb.co/mm9WHQ/20993388_10209923956154875_1026688284_o.jpg" alt="kona luu" border="0" id="kona-luu" />
              </div>
            </div>
            <div className="media-object-section">
              <h4>Kona Luu, CEO</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor dui diam. Maecenas vulputate nisl at risus rutrum, eget consequat lorem pellentesque. Suspendisse at dui euismod, lacinia nisi et, malesuada urna. Fusce aliquet interdum nunc nec cursus. Sed fringilla dolor neque, sit amet pulvinar dolor egestas at. Curabitur blandit lobortis velit eget dictum. Ut consectetur nibh in quam iaculis suscipit. Donec eu augue vulputate, ultrices ex ultrices, tempus est. Maecenas semper risus ut mauris euismod, aliquam luctus arcu fringilla. Donec nibh purus, mollis at mi ut, lobortis sodales lorem.</p> */}
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
              <h4>Chris Kim, CMO</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor dui diam. Maecenas vulputate nisl at risus rutrum, eget consequat lorem pellentesque. Suspendisse at dui euismod, lacinia nisi et, malesuada urna. Fusce aliquet interdum nunc nec cursus. Sed fringilla dolor neque, sit amet pulvinar dolor egestas at. Curabitur blandit lobortis velit eget dictum. Ut consectetur nibh in quam iaculis suscipit. Donec eu augue vulputate, ultrices ex ultrices, tempus est. Maecenas semper risus ut mauris euismod, aliquam luctus arcu fringilla. Donec nibh purus, mollis at mi ut, lobortis sodales lorem.</p> */}
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
              <h4>Stanley Phu</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor dui diam. Maecenas vulputate nisl at risus rutrum, eget consequat lorem pellentesque. Suspendisse at dui euismod, lacinia nisi et, malesuada urna. Fusce aliquet interdum nunc nec cursus. Sed fringilla dolor neque, sit amet pulvinar dolor egestas at. Curabitur blandit lobortis velit eget dictum. Ut consectetur nibh in quam iaculis suscipit. Donec eu augue vulputate, ultrices ex ultrices, tempus est. Maecenas semper risus ut mauris euismod, aliquam luctus arcu fringilla. Donec nibh purus, mollis at mi ut, lobortis sodales lorem.</p> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = AboutUsPage;
