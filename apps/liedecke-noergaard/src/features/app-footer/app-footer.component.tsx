import AppFooterComponent from './app-footer.component.types';
import { footer } from './app-footer.component.module.sass';
import { memo } from 'react';

const AppFooter: AppFooterComponent = ({}) => {
    return <footer className={footer}></footer>;
};

export default memo(AppFooter);
