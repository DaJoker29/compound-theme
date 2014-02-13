module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            project: {
                options: {
                    paths: ['css/less'],
                    yuicompress: true
                },
                src: ['css/less/global.less'],
                dest: 'css/global.css'
            }
        },
        watch: {
            css: {
                files: ['css/less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble-less');

    grunt.registerTask('default', ['less', 'watch']);
}
