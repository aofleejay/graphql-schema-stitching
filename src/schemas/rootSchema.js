import { makeExecutableSchema, mergeSchemas } from 'graphql-tools'
import bookSchema from './book'
import authorSchema from './author'

export default mergeSchemas({
  schemas: [bookSchema, authorSchema],
})
