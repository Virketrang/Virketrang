import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
    preventDefault: PropTypes.bool,
};

export default propTypes;
