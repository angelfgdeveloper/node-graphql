const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// El signo '!' => es para no tener nulos
const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String
    getInt(age: Int!): Int
    getFloat(price: Float): Float
    getString: String
    getBoolean: Boolean
    getID: ID
    getNumbers(numbers: [Int]!): [Int]
  }
`;

// GET => Query (Consultar datos)
// POST, PUT, DELETE => Mutations

// Lists
// [String]
// [Int]

const resolvers = {
  Query: {
    hello: () => null,
    getPerson: (_, args) => `Hello, my name is ${ args.name }, I'm ${ args.age } years old!`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => "word",
    getBoolean: () => true,
    getID: () => '12345678',
    getNumbers: (_, args) => args.numbers
  }
}

const useGraphql = async (app) => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });

  await server.start();
  server.applyMiddleware({ app });
}

module.exports = useGraphql;