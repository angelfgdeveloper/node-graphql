const { getProduct, getProducts } = require('./product.resolvers');

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
    
  }
}

module.exports = { resolvers };