import Constants from 'expo-constants';

type ExtraConfig = {
    apiUrl: string;
    mocksEnabled: boolean;
};

const extra = Constants.expoConfig?.extra as ExtraConfig;

const env = {
    API_URL: extra.apiUrl,
    MOCKS_ENABLED: extra.mocksEnabled,
};

export default env;
