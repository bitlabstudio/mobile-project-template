var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var merge = require("webpack-merge");

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

// These settings should always be used when running webpack
var common = {
  entry: [path.resolve(ROOT_PATH, "app/app.js")],
  output: {
    publicPath: "",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ["style", "css"] },
      { test: /\.(png|jpg)$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "raw" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};

// These settings should be used when building with webpack, but not when
// running the dev-server
var commonBuild = merge(common, {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel?stage=1",
        include: path.resolve(ROOT_PATH, "app")
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    })
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //})
  ]
});

if(TARGET === "build-web") {
  module.exports = merge(commonBuild, {
    output: {
      path: path.resolve(ROOT_PATH, "dist/web")
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "React App",
        filename: "index.html",
        template: "./templates/index_web.html"
      })
    ]
  });
}


if(TARGET === "build-ios") {
  module.exports = merge(commonBuild, {
    output: {
      path: path.resolve(ROOT_PATH, "dist/ios")
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Marketplace",
        filename: "index.html",
        template: "./templates/index_ios.html"
      })
    ]
  });
}

if(TARGET === "dev") {
  module.exports = merge(common, {
    entry: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/dev-server"
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ["react-hot", "babel?stage=1"],
          include: path.resolve(ROOT_PATH, "app")
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  });
}
