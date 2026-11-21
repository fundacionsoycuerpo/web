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
		// Deuda conocida, degradada a warning para poder poner lint en CI hoy.
		// Cada regla queda visible en cada corrida: no estan silenciadas.
		//
		//   no-navigation-without-resolve (40): href internos sin resolve() de
		//     SvelteKit. Es refactor de navegacion, no de tooling.
		//   no-explicit-any (11): tipos incompletos que vienen del export de
		//     Strapi. Requiere tipar los datos reales.
		//   no-at-html-tags (3): {@html} con el resultado de marked. Es
		//     deliberado, el contenido es propio.
		//
		// Cuando cada una llegue a 0, subir a 'error'.
		rules: {
			'svelte/no-navigation-without-resolve': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'svelte/no-at-html-tags': 'warn'
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
