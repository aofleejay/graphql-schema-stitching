require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { mergeSchemas } from 'graphql-tools'
import localSchema from './schemas/rootSchema'
import getAllRemoteSchema from './remoteschemas/rootRemoteSchema'

getAllRemoteSchema.then((remoteSchema) => {
  const nodePort = process.env.NODE_PORT || 4000  
  const app = express()

  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: mergeSchemas({
    schemas: [remoteSchema, localSchema]
  })}))
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
  app.listen(nodePort, () => console.log(`Now browse to localhost:${nodePort}/graphiql`))
})
