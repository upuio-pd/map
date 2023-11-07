const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path-browserify");
const webpack = require("webpack");

//added
const process = require("process");

const PAGE_TITLE = "React Planner";
const VENDORS_LIBRARIES = [
  "immutable",
  "react",
  "react-dom",
  "react-redux",
  "redux",
  "three",
];

module.exports = (env, self) => {
  let isProduction = self.hasOwnProperty("mode")
    ? self.mode === "production"
    : true;
  let port = self.hasOwnProperty("port") ? self.port : 8080;

  if (isProduction) console.info("Webpack: Production mode");
  else console.info("Webpack: Development mode");

  let config = {
    context: path.resolve(__dirname),
    entry: {
      app: "./src/renderer.jsx",
      vendor: VENDORS_LIBRARIES,
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[chunkhash].[name].js",
    },
    target: "web",

    //devtool: isProduction ? 'source-map' : 'eval',
    devServer: {
      open: true,
      port: port,
      static: path.join(__dirname, "./dist"),
    },
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
      extensions: [".js", ".jsx"],

      alias: {
        "react-planner": path.join(__dirname, "../src/index"),
        process: "process/browser",
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                compact: false,
                plugins: ["transform-object-rest-spread"],
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|mtl|obj)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                hash: "sha512",
                digest: "hex",
                name: "[path][name].[ext]",
                context: "demo/src",
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader/url" }, { loader: "file-loader" }],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: PAGE_TITLE,
        template: "./src/index.html.ejs",
        filename: "index.html",
        inject: "body",
        production: isProduction,
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process?.env),
      }),
    ],

    optimization: {
      minimize: isProduction,
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            minSize: 10000,
            reuseExistingChunk: true,
          },
        },
      },
    },
  };

  if (isProduction) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
        },
      })
    );
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      isProduction: JSON.stringify(isProduction),
    })
  );

  return config;
};
