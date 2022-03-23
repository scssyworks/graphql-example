const { ApolloServer, gql } = require("apollo-server");
const { authors, books } = require("./data");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String
    books: [Book]
  }

  type Book {
    id: ID!
    title: String
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const resolvers = {
  Query: {
    authors: () => {
      console.log("FETCH: authors");
      return authors;
    },
    books: () => {
      console.log("FETCH: books");
      return books;
    },
  },
  Author: {
    books: (parent) => {
      console.log("FETCH: Books for particular author");
      return books.filter((book) => book.author === parent.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log("Server ready at ", url);
});
