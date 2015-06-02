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

  require('./grunt_tasks/sass.js')(grunt, config);

  require('./grunt_tasks/javascript.js')(grunt, config);

  ////////////////////////
  // Register New Tasks
  ////////////////////////

  grunt.registerTask('default', [
    'sass',
    'concat',
    'jshint',
    'csslint',
    'watch'
    ]);

};
