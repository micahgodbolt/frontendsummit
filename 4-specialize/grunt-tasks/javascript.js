module.exports = function (grunt, config) {
  grunt.config.merge({

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
        "eqnull": true,
      },
      all: [
        'Gruntfile.js',
        config.jsSrcDir + "*.js"
      ]
    },

    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      js: {
        files: "<%= concat.dist.src %>",
        tasks: [
          "jshint",
          "concat"
        ]
      }
    }

  });
}
