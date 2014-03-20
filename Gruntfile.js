module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            project: {
                options: {
                    paths: ['src/less'],
                    yuicompress: true
                },
                src: ['src/less/manifest.less'],
                dest: 'public/css/style.css'
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    "public/index.html": "src/jade/manifest.jade",
                    "public/artist.html": "src/jade/artist.jade",
                    "public/store.html": "src/jade/store.jade",
                    "public/home.html": "src/jade/home.jade",
                    "public/home-side.html": "src/jade/home-side.jade",
                    "public/artist-side.html": "src/jade/artist-side.jade",
                    "public/store-side.html": "src/jade/store-side.jade",
                    "public/cart.html": "src/jade/cart.jade"
                }
            }
        },
        jadeUsemin: {
            main: {
                options: {
                    uglify: true
                },
                files: {
                    src: ['src/jade/usemin.jade']
                }
            } 
        },
        jshint: {
            options: {
                jshintrc: 'jshintrc'
            },
            custom: ['src/js/**/*.js'],
        },
        watch: {
            css: {
                files: ['src/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                },
            },
            html: {
                files: ['src/jade/**/*.jade'],
                tasks: ['jade'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint', 'jadeUsemin'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jade-usemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['less', 'jade', 'jadeUsemin', 'jshint', 'watch']);
}
