describe('Fundación Soy Cuerpo - Content', () => {
	it('/', () => {
		cy.visit('/');
		cy.findByRole('heading', { name: /fundación soy cuerpo/i }).should('exist');
		cy.findByRole('heading', { name: /noticias/i }).should('exist');
		cy.findByRole('heading', { name: /alianzas y colaboraciones/i }).should('exist');
	});

	it('/quienes_somos', () => {
		cy.visit('/quienes_somos');
		cy.findByRole('heading', { name: /quienes somos/i }).should('exist');
		cy.findByRole('heading', { name: /acerca de nosotros/i }).should('exist');
		cy.findByRole('heading', { name: /misión/i }).should('exist');
		cy.findByRole('heading', { name: /visión/i }).should('exist');
	});

	it('/equipo', () => {
		cy.visit('/equipo');
		cy.findByRole('heading', { name: /equipo humano/i }).should('exist');
	});

	it('/donaciones', () => {
		cy.visit('/donaciones');
		cy.findByRole('heading', { name: /donaciones/i }).should('exist');
		cy.findByRole('heading', { name: /¡Hazte socia\/socio!/i }).should('exist');
		cy.findByRole('heading', { name: /donación única online/i }).should('exist');
		cy.findByRole('heading', {
			name: /donación por transferencia bancaria/i
		}).should('exist');
	});

	it('/noticias', () => {
		cy.visit('/noticias');
		cy.findByRole('heading', { name: /noticias/i }).should('exist');
	});

	it('/proyectos', () => {
		cy.visit('/proyectos');
		cy.findByRole('heading', { name: /proyectos/i }).should('exist');
		cy.findByRole('link', { name: /el cuerpo de la memoria/i }).should('exist');
		cy.findByRole('link', { name: /somos cerro/i }).should('exist');
		cy.findByRole('link', { name: /cuerpo territorio/i }).should('exist');
	});

	it('/departamentos/arte', () => {
		cy.visit('/departamentos/arte');
		cy.findByRole('heading', { name: /departamento de arte/i }).should('exist');
		cy.findByRole('heading', { name: /manifiesto/i }).should('exist');
	});

	it('/departamentos/plataformas', () => {
		cy.visit('/departamentos/plataformas');
		cy.findByRole('heading', { name: /departamento de plataformas/i }).should('exist');
		cy.findByRole('heading', { name: /manifiesto/i }).should('exist');
	});

	it('/departamentos/salud', () => {
		cy.visit('/departamentos/salud');
		cy.findByRole('heading', { name: /departamento de salud/i }).should('exist');
		cy.findByRole('heading', { name: /manifiesto/i }).should('exist');
	});

	it('/galeria', () => {
		cy.visit('/galeria');
		cy.findByRole('heading', { name: /galería/i }).should('exist');
	});

	it('/documentos', () => {
		cy.visit('/documentos');
		cy.findByRole('heading', { name: /documentos/i }).should('exist');
	});
});
