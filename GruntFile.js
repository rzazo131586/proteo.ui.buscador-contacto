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
		    	'src/**/*-filter.js',
		    	'src/bower_components/**/*.js',
		    	'dist/<%= pkg.name %>-dist.js'
		    ],
		    dest: 'dist/<%= pkg.name %>-dist.js',
		  }
		},
		compass: {                  		// Task
			dist: {                  	 	// Target
				options: {              	// Target options
					sassDir: 'src',
					cssDir: 'styles',
					environment: 'production'
				}
			}
		},
		copy: {
			res: {
				files: [
					{
						expand: true, 
						src: ['resources/**'], 
						dest: 'dist'
					}
				]
			},
			img: {
				files: [
					{
						expand: true, 
						src: ['styles/**'], 
						dest: 'dist'
					}
				]
			}
		},		
		ngtemplates:  {
			"proteo.ui.buscador-contacto":
			{
				src:      'src/**/*.html',
				dest:     'dist/<%= pkg.name %>-dist.js'
			}
		}	
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

  	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'ngtemplates',
		'concat',
		'compass',
		'uglify',
		'copy',
		'watch'
	]);
	grunt.registerTask('dist', [
		'concat',
		'ngtemplates',
		'compass',
		'uglify',
		'copy',
		'watch'
	]);
};