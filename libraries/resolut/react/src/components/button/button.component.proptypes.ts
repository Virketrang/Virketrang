import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    shape: PropTypes.oneOf(['normal', 'round', 'rounded'] as const),
    grow: PropTypes.bool,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    stretch: PropTypes.bool,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
};

export default propTypes;
