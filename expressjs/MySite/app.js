// get neccessary modules
var express = require("express"), stylus = require("stylus"), nib = require("nib"),  fs = require("fileupload");

// fire up Express using stylus and nib
var app = express();
function compile(str, path) {
	return stylus(str).set('filename', path).use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware({
	src : __dirname + '/public',
	compile : compile
}))
app.use(express.static(__dirname + '/public'));

// handle requests
app.get("/", function(req, res) {
	res.render("index", {
		title : "Home"
	});
});

app.get("/file_upload", function(req, res) {
	res.render("file_upload", {
		title : "File upload",
		fileInfo : fileInfo
	});
});

app.post("/upload_file", function(req, res) {
		
});

app.listen(3000); 

// print server started notification
console.log("Server started at port 3000");