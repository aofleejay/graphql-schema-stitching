import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash.merge'
import {
  queries as bookQueries,
  mutations as bookMutations,
  typeDefs as bookTypeDefs,
  resolvers as bookResolvers,
} from './book'
import {
  queries as authorQueries,
  mutations as authorMutations,  
  typeDefs as authorTypeDefs,  
  resolvers as authorResolvers,
} from './author'
import { typeDefs as commonTypeDefs } from './common'

const typeDefs = `
  type Query {
    ${bookQueries}
    ${authorQueries}
  }

  type Mutation {
    ${bookMutations}
    ${authorMutations}
  }

  ${bookTypeDefs}
  ${authorTypeDefs}
  ${commonTypeDefs}
`

const resolvers = merge(bookResolvers, authorResolvers)

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
