import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs as commonTypeDefs } from './common'

const typeDefs = `
  type Query {
    bookById(id: ID!): Book    
  }

  type Mutation {
    createBook(id: ID!): Book
  }

  type Book {
    id: ID!
    name: String
    authorId: ID!
    timestamp: Timestamp
  }
`

const resolvers = {
  Query: {
    bookById(_, arg) {
      return { id: "1", name: "Game of throne", authorId: "1" }
    }
  },
  Mutation: {
    createBook(_, arg) {
      return { id: "1", name: "Game of throne", authorId: "1" }
    }
  }
}

export default makeExecutableSchema({
  typeDefs: [typeDefs, commonTypeDefs],
  resolvers,
})
