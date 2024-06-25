
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String
  }
`;

// GET => Query (Consultar datos)
// POST, PUT, DELETE => Mutations

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    getPerson: (_, args) => `Hello, my name is ${ args.name }, I'm ${ args.age } years old!`
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