const { makeExecutableSchema } = require('graphql-tools')
const commonTypeDefs = require('./common')

const typeDefs = `
  type Book {
    id: ID!
    name: String
    authorId: ID!
    timestamp: Timestamp
  }

  type Query {
    bookById(id: ID!): Book
  }
`

const resolvers = {
  Query: {
    bookById(root, arg) {
      return { id: "1", name: "Game of throne", authorId: "1" }
    }
  }
}

const bookSchema = makeExecutableSchema({
  typeDefs: [typeDefs, commonTypeDefs],
  resolvers,
})

module.exports = bookSchema
