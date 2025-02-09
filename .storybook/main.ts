import { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: [
    '../components/ui/*.stories.@(ts|tsx)',
    '../app/**/*.stories.@(ts|tsx)',
  ],

  features: {
    experimentalRSC: true,
  },

  addons: [// '@storybook/addon-links',
  '@storybook/addon-essentials', '@storybook/experimental-addon-test', '@storybook/addon-a11y', '@chromatic-com/storybook'],

  framework: '@storybook/experimental-nextjs-vite',
  staticDirs: ['../public'],

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
