---
layout: post
title: Simple static html partials includes with yeoman and grunt.js
categories: blog
---


So you have this typical static site built with [Yeoman](http://). You probably duplicated your layout for each of the pages you sites contains. So you probably wondered how to actually include some partials and DRY up these pages.

## The tool

First you'll need to install [Grunt bake](https://github.com/MathiasPaumgarten/grunt-bake)

`npm install grunt-bake --save-dev`

Since Yeoman is loading all the available tasks from the top of your grunt file, there is no need to import the bake tasks anymore.

Bake actually has a lot more tasks that we need for this simple example, so I'll let you discover the rest.

## Update you grunt.js file

First, create a bake task inside you grunt config.


	grunt.initConfig({
		bake: {
		    build: {
		        options: {
		            // Task-specific options go here.
		        },
		        files: {
		            // files go here, like so:
		            "app/index.html": "app/base.html"
		        }
		    },
		}
	});



Since you need to include the partials before usemin take actions on the index.html to concatenate you assets, you need to **rename your index.html to base.html**

Next, edit you server task:


	grunt.registerTask('server', function (target) {
	    if (target === 'dist') {
	        return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
	    }
	    grunt.task.run([
	        'clean:server',
	        'bake:build',
	        'concurrent:server',
	        'connect:livereload',
	        'open',
	        'watch'
	    ]);
	});
 

Now this will includes the partials in base.html to index.html and then will be moved to the temp directory for livereload to watch.


You also need to do somehting similar for the build task, make sure the bake task happens before the useminPrepare:


	grunt.registerTask('build', [
	    'clean:dist',
	    'bake:build',
	    'useminPrepare',
	    'concurrent:dist',
	    'concat',
	    'cssmin',
	    'uglify',
	    'copy:dist',
	    'rev',
	    'usemin'
	]);
	



Now to make livereload catch your changes you need to add the folder where you want it to watch your partials. In our case we'll use app/includes:


	watch: {
	    compass: {
	        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
	        tasks: ['compass:server']
	    },
	    styles: {
	        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
	        tasks: ['copy:styles']
	    },
	    bake: {
	        files: [ "<%= yeoman.app %>/includes/**" ],
	        tasks: "bake:build"
	    },
	    livereload: {
	        options: {
	            livereload: LIVERELOAD_PORT
	        },
	        files: [
	            '<%= yeoman.app %>/*.html',
	            '.tmp/styles/{,*/}*.css',
	            '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
	            '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
	        ]
	    }
	}



## Include you partials in base.html

	<!--(bake includes/header.html)-->

So a simple page could look like this:


	<!--(bake includes/header.html)-->
	<div class="container">
	  <!--(bake includes/sidebar.html)-->
	  <!--(bake includes/main-content.html)-->
	</div>


## Comments

If you have a better/simpler way to achieve the same, please shoot at [@borisrorsvort](http://twitter.com/borisrorsvort)