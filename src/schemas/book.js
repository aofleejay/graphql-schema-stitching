const queries = `
  bookById(id: ID!): Book
`

const mutations = `
  createBook(id: ID!): Book
`

const typeDefs = `
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
      return { id: "1", name: "Game of thrones", authorId: "1" }
    }
  },
  Mutation: {
    createBook(_, arg) {
      return { id: "1", name: "Game of thrones", authorId: "1" }
    }
  }
}

export {
  queries,
  mutations,
  typeDefs,
  resolvers,
}
