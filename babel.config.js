module.exports = {
  presets: [
    '@vue/app',
    {
      "plugins": [
        ["import", {
          "libraryName": "mand-mobile",
          "libraryDirectory": "lib"
        }]
      ]
    }
  ]
  // module: {
  //   rules: [
  //     {
  //       test: /\.less$/,
  //       loader: "style-loader!css-loader!less-loader"
  //     }
  //   ]
  // }
}