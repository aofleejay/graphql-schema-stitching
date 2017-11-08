require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import schema from './schemas/rootSchema'

const nodePort = process.env.NODE_PORT || 4000

const app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(nodePort, () => console.log(`Now browse to localhost:${nodePort}/graphiql`))
