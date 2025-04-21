/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest/presets/default-esm", // Ensure the correct preset for ESM
  testEnvironment: "node",
  clearMocks: true,
  moduleFileExtensions: ["js", "ts", "node"],
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results/junit",
        outputName: "test-results.xml",
      },
    ],
  ],
  moduleDirectories: ["node_modules", "src"],
};
