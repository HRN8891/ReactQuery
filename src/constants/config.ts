import env from 'react-native-config';

const config = {
  API_BASE_URL: env.API_BASE_URL,
  IS_PRODUCTION: env.IS_PRODUCTION,
  MIXPANEL_KEY: env.MIXPANEL_KEY,
};

export default config;
