import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    // '../stories/**/*.mdx',
    '../components/ui/*.stories.@(ts|tsx)',
    '../app/**/*.stories.@(ts|tsx)',
  ],
  // features: {
  //   experimentalRSC: true,
  // },
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  // typescript: {
  //   reactDocgen: 'react-docgen',
  // },
  // env: () => ({}),
  webpackFinal: async (config) => {
    if (config.resolve) {
      // config.resolve.fallback = [
      //   { alias: 'crypto', name: 'crypto-browserify', onlyModule: true },
      // ];
      config.resolve.fallback = {
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        fs: false,
        http: false,
      };
    }

    // const definePlugin = config?.plugins?.find(
    //   ({ constructor }) => constructor && constructor.name === 'DefinePlugin'
    // );
    // if (definePlugin) {
    //   definePlugin.definitions = injectEnv(definePlugin.definitions);
    // }

    return config;
  },
};
export default config;

// "imports": {
//   "#app/actions": {
//     "storybook": "./app/actions/user.mock.ts",
//     "default": "./app/actions/user.ts"
//   },
//   "#*": [
//     "./*",
//     "./*.ts",
//     "./*.tsx"
//   ]
// },

// function injectEnv(definitions) {
//   const env = 'process.env';

//   if (!definitions[env]) {
//     return {
//       ...definitions,
//       [env]: JSON.stringify(
//         Object.fromEntries(
//           Object.entries(definitions)
//             .filter(([key]) => key.startsWith(env))
//             .map(([key, value]) => [
//               key.substring(env.length + 1),
//               JSON.parse(value),
//             ])
//         )
//       ),
//     };
//   }
//   return definitions;
// }
