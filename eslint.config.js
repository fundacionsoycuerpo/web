import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		// Cypress corre en un contexto con sus propios globals (cy, it, describe...)
		files: ['cypress/**/*.js'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.mocha,
				cy: 'readonly',
				Cypress: 'readonly',
				expect: 'readonly'
			}
		}
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'.netlify/',
			'node_modules/',
			'package/',
			'cypress/screenshots/',
			'cypress/videos/',
			'test-results/',
			'playwright-report/'
		]
	}
);
