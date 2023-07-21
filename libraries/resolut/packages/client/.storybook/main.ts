import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    env: {},
    core: {},
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    features: {
        storyStoreV7: true
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            define: {
                'process.env': {}
            },
            resolve: {
                alias: [
                    {
                        find: '@/styles',
                        replacement: resolve(__dirname, '../../../styles')
                    },
                    {
                        find: '@/types',
                        replacement: resolve(__dirname, '../../../types')
                    },
                    {
                        find: '@/utils',
                        replacement: resolve(__dirname, '../../../utils')
                    },
                    {
                        find: '@/packages',
                        replacement: resolve(__dirname, '../../../../../packages')
                    },
                    {
                        find: '@',
                        replacement: resolve(__dirname, '../src')
                    }
                ]
            }
        })
    },
    docs: {
        autodocs: true
    },
    staticDirs: ['../../../../../packages/fonts/material-symbols-outlined']
}
export default config
