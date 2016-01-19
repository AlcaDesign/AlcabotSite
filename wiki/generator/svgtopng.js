/* jshint esnext: true */

(function() { 'use strict';

	var path = require('path'),
		
		svg_to_png = require('svg-to-png');

	function convert(_files) {
		let folder = path.join(__dirname, '../../images/'),
			files = _files.map(name => folder + name + '.svg');
		svg_to_png.convert(files, folder, {
					defaultWidth: 18,
					defaultHeight: 18
				})
			.then((data) => {
					
				});
	}

	convert(['sub-black','mod-black','broad-black']);

})();
