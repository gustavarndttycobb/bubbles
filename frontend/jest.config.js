module.exports = {
    preset: 'jest-expo',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(test|spec).[jt]s?(x)',
        '**/*-test.[jt]s?(x)'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/android/',
        '/ios/',
        '/.expo/',
        '/build/'
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@react-navigation/.*)'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
