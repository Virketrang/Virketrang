import { Dispatch, FunctionComponent, SetStateAction } from 'react';

type AppHeaderComponent = FunctionComponent<{ setOpen: Dispatch<SetStateAction<boolean>> }>;

export default AppHeaderComponent;
