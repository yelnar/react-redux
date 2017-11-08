if (process.env.NODE_ENV === 'production') {
  // Dynamiv imports aren't supported by ES6, so I use require instead of import
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
