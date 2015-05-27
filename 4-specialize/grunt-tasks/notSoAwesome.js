module.exports = function (grunt, config) {
  grunt.registerTask('strict_build', [
      'sass',
      'concat',
      'jshint',
      'csslint:strict',
      ]);

    grunt.registerTask('lax_build', [
      'sass',
      'concat',
      'jshint',
      'csslint:lax',
      ]);

    grunt.registerTask('strict_watch', [
      'sass',
      'concat',
      'jshint',
      'csslint:strict',
      'watch'
      ]);

    grunt.registerTask('lax_watch', [
      'sass',
      'concat',
      'jshint',
      'csslint:lax',
      'watch'
      ]);
  }
