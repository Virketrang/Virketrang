import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
        '../../shared/src/**/*.stories.mdx',
        '../../shared/src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
    core: {},
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config, options) {
        return config;
    },
    docs: {
        autodocs: true,
    },
};
export default config;
