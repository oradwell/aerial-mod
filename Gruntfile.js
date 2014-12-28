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
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.html'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/sass/**/*.scss', 'src/index.html', 'src/js/**/*.js'],
        tasks: ['sass', 'inline', 'htmlmin'],
        options: {
          debounceDelay: 250,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'inline', 'htmlmin']);
};
