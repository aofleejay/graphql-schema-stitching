import fetch from 'node-fetch'
import {
  introspectSchema,
  makeRemoteExecutableSchema,
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'

async function getSomeOneRemoteSchema() {
  const link = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj64vfbv3xxp80153vja60n7y', fetch })  
  return makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link,
  })
}

export default getSomeOneRemoteSchema
