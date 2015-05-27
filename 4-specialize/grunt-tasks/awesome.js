module.exports = function (grunt, config) {

  grunt.registerTask('awesome', function(watch, mode) {

      grunt.task.run('sass');
      grunt.task.run('concat');
      grunt.task.run('jshint');

      if ( (watch == "lax") || (mode == "lax") ) {
        grunt.task.run('csslint:lax');
      }
      else {
        grunt.task.run('csslint:strict');
      }

      if (watch == "watch") {
        grunt.task.run('watch');
      }

    });

}
