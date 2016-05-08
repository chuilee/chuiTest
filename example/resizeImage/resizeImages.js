var fs = require('fs')
var gm = require('gm')

fs.readdir(__dirname + '/images/', (err, files) => {
	files.forEach( (file) => {
		var readStream = fs.createReadStream(__dirname + '/images/' + file)
		gm(readStream)
			.resize('200%', '200%')
			.stream((err, stdout, stderr) => {
				var writeStream = fs.createWriteStream(__dirname + '/images@2x/'+file)
				stdout.pipe(writeStream)
			})
	} ) 
});
