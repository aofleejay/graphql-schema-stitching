const { makeExecutableSchema, mergeSchemas } = require('graphql-tools')
const commonSchema = require('./common')

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
  typeDefs: [typeDefs, commonSchema],
  resolvers,
})

module.exports = bookSchema
// module.exports = mergeSchemas({ schema: [bookSchema, commonSchema] })
