module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'src/test/js/e2e/**/*.js',
      'src/main/webapp/js/**/*.js',
    ],

    port : 7070,

    runnerPort : 7100,

    autoWatch : false,

    browsers : ['Chrome'],

    frameworks: ['ng-scenario'],

    singleRun : false,

    proxies : {
      '/': 'http://localhost:8080/'
    },

    urlRoot : '/karma/',

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
            ],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }

})}
