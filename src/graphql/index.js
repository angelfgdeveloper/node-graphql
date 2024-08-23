const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');
const { resolvers } = require('./resolvers');
const { buildContext } = require('graphql-passport');

// El signo '!' => es para no tener nulos
// const typeDefs = `
//   type Query {
//     hello: String!
//     getPerson(name: String, age: Int): String
//     getInt(age: Int!): Int
//     getFloat(price: Float): Float
//     getString: String
//     getBoolean: Boolean
//     getID: ID
//     getNumbers(numbers: [Int]!): [Int]

//     getProduct: Product
//   }

//   type Product {
//     id: ID!
//     name: String!
//     price: Float!
//     description: String!
//     image: String!
//     createdAt: String!
//   }

// `;

// GET => Query (Consultar datos)
// POST, PUT, DELETE => Mutations

// Lists
// [String]
// [Int]

const useGraphql = async (app) => {

  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    context: ((req, res) => buildContext({ req, res })),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });

  await server.start();
  server.applyMiddleware({ app });
}

module.exports = useGraphql;