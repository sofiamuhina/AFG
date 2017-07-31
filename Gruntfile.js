module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    
    grunt.initConfig({
    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },
    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]})
          ]
        },
         src: "css/*.css"
      }
    },
                     
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css",
            "js/*.js"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
          files: ["*.html"]
      },
      style: {
        files: ["sass/**/*.{scss,sass}"],
        tasks: ["sass"]
      }
    }

    });
    grunt.registerTask("serve", ["browserSync", "watch"]);
};