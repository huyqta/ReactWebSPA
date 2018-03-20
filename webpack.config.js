const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve:{
    // modulesDirectories: ['node_modules'],
    alias:{
      HomePage: path.resolve('app/components/HomePage.js'),
      AboutUs: path.resolve('app/components/AboutUs.js'),
      Contact: path.resolve('app/components/Contact.js'),
      Main: path.resolve('app/components/Main.js'),
      React: path.resolve('public/lib/react.development.js'),
      ReactDOM: path.resolve('public/lib/react-dom.development.js'),
    }
  },
  module:{
    rules:[
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
