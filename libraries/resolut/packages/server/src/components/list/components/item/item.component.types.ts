import { ComponentPropsWithoutRef, RefAttributes } from 'react';

import { ResolutComponent } from 'types/index';

export interface ListItemProps extends ComponentPropsWithoutRef<'li'> {}

export type ListItemRef = RefAttributes<HTMLLIElement>;

type ListItemComponent = ResolutComponent<ListItemProps & ListItemRef>;

export default ListItemComponent;
