import { test as baseTest } from '@playwright/test';
import { fixtures } from '@playwright-testing-library/test/fixture';
import type { TestingLibraryFixtures } from '@playwright-testing-library/test/fixture';

const test = baseTest.extend<TestingLibraryFixtures>(fixtures);
const { expect } = test

// describe('Fundación Soy Cuerpo - Content', () => {
test('/', async ({ page, queries }) => {
	await page.goto('/');
	expect(queries.findByRole('heading', { name: /fundación soy cuerpo/i, level: 1 })).toBeTruthy()
	expect(queries.findByRole('heading', { name: /noticias/i })).toBeTruthy()
	expect(queries.findByRole('heading', { name: /alianzas y colaboraciones/i })).toBeTruthy()
});

// test('/quienes_somos', async ({ page, queries }) => {
// 	await page.goto('/quienes_somos');
// 	queries.findByRole('heading', { name: /quienes somos/i, level: 1 }).should('exist');
// 	queries.findByRole('heading', { name: /acerca de nosotros/i }).should('exist');
// 	queries.findByRole('heading', { name: /misión/i }).should('exist');
// 	queries.findByRole('heading', { name: /visión/i }).should('exist');
// });

// test('/equipo', async ({ page, queries }) => {
// 	await page.goto('/equipo');
// 	queries.findByRole('heading', { name: /equipo humano/i, level: 1 }).should('exist');
// });

// test('/donaciones', async ({ page, queries }) => {
// 	await page.goto('/donaciones');
// 	queries.findByRole('heading', { name: /donaciones/i, level: 1 }).should('exist');
// 	queries.findByRole('heading', { name: /¡Hazte socia\/socio!/i }).should('exist');
// 	queries.findByRole('heading', { name: /donación única online/i }).should('exist');
// 	queries.findByRole('heading', {
// 		name: /donación por transferencia bancaria/i
// 	}).should('exist');
// });

// test('/noticias', async ({ page, queries }) => {
// 	await page.goto('/noticias');
// 	queries.findByRole('heading', { name: /noticias/i, level: 1 }).should('exist');
// });

// test('/proyectos', async ({ page, queries }) => {
// 	await page.goto('/proyectos');
// 	queries.findByRole('heading', { name: /proyectos/i, level: 1 }).should('exist');
// 	queries.findByRole('link', { name: /el cuerpo de la memoria/i }).should('exist');
// 	queries.findByRole('link', { name: /somos cerro/i }).should('exist');
// 	queries.findByRole('link', { name: /cuerpo territorio/i }).should('exist');
// });

// test('/departamentos/arte', async ({ page, queries }) => {
// 	await page.goto('/departamentos/arte');
// 	queries.findByRole('heading', { name: /departamento de arte/i, level: 1 }).should('exist');
// 	queries.findByRole('heading', { name: /manifiesto/i }).should('exist');
// });

// test('/departamentos/plataformas', async ({ page, queries }) => {
// 	await page.goto('/departamentos/plataformas');
// 	queries.findByRole('heading', { name: /departamento de plataformas/i, level: 1 }).should('exist');
// 	queries.findByRole('heading', { name: /manifiesto/i }).should('exist');
// });

// test('/departamentos/salud', async ({ page, queries }) => {
// 	await page.goto('/departamentos/salud');
// 	queries.findByRole('heading', { name: /departamento de salud/i, level: 1 }).should('exist');
// 	queries.findByRole('heading', { name: /manifiesto/i }).should('exist');
// });

// test('/galeria', async ({ page, queries }) => {
// 	await page.goto('/galeria');
// 	queries.findByRole('heading', { name: /galería/i, level: 1 }).should('exist');
// });

// test('/documentos', async ({ page, queries }) => {
// 	await page.goto('/documentos');
// 	queries.findByRole('heading', { name: /documentos/i, level: 1 }).should('exist');
// });
// });
