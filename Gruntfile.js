module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			ajaxify: {
				options: {
					'-W099': true,
				},
				src: ['src/**/*.js']
			}
		},

		concat: {
			ajaxify: {
				options: {
				    banner: '/*!\n' +
				    		' * <%= pkg.name %>\n' +
				    		' * Version: <%= pkg.version %>\n' +
						' * <%= pkg.description %>\n' +
						' * Author: <%= pkg.author %>\n' +
						' * Site: http://<%= pkg.homepage %>/\n' +
						//' * Licensed under the BSD license\n' +
						' */\n' +
						''
				},
				src: 'src/jquery.ajaxify.js',
				dest: 'dist/jquery.ajaxify.js',
			},
		},

		uglify: {
			ajaxifymin: {
				options: {
				    banner: '/*!\n' +
				    		' * <%= pkg.name %>\n' +
				    		' * Version: <%= pkg.version %>\n' +
						' * <%= pkg.description %>\n' +
						' * Author: <%= pkg.author %>\n' +
						' * Site: http://<%= pkg.homepage %>/\n' +
						//' * Licensed under the BSD license\n' +
						' */\n' +
						'',
					//report: 'gzip'
				},
				files: {
					'dist/jquery.ajaxify.min.js': ['src/jquery.ajaxify.js']
				}
			}
		},

		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: [
					'jshint',
					'concat',
					'uglify'
				],
			},
		},
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'jshint',
		'concat',
		'uglify',
		'watch'
	]);
}
