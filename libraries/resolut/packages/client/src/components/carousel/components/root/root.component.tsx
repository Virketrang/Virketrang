import { forwardRef, memo } from 'react';
import CarouselRootComponent from './root.component.types';

const CarouselRoot: CarouselRootComponent = memo(
    forwardRef(({ className = '', ...props }, ref) => {
        const classNames = `${className}`;

        return <div className={classNames} {...props} ref={ref} />;
    })
);

export default CarouselRoot;
