const { makeExecutableSchema } = require('graphql-tools')

const bookSchema = makeExecutableSchema({
  typeDefs: `
    type Book {
      id: ID!
      name: String
      authorId: ID!
    }
    type Query {
      bookById(id: ID!): Book
    }
  `,
  resolvers: {
    Query: {
      bookById(root, arg) {
        return { id: "1", name: "Game of throne", authorId: "1" }
      }
    }
  }
})

module.exports = bookSchema
