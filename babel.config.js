module.exports = {
  "presets": [
    [
        "@babel/preset-env",
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma":"h" },"@babel/plugin-proposal-optional-chaining"]
  ]
  
}