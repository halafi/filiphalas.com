module.exports = {
  "extends": ["airbnb", "prettier", "prettier/flowtype", "prettier/react", "plugin:flowtype/recommended"],
  "plugins": ["react", "jsx-a11y", "import", "flowtype", "jest", "prettier"],
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "prettier/prettier": ["error"],
  }
};