import { ConfigContext, ExpoConfig } from '@expo/config';
import 'dotenv/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "bubbles",
  slug: "bubbles",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: "bubbles",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./src/assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.bubbles.app",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.bubbles.app",
  },
  web: {
    favicon: "./src/assets/images/favicon.png",
  },
  owner: "devmauricioab",
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    mocksEnabled: process.env.EXPO_PUBLIC_MOCKS_ENABLED === 'true',
    router: {},
    eas: {
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    },
  },
});