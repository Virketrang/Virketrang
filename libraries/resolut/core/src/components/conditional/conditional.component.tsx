import ConditionalComponent from './conditional.component.types';

const Conditional: ConditionalComponent = ({ condition, fallback = null, children }) => {
    return condition ? children : fallback;
};

export default Conditional;
