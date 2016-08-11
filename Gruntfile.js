module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    respimg: {
      options: {
        // Task-specific options go here.
        widths: [200]
      },
      files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**.{gif,jpg,png,svg}'],
          dest: 'build/img/'
        }]
      }
    });

  // Load the plugin that provides the "" task.
  grunt.loadNpmTasks('grunt-respimg');

  // Default task(s).
  grunt.registerTask('default', ['grunt-respimg']);

};