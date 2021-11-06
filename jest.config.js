const { getJestProjects } = require("@nrwl/jest")

module.exports = {
  projects: getJestProjects(),
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/index.{js,ts}"
  ]
  // moduleNameMapper: {
  //   /* Handle CSS imports (with CSS modules)
  //   https://jestjs.io/docs/webpack#mocking-css-modules */
  //   "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

  //   // Handle CSS imports (without CSS modules)
  //   "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

  //   /* Handle image imports
  //   https://jestjs.io/docs/webpack#handling-static-assets */
  //   "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"

  //   // "^@watheia/(w+)$": "libs/$1/src/index.ts",
  //   // "^@waweb/assets.images/(.*)": "libs/assets/src/images/$1",
  //   // "^@waweb/assets.styles/(.*)": "libs/assets/src/styles/$1"
  // },
  // testResultsProcessor: "<rootDir>/node_modules/jest-junit-reporter",
  // testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  // testEnvironment: "jsdom",
  // transform: {
  //   /* Use babel-jest to transpile tests with the next/babel preset
  //   https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
  //   "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
  // },
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "^.+\\.module\\.(css|sass|scss)$",
  //   "^.+\\.stories\\.(js|jsx|ts|tsx)$"
  // ],
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // collectCoverage: true,
  // reporters: ["default", "jest-junit"],
  // coverageReporters: ["json", "lcov", "text", "clover"]
}
