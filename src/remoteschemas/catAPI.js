import fetch from 'node-fetch'
import {
  introspectSchema,
  makeRemoteExecutableSchema,
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'

const getSchemas = async () => {
  const link = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj5db6nsuqxxi0127xpynt7n4', fetch })  

  return makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link,
  })
}

export { getSchemas }
