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
                    "public/index.html": "src/jade/manifest.jade"
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

    grunt.task.registerTask('shot', 'Take screenshots of Homepage (large and mobile).', function() {
	var webshot = require('webshot');
	webshot('./public/index.html', 'homepage.png', function(err) {});
    });

    grunt.registerTask('default', ['less', 'jade', 'watch', 'webshot']);
}
