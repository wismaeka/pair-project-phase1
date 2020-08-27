'use strict';
const fs = require('fs')

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let productList = JSON.parse(fs.readFileSync('../data.product.json','utf-8'))
   productList = productList.map(el=>{
     el.createdAt = new Date(),
     el.updatedAt = new Date()
     return el
   })
   return queryInterface.bulkInsert("Products",productList,{})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Products",null,{})
  }
};
