module.exports = function(grunt) {

  ////////////////////////
  // Load Tasks
  ////////////////////////

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  ////////////////////////
  // Configure Tasks
  ////////////////////////

  grunt.initConfig({

    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
      },
      dist: {
        src: 'src/sass/style.scss',
        dest: 'dist/css/style.css',
      }
    },

    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      options: {
      },
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/scripts.js',
      },
    },
  });

  ////////////////////////
  // Register New Tasks
  ////////////////////////

  grunt.registerTask('default', [
    'sass',
    'concat'
    ]);

};
