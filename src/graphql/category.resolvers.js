const CategoryService = require('./../services/category.service');
const { checkRolesGql } = require('../utils/checkRolesGql');
const { checkJWTGql } = require('../utils/checkJwtGql');

const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJWTGql(context);

  checkRolesGql(user, 'admin');

  return await service.create(dto);
}

module.exports = {
  addCategory
}