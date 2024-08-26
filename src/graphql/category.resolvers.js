const CategoryService = require('./../services/category.service');
const { checkRolesGql } = require('../utils/checkRolesGql');
const { checkJWTGql } = require('../utils/checkJwtGql');

const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJWTGql(context);

  checkRolesGql(user, 'admin');

  return await service.create({
    ...dto,
    image: dto.image.href
  });
}

const getCategory = (_, { id }) => {
  return service.findOne(id);
}

module.exports = {
  addCategory,
  getCategory
}