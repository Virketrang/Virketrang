import { StorybookConfig } from 'storybook-framework-qwik'
import { mergeConfig } from 'vite'
import workspaceConfig from '../../../../../vite.workspace'

const config: StorybookConfig = {
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: 'storybook-framework-qwik'
    },
    features: {
        storyStoreV7: true
    },
    core: {
        renderer: 'storybook-framework-qwik'
    },
    env: {},
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    async viteFinal(config) {
        return mergeConfig(config, {
            define: {
                'process.env': {}
            },
            resolve: workspaceConfig.resolve as any,
            build: {
                minify: false,
                sourcemap: true
            }
        })
    },
    docs: {
        autodocs: true
    },
    staticDirs: ['../../../../../packages/', '../../../public'],
    typescript: {}
}

export default config
