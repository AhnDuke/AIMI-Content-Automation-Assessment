module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
          dist: {
              files: {
                  'dist/css/styles.css': 'src/scss/styles.scss'
              }
          }
      },
      concat: {
          dist: {
              src: ['src/js/*.js'],
              dest: 'dist/js/script.js'
          }
      },
      watch: {
          css: {
              files: ['src/scss/*.scss'],
              tasks: ['sass']
          },
          js: {
              files: ['src/js/*.js'],
              tasks: ['concat']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'watch']);
};
