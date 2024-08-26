const boom = require('@hapi/boom');
const CategoryService = require('./../services/category.service');

const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate('jwt', { session: false });

  if (!user) {
    throw boom.unauthorized('jwt is not valid');
  }

  const newCategory = await service.create(dto);

  return newCategory;
}

module.exports = {
  addCategory
}