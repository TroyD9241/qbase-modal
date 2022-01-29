module.exports = {
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  parser: "babel-eslint",
  overrides: [
    {
      files: ["*.jsx", "*.js"],
    },
  ],
};
