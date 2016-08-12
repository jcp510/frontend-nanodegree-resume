module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    respimg: {
      options: {
        // Task-specific options go here.
        widths: [200],
      },
      image_target: {
        files: [{
          //Process a dynamic src-dest file mapping
          expand: true,
          //All src matches are relative to (but don't include) this path.
          cwd: 'images/',
          src: ['**.{gif,jpg,png,svg}'],
          dest: 'build/images/'
        }]
      }
    }
  });

  // Load the plugin that provides the "" task.
  grunt.loadNpmTasks('grunt-respimg');

  // Default task(s).
  grunt.registerTask('default', ['respimg']);

};