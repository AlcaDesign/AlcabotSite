/* jshint esnext: true */

(function() { 'use strict';

var fs = require('fs'),
	
	commands = require('./commands'),
	
	options = {
			headers: {
					comName: '###',
					params: '####',
					examples: '#####'
				},
			wraps: {
					nameHeaderParams: {
							false: ['_[', ']_'],
							true: ['_<', '>_']
						}
				},
			permTypes: {
					sub: 'Subscriber',
					mod: 'Moderator',
					broad: 'Broadcaster'
				},
			parmTypes: {
					string: 'String',
					number: 'Number'
				}
		};

function genCommand(command) {
	let output = '';
	
	output += `${options.headers.comName} !${command.name}`;
	
	if(command.para.length > 0) {
		
		output += ' ' + command.para.map(n => 
						options.wraps.nameHeaderParams[n.requ].join(n.name)
					).join(' ');
		
	}
	
	output += `\n\n${command.desc}\n\n`;
	
	if(command.para.length > 0) {
		
		output += `${options.headers.params} Parameters\n\n` +
					'| Name | Permission | Required | Type |\n' +
					'|------|------------|----------|------|\n' +
					command.para.map(n =>
								`| ${[		n.name,
											options.permTypes[n.perm],
											n.requ ? 'Yes' : 'No',
											options.parmTypes[n.type]
										].join(' | ')
									} |`
							)
						.join('\n');
		
	}
	
	output += '\n\n';
	
	if(command.exam.length > 0) {
		
		output += `${options.headers.examples} Examples\n\n`;
		
		output += command.exam.map(n => {
				let params = n.inpu.slice(1).map(n => n.toLowerCase()),
					output = `${n.desc}:\n` +
						`> **${n.inpu[0]}**`;
				if(params.length > 0) {
					output += ` \`${params.join('` `')}\``;
				}
				output += `\n>> ${n.outp.split(' ')
						.map(m =>
								params.indexOf(m.toLowerCase().split("'")[0]) > -1 ? `\`${m}\`` : m
							)
						.join(' ')}`;
				return output;
			}).join('\n\n');
		
	}
	
	return output;
}

fs.writeFile('commands.md', commands.map(genCommand).join('\n\n'), 'utf8', err => {
		if(err) throw err;
		console.log('Saved to commands.md');
	});

})();
