var Grissue = function(options) {
	this.options = options;
};

Grissue.prototype.issues = function(callback) {

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(args) {
		if (this.readyState == this.DONE) {
		  callback(this.responseText);
		}
	};

	xhr.open("GET", "https://api.github.com/repos/usr/repo/issues");
	xhr.setRequestHeader('Authorization', 'token ' + this.options.token);
	xhr.send();
	
};