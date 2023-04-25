import { forwardRef, memo } from 'react';

import CarouselControlsComponent from './controls.component.types';

const CarouselControls: CarouselControlsComponent = memo(
    forwardRef(({ className = '', ...props }, ref) => {
        return <div className={`${className}`} {...props} ref={ref} />;
    })
);

export default CarouselControls;
