import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    className: PropTypes.oneOfType([
        PropTypes.exact({
            formControl: PropTypes.oneOf([PropTypes.string.isRequired, undefined]).isRequired,
            label: PropTypes.oneOf([PropTypes.string.isRequired, undefined]).isRequired,
            select: PropTypes.oneOf([PropTypes.string.isRequired, undefined]).isRequired,
        }).isRequired,
        PropTypes.oneOf([undefined]).isRequired,
    ]),
};

export default propTypes;
