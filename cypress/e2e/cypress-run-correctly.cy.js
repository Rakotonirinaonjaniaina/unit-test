describe('Todo App', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should contain input field for adding todos', () => {
    cy.get('#add-todo')
      .type('Lorem ipsum')
  })

  it('should add a todo after pressing "enter"', () => {
    const text = 'Lorem ipsum'
    cy.get('#add-todo')
      .type(`todo{enter}`)
    cy.get('[data-testid="test-todo-0-container"]')
      .contains('todo')
  })

  it('card done most have text todo', () => {
    const text = 'todo'
    cy.get('#add-todo')
      .type(`${text}{enter}`)
    cy.get('[data-testid="test-todo-0"]')
      .check()
    cy.get('[data-testid="test-todo-0-container"]')
      .contains(text)
  })
})
