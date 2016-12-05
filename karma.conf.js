import webpackConfig from './webpack.config';
webpackConfig.entry = {};

export default function(config) {
  config.set({
    //base path to resolve patterns
    basePath: '',

    frameworks: [ 'mocha', 'chai' ],

    //list of files/patterns to load in browser
    files: [
      './src/app.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js' 
    ],

    webpack: webpackConfig,

    //preprocess files before serving them to the browser
    preprocessors: {
      './src/app.js': [ 'webpack' ],
      './test/**/*.js': [ 'webpack' ]
    },

    //mock thru these browsers
    browsers: ['Chrome', 'Safari'],

    //test results reporter
    reporters: ['spec'],

    //web server port
    port: 9876,

    //reporter colors
    colors: true,

    //level of logging
    logLevel: config.LOG_INFO,

    //karma continuing watching
    autoWatch: true,

    //false means karma does not exit
    singleRun: false,

    //simultaneous browser running
    concurrency: Infinity

  });
}