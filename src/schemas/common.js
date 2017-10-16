const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Timestamp {
    createdat: String
    updatedat: String
  }
`

module.exports = typeDefs
// module.exports = makeExecutableSchema({
//   typeDefs
// })
