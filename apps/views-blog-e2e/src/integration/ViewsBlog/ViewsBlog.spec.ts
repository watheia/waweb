describe('views-blog: ViewsBlog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=viewsblog--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ViewsBlog!');
    });
});
