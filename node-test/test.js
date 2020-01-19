// console.log(2+2);
let fs = require('fs');
let https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Node experiment...</h1>", function(error) {
	if(error) {
		return console.log(error);
	} else {
		return console.log("Congrats...");
	}
});

let myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotoLocation, function(response) {
	response.pipe(fs.createWriteStream(__dirname + "/myDog.jpg"));
});
