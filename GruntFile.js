module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
  		  all: {
		    src: [
		    	'src/**/*-module.js',
		    	'src/**/*-controller.js',
		    	'src/**/*-directive.js',
		    	'src/**/*-service.js',
		    	'src/**/*-filter.js'
		    ],
		    dest: 'dist/proteo.ui.buscador-contacto.js',
		  }
		},
		compass: {                  		// Task
			dist: {                  	 	// Target
				options: {              	// Target options
					sassDir: 'src',
					cssDir: 'dist',
					environment: 'production'
				}
			}
		},
		copy: {
		  main: {
		    files: [
		      // includes files within path
		      {
		      	expand: true, 	
		      	cwd: 'src/', 	// Path to wordk
		      	src: [
					'*.html' 	// Type file to copy
		      	], 
		      	dest: 'dist/'	// Path to copy files
		      }
		    ]
		  }
		},
		watch: {
		    js: {
		        files: [
		            'src/**/*.js',
		        ],
		        tasks: ['concat', 'copy']
		    },
		    css: {
		        files: [
		            'src/{,*/,*/*/}*.{scss,sass}'
		        ],
		        tasks: ['compass', 'copy']
		    },
		    html: {
		        files: [
		        	'**/*.html'
		        ],
		        tasks: ['copy']
		    },
		},
	    uglify: {
			build: {
				src: 'src/*.js',
				dest: 'dist/<%= pkg.name %>-dist.min.js'
			},
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'concat',
		'compass',
		'copy',
		'watch'
	]);
	grunt.registerTask('dist', [
		'concat',
		'compass',
		'uglify',
		'copy',
		'watch'
	]);
};