module.exports = function (grunt, config) {
  grunt.config.merge({

  // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
      },
      dist: {
        src: config.scssDir + 'style.scss',
        dest: config.cssDir + 'style.css',
      }
    },

    // https://github.com/gruntjs/grunt-contrib-csslint
    csslint: {
      strict: {
        options: {
          important: 2
        },
        src: "<%= sass.dist.dest %>"
      },
      lax: {
        options: {
          important: false
        },
        src: "<%= sass.dist.dest %>"
      }
    },

    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      strict: {
	files: config.scssDir + "style.scss",
	tasks: [
	  "sass",
	  "csslint:strict"
	]
      },
      lax: {
        files: config.scssDir + "style.scss",
        tasks: [
          "sass",
	  "csslint:lax"
        ]
      }
    }

  });
};
