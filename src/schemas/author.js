import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs as commonTypeDefs } from './common'

const typeDefs = `
  type Query {
    authorById(id: ID!): Author
  }

  type Mutation {
    createAuthor(id: ID!): Author
  }

  type Author {
    id: ID!
    name: String
    timestamp: Timestamp
  }
`

const resolvers = {
  Query: {
    authorById(_, arg) {
      return { id: "1", name: "George R. R. Martin" }
    }
  },
  Mutation: {
    createAuthor(_, arg) {
      return { id: "1", name: "George R. R. Martin" }
    }
  }
}

export default makeExecutableSchema({
  typeDefs: [typeDefs, commonTypeDefs],
  resolvers,
})
