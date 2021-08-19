const fs = require('fs');

module.exports = {
	getFiles: (dir, files_ = []) => {
		fs.readdirSync(dir).map(file => {
			const name = dir + '/' + file;
			fs.statSync(name).isDirectory() ?
				module.exports.getFiles(name, files_) :
				files_.push(name);
		});
		return files_;
	},
};