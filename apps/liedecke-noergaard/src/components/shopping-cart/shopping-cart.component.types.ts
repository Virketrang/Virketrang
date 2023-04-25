import { Dispatch, FunctionComponent, SetStateAction } from 'react';

type ShoppingCartComponent = FunctionComponent<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>;

export default ShoppingCartComponent;
