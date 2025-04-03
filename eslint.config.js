import { default as eslint, default as pluginJs } from '@eslint/js';

import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    eslint.configs.recommended,
    pluginJs.configs.recommended,
    prettier,
    prettierPluginRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        ignores: [
            'build/',
            '.svelte-kit/',
            'dist/',
            'node_modules/*',
            'examples',
            './src/lib/js/lib/*',
            './public/lib/',
        ],
    },
    {
        rules: {
            'no-console': 'warn',
            'semi': ['error', 'always'],
        },
    },
];
