describe('views-home: ViewsHome component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=viewshome--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ViewsHome!');
    });
});
