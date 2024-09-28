import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../components/ui/*.stories.@(ts|tsx)',
    '../app/**/*.stories.@(ts|tsx)',
  ],
  features: {
    experimentalRSC: true,
  },
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
