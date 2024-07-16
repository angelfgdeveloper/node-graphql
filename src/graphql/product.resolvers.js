const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;

  // return { 
  //   id, 
  //   name: 'Product 1', 
  //   price: 100.45, 
  //   description: 'Lorem dsfsds sds d sdsd', 
  //   image: 'http://image.asd', 
  //   createdAt: new Date().toISOString(),
  // }
}

const getProducts = async () => {
  const products = await service.find({});
  return products;
}

const addProduct = () => {
  // code
}

module.exports = {
  getProduct,
  getProducts,
}