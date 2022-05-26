describe('Busca do Duck Duck Go por "cypress.io"', function () {
  const buscaTermos = 'cypress.io'
  
  beforeEach(function () {
    cy.intercept(
      'GET',
      `**?q=${buscaTermos}**`
      ).as('pegueResultadoBusca')

    cy.visit('https://duckduckgo.com')
    
    cy.get('input[type="text"]')
      .as('buscaCampo')
      .should('be.visible')
      
  })
  

  it.only('Digitando na busca e apertando o enter', function () {
    cy.get('@buscaCampo')
      .type(`${buscaTermos}{enter}`)

    cy.wait('@pegueResultadoBusca')

    cy.procuraResultadosMaisBotaoResultados()

  })


  it('Digitando na busca e clicando no botão da lupa', function () {
    cy.get('@buscaCampo')
      .type(buscaTermos)  
    
    cy.get('input[type="submit"]')
      .click()
    
    cy.wait('@pegueResultadoBusca')

    cy.procuraResultadosMaisBotaoResultados()

  })


  it('Digita e envia diretamente pelo formulário', function () {
    cy.get('@buscaCampo')
      .type(buscaTermos)
    cy.get('form').submit()
    
    cy.wait('@pegueResultadoBusca')

    cy.procuraResultadosMaisBotaoResultados()
      
  })


})
 




// it('Digitando na busca e apertando seta para baixo duas vezes', function () {
    
// })

// it('Digitando na busca e apertando seta para baixo três vezes', function () {
    
// }) 







