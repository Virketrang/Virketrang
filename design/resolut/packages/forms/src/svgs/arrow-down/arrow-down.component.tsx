import { forwardRef, memo } from 'react';

import ArrowDownComponent from './arrow-down.component.types';

const ArrowDown: ArrowDownComponent = memo(
    forwardRef(({ size = 24, xmlns = 'http://www.w3.org/2000/svg', viewBox = '0 96 960 960', ...props }, ref) => {
        return (
            <svg ref={ref} {...props} xmlns={xmlns} height={size} viewBox={viewBox} width={size}>
                <path d="M480 696 280 497h400L480 696Z" />
            </svg>
        );
    })
);

export default ArrowDown;
