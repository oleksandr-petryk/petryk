import PropTypes from 'prop-types';
import Footer from '../Base/Footer.js';
import Navigation from '../Base/Navigation.js';

const BaseLayout = ({ children }) => (
  <>
    {/* block to separate navigation+content form footer */}
    <div className="wrapper">
      <div className="separate">
        {/* navigation */}
        <Navigation />

        {/* page content */}
        {children}
      </div>

      {/* footer */}
      <div className="footer-margin">
        <Footer />
      </div>
    </div>
  </>
);

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
