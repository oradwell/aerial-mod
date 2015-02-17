var defaultTasks = ['sass', 'inline', 'htmlmin'];

module.exports = function(grunt) {
  grunt.initConfig({
    // compile scss files
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
    // inline external scripts
    inline: {
      dist: {
        options: {
          uglify: true
        },
        src: 'src/index.html',
        dest: './index.html'
      }
    },
    // minimise HTML
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
    // watch for changes (for dev)
    watch: {
      scripts: {
        files: ['src/sass/**/*.scss', 'src/index.html', 'src/js/**/*.js'],
        tasks: defaultTasks,
        options: {
          debounceDelay: 250,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', defaultTasks);
};
