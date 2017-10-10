require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const nodePort = process.env.NODE_PORT || 4000

const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`]

const resolvers = {
  Query: {
    hello(root) {
      return 'world'
    }
  }
}

const schema = makeExecutableSchema({typeDefs, resolvers})
const app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
app.listen(nodePort, () => console.log(`Now browse to localhost:${nodePort}/graphiql`))