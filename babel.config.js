module.exports = {
  presets: [
    [
      'cozy-app',
      { presetEnv: { modules: false }, transformRuntime: { helpers: true } }
    ]
  ],
  plugins: [
    [
      'css-modules-transform',
      {
        extractCss: './transpiled/stylesheet.css',
        generateScopedName: '[name]__[local]__[hash:base64:5]'
      }
    ]
  ]
}
