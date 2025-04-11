import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginJs from '@eslint/js';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the directory name from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'gts',
		'plugin:prettier/recommended',
		'plugin:wc/recommended',
		'plugin:lit/recommended',
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		extraFileExtensions: ['.svelte'],
	},
	ignorePatterns: ['node_modules/*', 'dist', 'examples', 'lib'],
	rules: {
		'prettier/prettier': ['error'],
		'no-param-reassign': ['error', { props: false }],
		'no-underscore-dangle': 'off',
		quotes: ['error', 'backtick'],
		// Add TypeScript-specific rules here
		...tseslint.configs.recommended.rules,
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.html'],
			},
			alias: {
				map: [
					['$', resolve(__dirname, './src')],
					['context', resolve(__dirname, './src/lib/context')],
					['images', resolve(__dirname, './src/lib/images')],
					['style', resolve(__dirname, './src/lib/css')],
					['edit', resolve(__dirname, './src/lib/js/edit')],
					['common', resolve(__dirname, './src/lib/js/common')],
					['components', resolve(__dirname, './src/lib/components')],
					['state', resolve(__dirname, './src/lib/state')],
					['controller', resolve(__dirname, './src/lib/controller')],
					['store', resolve(__dirname, './src/lib/store')],
					['i18n', resolve(__dirname, './src/lib/i18n')],
					['ui', resolve(__dirname, './src/lib/js/ui')],
					['html', resolve(__dirname, './public/html')],
					['app', resolve(__dirname, './app')],
				],
				extensions: ['.js', '.ts', '.html'],
			},
		},
	},
};

export const flatConfig = [
	{
		files: ['**/*.{js,mjs,cjs,ts,svelte}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
				extraFileExtensions: ['.svelte'],
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			svelte: svelte,
			prettier: prettier,
		},
		rules: {
			'prettier/prettier': ['error'],
			'no-param-reassign': ['error', { props: false }],
			'no-underscore-dangle': 'off',
			quotes: ['error', 'backtick'],
			...tseslint.configs.recommended.rules,
		},
		ignores: [
			'.DS_Store',
			'node_modules',
			'build/',
			'.svelte-kit/',
			'package/',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
		],
	},
	pluginJs.configs.recommended,
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
];
