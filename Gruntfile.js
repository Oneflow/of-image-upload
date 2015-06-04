var grunt = require('grunt');

grunt.initConfig({
    ngtemplates: {
        'oneflow.image-upload': {
            src: 'templates/**/*.html',
            dest: 'src/templates.js'
        }
    },
    concat: {
      dist: {
        src: 'src/*.js',
        dest: 'dist/image-upload.js'
      }
    }
});

grunt.loadNpmTasks('grunt-angular-templates');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', 
    [
      'ngtemplates',
      'concat'
    ]);