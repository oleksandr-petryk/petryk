/* eslint react/prop-types: 0 */
import PropTypes from 'prop-types';

import '../styles/base/base.css';
import '../styles/base/footer.css';
import '../styles/base/navigation.css';
import '../styles/base/typography.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

MyApp.PropTypes = {
  Components: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
