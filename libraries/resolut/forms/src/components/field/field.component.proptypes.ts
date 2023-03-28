import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.elementType), PropTypes.elementType]).isRequired,
};

export default propTypes;
