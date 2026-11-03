describe('Fundación Soy Cuerpo - Navigation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	describe('side menu navigation', () => {
		// Svelte hidrata de forma asíncrona. En un load en frío (o en CI) el click
		// puede llegar antes de que el handler del botón esté adjunto: se pierde y
		// `nav` nunca recibe la clase `open`. Reintentamos el click acotadamente
		// hasta que el menú efectivamente abra.
		function openSideMenu(attempt = 0) {
			const MAX_ATTEMPTS = 4;

			cy.findByRole('button', { name: /open menu/i })
				.should('be.visible')
				.click();

			cy.get('body').then(($body) => {
				if ($body.find('nav.open').length) return;

				if (attempt >= MAX_ATTEMPTS) {
					throw new Error(`El menú lateral no abrió tras ${MAX_ATTEMPTS} intentos`);
				}

				openSideMenu(attempt + 1);
			});
		}

		beforeEach(() => {
			openSideMenu();
		});

		it('navigates to /', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /inicio/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/');
		});

		it('navigates to /quienes_somos', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /quienes somos/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/quienes_somos');
		});

		it('navigates to /equipo', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /equipo/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/equipo');
		});

		it('navigates to /donaciones', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /donaciones/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/donaciones');
		});

		it('navigates to /noticias', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /noticias/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/noticias');
		});

		it('navigates to /proyectos', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /proyectos/i })
				.click();
			cy.url().should('include', '/proyectos');
		});

		it('navigates to /departamentos/arte', () => {
			cy.get('nav.open').findByRole('link', { name: /arte/i }).click({ scrollBehavior: 'center' });
			cy.url().should('include', '/departamentos/arte');
		});

		it('navigates to /departamentos/plataformas', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /plataformas/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/departamentos/plataformas');
		});

		it('navigates to /departamentos/salud', () => {
			cy.get('nav.open').findByRole('link', { name: /salud/i }).click({ scrollBehavior: 'center' });
			cy.url().should('include', '/departamentos/salud');
		});

		it('navigates to /galeria', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /galería/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/galeria');
		});

		it('navigates to /documentos', () => {
			cy.get('nav.open')
				.findByRole('link', { name: /documentos/i })
				.click({ scrollBehavior: 'center' });
			cy.url().should('include', '/documentos');
		});
	});

	describe('footer navigation', () => {
		it('navigates to /quienes_somos', () => {
			cy.get('footer')
				.findByRole('link', { name: /quienes somos/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/quienes_somos');
		});

		it('navigates to /equipo', () => {
			cy.get('footer')
				.findByRole('link', { name: /equipo/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/equipo');
		});

		it('navigates to /donaciones', () => {
			cy.get('footer')
				.findByRole('link', { name: /donaciones/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/donaciones');
		});

		it('navigates to /noticias', () => {
			cy.get('footer')
				.findByRole('link', { name: /noticias/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/noticias');
		});

		it('navigates to /proyectos', () => {
			cy.get('footer')
				.findByRole('link', { name: /proyectos/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/proyectos');
		});

		it('navigates to /departamentos/arte', () => {
			cy.get('footer')
				.findByRole('link', { name: /departamento de arte/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/departamentos/arte');
		});

		it('navigates to /departamentos/plataformas', () => {
			cy.get('footer')
				.findByRole('link', { name: /departamento de plataformas/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/departamentos/plataformas');
		});

		it('navigates to /departamentos/salud', () => {
			cy.get('footer')
				.findByRole('link', { name: /departamento de salud/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/departamentos/salud');
		});

		it('navigates to /galeria', () => {
			cy.get('footer')
				.findByRole('link', { name: /galería/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/galeria');
		});

		it('navigates to /documentos', () => {
			cy.get('footer')
				.findByRole('link', { name: /documentos/i })
				.scrollIntoView()
				.click();
			cy.url().should('include', '/documentos');
		});
	});

	describe('other navigation', () => {
		it('navigates to /donaciones', () => {
			cy.findByRole('link', { name: /colabora/i }).click({
				scrollBehavior: 'center'
			});
			cy.url().should('include', '/donaciones');
		});
	});
});
