const webpackConfig = require( './webpack.config' );
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    
    basePath: '',

    frameworks: [ 'mocha', 'chai' ],

    files: [
      './src/app.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js' 
    ],

    webpack: webpackConfig,

    preprocessors: {
      './src/app.js': [ 'webpack' ],
      './test/**/*.js': [ 'babel' ]
    },

    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    reporters: ['spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,
    
    if (process.env.TRAVIS) {
      config.browsers = ['Chrome_travis_ci'];
    }

  });
};
