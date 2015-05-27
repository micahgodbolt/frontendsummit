module.exports = function(grunt) {

  ////////////////////////
  // Load Config
  ////////////////////////

  var config = grunt.file.readYAML("Gruntconfig.yml");

  ////////////////////////
  // Load Tasks
  ////////////////////////

  require('load-grunt-tasks')(grunt);

  ////////////////////////
  // Configure Tasks
  ////////////////////////

  grunt.initConfig({

    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
      },
      dist: {
        src: config.scssDir + 'style.scss',
        dest: config.cssDir + 'style.css',
      }
    },

    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      options: {
      },
      dist: {
        src: config.jsSrcDir + '*.js',
        dest: config.jsConcatDir + 'scripts.js',
      },
    },

    // https://github.com/gruntjs/grunt-contrib-jshint
    jshint: {
      options: {
        //"eqnull": true,
      },
      all: [
        'Gruntfile.js',
        config.jsSrcDir + "*.js"
      ]
    }
  });

  ////////////////////////
  // Register New Tasks
  ////////////////////////

  grunt.registerTask('default', [
    'sass',
    'concat',
    'jshint'
    ]);

};
