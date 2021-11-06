describe('views-account: ViewsUser component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=viewsuser--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ViewsUser!');
    });
});
