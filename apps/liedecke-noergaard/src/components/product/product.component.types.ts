import { FunctionComponent } from 'react';

import { Locale } from '@i18n';

type ProductComponent = FunctionComponent<{
    id: number;
    images: { cover: { close: { url: string; alt: string }; distant: { url: string; alt: string } } };
    price: number;
    name: string;
    index: number;
    language: Locale;
    category: 'confecture' | 'cider' | 'utencils';
}>;

export default ProductComponent;
