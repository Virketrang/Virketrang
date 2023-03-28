import { forwardRef } from 'react';

import LabelComponent from './lable.component.types';

const Label: LabelComponent = forwardRef(() => {
    return <label htmlFor=""></label>;
});

export default Label;
