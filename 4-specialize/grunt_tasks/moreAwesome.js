module.exports = function (grunt, config) {

  grunt.registerTask('moreAwesome', function(watch, mode) {

      grunt.task.run('sass');
      grunt.task.run('concat');
      grunt.task.run('jshint');

      if ( (watch == "lax") || (mode == "lax") ) {
        grunt.config.set('csslint.strict.options.important', false);
      }

      grunt.task.run('csslint:strict');

      if (watch == "watch") {
        grunt.task.run('watch');
      }

    });

}
