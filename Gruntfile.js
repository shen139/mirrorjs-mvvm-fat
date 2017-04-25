module.exports = function (grunt)
{
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    require: ["./src/app.js:MVVMApp"],
                    transform: ["babelify", "grunt-less-browserify"]
                },
                files: {
                    "./build/MVVMApp.js": ["./src/app.js"]
                }
            }
        },

        watch: {
            scripts: {
                files: ["./src/**"],
                tasks: ["browserify"]
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: "node_modules/", src: ["mirrorjs/**", "mirrorjs-widgets/**"], dest: "build/"},
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify", "copy"]);
};
