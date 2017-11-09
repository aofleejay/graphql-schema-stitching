require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { mergeSchemas } from 'graphql-tools'
import localSchema from './schemas/rootSchema'
import { getRemoteSchemas } from './remoteschemas/rootSchema'

const nodePort = process.env.NODE_PORT || 4000  

getRemoteSchemas().then(remoteSchema => {
  const app = express()

  const mergedSchemas = mergeSchemas({
    schemas: [remoteSchema, localSchema]
  })

  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: mergedSchemas }))
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
  app.listen(nodePort, () => console.log(`Now browse to localhost:${nodePort}/graphiql`))
})
