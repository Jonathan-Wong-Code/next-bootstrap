module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@babel/preset-env',
  ],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
