import { getSchemas } from './catAPI'

const getRemoteSchemas = async () => {
  return await getSchemas()
}

export { getRemoteSchemas }
