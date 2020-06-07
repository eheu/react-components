const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const config = ({ mode }) => {
  return {
    mode: mode,

    entry: "./src/main.js",

    output: {
      path: __dirname + "/build/",
      filename: "main.js",
      publicPath: "http://localhost:3002/",
    },

    module: {
      rules: [
        {
            test: /\.jsx?$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('@babel/preset-react')]
            }
          }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/main.html",
        inject: "body",
      }),
      
      new ModuleFederationPlugin({
        name: "reactComponents",
        filename: "remoteEntry.js",
        library: { type: "var", name: "reactComponents" },
        exposes: {
          ReactCounter: "./src/components/react-counter",
        },
        shared: ['react', 'react-dom']
      }),
    ],
  };
};

module.exports = config;
