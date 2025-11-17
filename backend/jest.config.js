module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/dist/**'
  ],
  testMatch: [
    '**/tests/**/*.test.js',
    '**/*.(test|spec).js'
  ],
  testTimeout: 10000,
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};