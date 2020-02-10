module.exports = {
    automock: false,
    browser: false,
    bail: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        "!**/module.d.ts",
        "!**/*.stories.{ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/src/App.tsx",
        "!**/styles.ts",
        "!**/build/**",
        "!**/src/**/*.data.ts",
        "!**/src/**/*.test.ts", // test helper
    ],
    // coverageThreshold: {
    //   global: {
    //     branches: 70,
    //     functions: 75,
    //     lines: 80,
    //     statements: 80,
    //   },
    // },
    coverageDirectory: '<rootDir>/coverage',
    globals: {
        __DEV__: true
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'scss'],
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    testMatch: ["**/__tests__/**/*.{js,ts,tsx}"],
    verbose: true,
    setupTestFrameworkScriptFile: './rtl.setup.js',
    testPathIgnorePatterns: ["/build/"],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
            "jest-transform-stub",
    }
};
