require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schemas/root')

const nodePort = process.env.NODE_PORT || 4000

const app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(nodePort, () => console.log(`Now browse to localhost:${nodePort}/graphiql`))
