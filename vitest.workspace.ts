import { defineWorkspace } from 'vitest/config';

const config = defineWorkspace([
    'website',
    'server',
    'dashboard',
    'apps/**',
    'apps/**/server',
    'apps/**/client',
    'apps/**/client/**',
    'libraries/**',
    'libraries/**/packages/**',
    'templates/**',
]);

export default config;
