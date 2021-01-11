module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
  ],
  webpackFinal: async (config, { configType }) => {
    if (configType !== 'PRODUCTION') {
      return config;
    }

    return {
      output: {
        path: './__storybook',
        filename: '/__storybook/[name].[hash].bundle.js',
        publicPath: '/__storybook/',
      },
      ...config,
    };
  },
};
