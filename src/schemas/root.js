const { mergeSchemas } = require('graphql-tools')
const bookSchema = require('./book')
const authorSchema = require('./author')

module.exports = mergeSchemas({
  schemas: [bookSchema, authorSchema],
})
