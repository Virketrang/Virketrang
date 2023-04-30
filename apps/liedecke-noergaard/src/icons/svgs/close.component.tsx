import { memo } from 'react';

import { SVG } from '@resolut/server';

const Close = memo(() => {
    return (
        <SVG
            viewBox="0 96 960 960"
            path="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
        />
    );
});

Close.displayName = 'Close';

export default Close;
