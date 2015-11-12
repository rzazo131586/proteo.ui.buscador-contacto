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
		    	'dist/<%= pkg.name %>-dist.js',
		    	'src/bower_components/**/*.js'
		    ],
		    dest: 'dist/<%= pkg.name %>-dist.js',
		  }
		},
		compass: {                  		// Task
			dist: {                  	 	// Target
				options: {              	// Target options
					config: 'compass_config.rb'
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
						src: ['images/**'], 
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
	    },
		clean: ["dist"]
	});

  	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'clean',
		'ngtemplates',
		'concat',
		'compass',
		'copy',
		'uglify',
		'watch'
	]);
	grunt.registerTask('dist', [
		'ngtemplates',
		'concat',
		'compass',
		'copy',
		'uglify',
		'watch'
	]);
};