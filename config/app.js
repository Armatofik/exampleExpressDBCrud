module.exports = {
  port: process.env.PORT || 5000,
  environment: process.env.ENVIRONMENT || 'dev',
  apiKeys: {
    reader: process.env.READER_API_KEY || 'reader',
    operator: process.env.OPERATOR_API_KEY || 'operator',
    admin: process.env.ADMIN_API_KEY || 'admin',
  },
};