const { makeExecutableSchema } = require('graphql-tools')
const commonTypeDefs = require('./common')

const typeDefs = `
  type Author {
    id: ID!
    name: String
    timestamp: Timestamp
  }

  type Query {
    authorById(id: ID!): Author
  }
`

const resolvers = {
  Query: {
    authorById(root, arg) {
      return { id: "1", name: "George R. R. Martin" }
    }
  }
}

const bookSchema = makeExecutableSchema({
  typeDefs: [typeDefs, commonTypeDefs],
  resolvers,
})

module.exports = bookSchema
