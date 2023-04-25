import { Header, Logo, Toolbar } from '@components';

import AppHeaderComponent from './app-header.component.types';
import { memo } from 'react';

const AppHeader: AppHeaderComponent = ({ setOpen }) => {
    return (
        <Header>
            <Toolbar>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 96 960 960"
                    width="32"
                    style={{ fill: 'white', cursor: 'pointer' }}>
                    <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
                </svg>
            </Toolbar>
            <Logo>Liedecke & Noergaard</Logo>
            <Toolbar>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 96 960 960"
                    width="32"
                    style={{ fill: 'white', cursor: 'pointer' }}
                    onClick={() => setOpen(true)}>
                    <path d="M220 976q-24 0-42-18t-18-42V396q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480 176q63 0 106.5 43.5T630 326v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520V396H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570 486v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330 486v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220 916V396v520Z" />
                </svg>
            </Toolbar>
        </Header>
    );
};

export default memo(AppHeader);
