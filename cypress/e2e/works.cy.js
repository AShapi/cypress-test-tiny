/// <reference types="cypress" />
describe('page', () => {
  before(function () {
    expect(this.test.hookName).to.equal('before all')
  })
  beforeEach(function () {
    expect(this.test.hookName).to.equal('before each')
  })
  afterEach(function () {
    expect(this.test.hookName).to.equal('after each')
  })
  after(function () {
    expect(this.test.hookName).to.equal('after all')
  })
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
