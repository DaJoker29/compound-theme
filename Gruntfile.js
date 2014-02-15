module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            project: {
                options: {
                    paths: ['src/less'],
                    yuicompress: true
                },
                src: ['src/less/global.less'],
                dest: 'public/css/global.css'
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: false
                },
                files: {
                    "public/index.html": "src/jade/*.jade"
                }
            }
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['less', 'jade', 'watch']);
}
