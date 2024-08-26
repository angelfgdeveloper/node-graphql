const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}/);

const resolvers = {
  
  Query: {
    hello: () => null,
    getPerson: (_, args) => `Hello, my name is ${ args.name }, I'm ${ args.age } years old!`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => "word",
    getBoolean: () => true,
    getID: () => '12345678',
    getNumbers: (_, args) => args.numbers,

    // Products
    product: getProduct,
    products: getProducts,

    // Categories
    category: getCategory
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
  CategoryNameType,
  Category: {
    // products: () => {
    //   // console.log('field category');
      
    //   return [];
    // }
    
    // Puedo ejecutar productos a demanda
    products: getProductsByCategory
  }

}

module.exports = { resolvers };