const COVERAGE = 70;

module.exports = {
  collectCoverageFrom: [
    '!src/components/ExampleComponent/index.tsx',
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/containers/**/*.{js,jsx,tsx,ts}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/*.mock.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!pages/examplePage.tsx',
    '!pages/_app.tsx',
  ],

  coverageThreshold: {
    global: {
      statements: COVERAGE,
      branches: COVERAGE,
      functions: COVERAGE,
      lines: COVERAGE,
    },
  },

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/src/common/tests/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/common/tests/mocks/image.js',
  },
  transform: {
    // transform files with ts-jest
    '^.+\\.(js|ts|tsx|jsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./setupTests.ts'], // run this file before tests run.
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
};
