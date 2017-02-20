const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack-examples-server.config');

const port = process.env.PORT || 3000;

var server = new WebpackDevServer(webpack(config), {
  contentBase: 'examples',
  stats: {
    colors: true,
  },
});

server.listen(port, function() {});