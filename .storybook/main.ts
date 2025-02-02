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
  '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/experimental-addon-test', '@storybook/addon-a11y'],
  framework: '@storybook/experimental-nextjs-vite',
  staticDirs: ['../public'],
};
export default config;
