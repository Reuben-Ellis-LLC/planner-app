import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    // '../stories/**/*.mdx',
    '../components/ui/*.stories.@(ts|tsx)',
    '../app/**/*.stories.@(ts|tsx)',
  ],
  features: {
    experimentalRSC: true,
  },
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
        ...config.resolve.fallback,
        stream: false,
        crypto: false,
        fs: false,
        http: false,
        https: false,
      };
    }

    return config;
  },
};
export default config;
