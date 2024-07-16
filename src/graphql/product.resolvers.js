
const getProduct = (_, { id }) => {
  return { 
    id, 
    name: 'Product 1', 
    price: 100.45, 
    description: 'Lorem dsfsds sds d sdsd', 
    image: 'http://image.asd', 
    createdAt: new Date().toISOString(),
  }
}

const getProducts = () => {
  return [];
}

const addProduct = () => {
  // code
}

module.exports = {
  getProduct,
  getProducts,
}