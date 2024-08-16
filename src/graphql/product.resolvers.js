const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = /*async*/ (_, { id }) => {
  // const product = await service.findOne(id);
  return service.findOne(id);

  // return { 
  //   id, 
  //   name: 'Product 1', 
  //   price: 100.45, 
  //   description: 'Lorem dsfsds sds d sdsd', 
  //   image: 'http://image.asd', 
  //   createdAt: new Date().toISOString(),
  // }
}

const getProducts = /*async*/ () => {
  // const products = await service.find({});
  return service.find({});
}

const addProduct = /*async*/ (_, { dto }) => {
  // const newProduct = await service.create(dto);
  return service.create(dto);
}

const updateProduct = /*async*/ (_, { id, dto }) => {
  return service.update(id, dto);
}

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
}