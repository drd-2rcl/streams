
const { NODE_ENV } = process.env;

const config = {
  env: NODE_ENV || 'development',
  development: {
    client_id: 'INSERT HASH CLIENT ID HERE'
  }
}

export default config[config.env];