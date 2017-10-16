const { makeExecutableSchema, mergeSchemas } = require('graphql-tools')
const commonSchema = require('./common')

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

const authorSchema = makeExecutableSchema({
  typeDefs: [typeDefs, commonSchema],
  resolvers,
})

module.exports = authorSchema
// module.exports = mergeSchemas({ schema: [authorSchema, commonSchema] })
