module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageDirectory: "coverage",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
};