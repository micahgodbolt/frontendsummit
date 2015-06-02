module.exports = function (grunt, pkg) {
  var path = require('path');


  grunt.registerTask('renderTest', function(file) {
    var target,
        componentName;

    target = (typeof file === 'undefined') ? "src/sass/**/*.tests.json" : "src/sass/**/" + file + ".tests.json" ;

    grunt.file.expand([target]).forEach(function(filepath) {

      componentName = path.basename(filepath, '.json');

      grunt.config.set('twigRender.tests.files.0.data', filepath);
      grunt.config.set('twigRender.tests.files.0.cwd', path.dirname(filepath));
      grunt.config.set('twigRender.tests.files.0.src', componentName + '.twig');


      grunt.task.run('twigRender:tests');

    })
  });
}
