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

  require('./grunt-tasks/sass.js')(grunt, config);

  require('./grunt-tasks/javascript.js')(grunt, config);

  ////////////////////////
  // Register New Tasks
  ////////////////////////

  require('./grunt-tasks/notSoAwesome.js')(grunt, config);

  require('./grunt-tasks/awesome.js')(grunt, config);

  require('./grunt-tasks/moreAwesome.js')(grunt, config);



};
