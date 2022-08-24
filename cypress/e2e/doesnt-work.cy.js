/// <reference types="cypress" />
describe('page', () => {
  before(function () {
    expect(this.test.hookName).to.equal('before')
  })
  beforeEach(function () {
    expect(this.test.hookName).to.equal('beforeEach')
  })
  afterEach(function () {
    expect(this.test.hookName).to.equal('afterEach')
  })
  after(function () {
    expect(this.test.hookName).to.equal('after')
  })
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
