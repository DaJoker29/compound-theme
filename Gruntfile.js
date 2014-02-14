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
        watch: {
            css: {
                files: ['src/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble-less');

    grunt.registerTask('default', ['less', 'watch']);
}
