import { forwardRef, memo } from 'react';
import CarouselArrowsComponent from './arrows.component.types';

const CarouselArrows: CarouselArrowsComponent = memo(
    forwardRef(({ className = '', ...props }, ref) => {
        const classNames = `${className}`;

        return <div className={classNames} {...props} ref={ref} />;
    })
);

export default CarouselArrows;
