const COVERAGE = 70;

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/contexts/**/*.{js,jsx,ts,tsx}',
    '!src/i18n/**/*.{js,jsx,ts,tsx}',
    '!src/redux/**/*.{js,jsx,ts,tsx}',
    '!src/services/**/*.{js,jsx,ts,tsx}',
    '!src/test-helpers/**/*.{js,jsx,ts,tsx}',
    '!src/styles/**/*.{js,jsx,ts,tsx}',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/*.mock.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!pages/examplePage.tsx',
    '!pages/_app.tsx',
    '!pages/_document.tsx',
    '!src/components/ExampleComponent/index.tsx',
    '!src/utils/redirectLocaleUrl.ts',
    '!src/hooks/useSetLocale.tsx',
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
