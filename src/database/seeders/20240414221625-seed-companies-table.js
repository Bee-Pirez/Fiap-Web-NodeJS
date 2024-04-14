'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [{
      company_name: 'EmpresaX',
      email: 'empresax@email.com',
      cnpj: 'cnpjx',
      password_hash: 'teste123',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      company_name: 'EmpresaY',
      email: 'empresay@email.com',
      cnpj: 'cnpjy',
      password_hash: 'teste1234',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      company_name: 'EmpresaZ',
      email: 'empresaz@email.com',
      cnpj: 'cnpjz',
      password_hash: 'teste12345',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('companies', null, {});
  }
};
