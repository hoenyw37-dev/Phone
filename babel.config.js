module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        'babel-plugin-transform-typescript-metadata',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@base': './src/app/base',
                    '@powerstrike': './src/app/powerstrike',
                    '@faastflex': './src/app/faastflex',
                    '@ff_controllers': './src/app/faastflex/controllers',
                    '@ff_dataAccess': './src/app/faastflex/dataAccess',
                    '@ff_model': './src/app/faastflex/model',
                    '@ff_screens': './src/app/faastflex/screens',
                    '@ff_utils': './src/app/faastflex/utils',
                    '@ff_redux': './src/app/faastflex/redux',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@global': './src/global',
                    '@styles': './src/styles',
                    '@types': './src/types',
                    '@app':'./src/app',
                    "@faastflexCommands": "./src/faastflexCommands",
                    "@faastflexCommunicator": "./src/faastflexCommunicator"
                },
            },]
    ],
};