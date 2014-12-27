module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src/sass/',
          src: ['**/*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    inline: {
      dist: {
        options: {
          uglify: true
        },
        src: [ 'src/index.html' ],
        dest: [ './']
      }
    },
    watch: {
      scripts: {
        files: ['src/sass/**/*.scss', 'src/index.html'],
        tasks: ['sass', 'inline'],
        options: {
          debounceDelay: 250,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['inline', 'sass']);
};
