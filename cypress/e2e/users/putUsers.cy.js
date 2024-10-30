/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('PUT method', () => {
  const payload = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${faker.datatype.boolean()}`
  }

  beforeEach(() => {
    cy.postUser(payload).as('responsePost')
  })

  it('edit a user', () => {
    payload.email = faker.internet.email()

    cy.get('@responsePost').then(response => {
      cy.putUser(response.body._id, payload).should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro alterado com sucesso')

        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
      })
    })
  })
})
