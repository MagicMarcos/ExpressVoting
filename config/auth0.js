require('dotenv').config({ path: './config/.env' });

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.AUTH_URL,
  clientID: process.env.AUTH_CLIENT_ID,
  issuerBaseURL: process.env.AUTH_ISSUER_URL,
  secret: process.env.AUTH_SECRET,
};

module.exports = authConfig;
