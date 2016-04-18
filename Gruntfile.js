/**
 * Created by vinside on 4/15/16.
 */

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-include-replace-more');
    grunt.initConfig({
        clean: ['build/*'],
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/stylesheets/style.css': 'src/sass/style.scss'
                }
            }
        },

        includereplacemore: {
            dev: {
                options: {
                    includesDir: 'src/html'
                },

                expand: true,
                cwd: 'src/html',
                src: '*.html',
                dest: 'build/'
            }
        },

        copy: {
            files: {
                expand: true,
                cwd: 'src',
                src: ['fonts/**/*', 'images/**/*'],
                dest: 'build/',
                filter: 'isFile'
            }
        },

        watch: {
            configFiles: {
                files: [ 'src/javascripts/**/*', 'src/html/**/*', 'src/fonts/**/*', 'src/images/**/*', 'src/sass/**/*'],
                tasks: ['copy', 'sass', 'includereplacemore'],
                options: {
                    //reload: true
                }
            }
        }
    });
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('start', ['clean', 'copy', 'sass', 'includereplacemore', 'watch'])

};