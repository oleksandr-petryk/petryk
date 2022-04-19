import PropTypes from 'prop-types';

const BlankLayout = ({ children }) => (
  <>
    <div className="wrapper">
      {children}
    </div>
  </>
);

BlankLayout.propTypes = {
  children: PropTypes.node,
};

export default BlankLayout;
