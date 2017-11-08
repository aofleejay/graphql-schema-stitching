const queries = `
  authorById(id: ID!): Author
`

const mutations = `
  createAuthor(id: ID!): Author
`

const typeDefs = `
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

export {
  queries,
  mutations,
  typeDefs,
  resolvers,
}
