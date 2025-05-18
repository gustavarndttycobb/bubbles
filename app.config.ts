import { ConfigContext, ExpoConfig } from '@expo/config';
import 'dotenv/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "bubbles",
  slug: "bubbles",
  version: "1.0.0",
  extra: {
    apiUrl: process.env.API_URL,
    mocksEnabled: process.env.MOCKS_ENABLED === 'true',
  },
});