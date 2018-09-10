// Tadeas Uhlir
// 09/09/2018
// default.js
// Default script for the LaunchBar action

const port = 15055

function run(argument) {
	if (argument == undefined) { // Inform the user that there was no argument 
		LaunchBar.alert('No argument was passed to the action'); 
	} 
	else { // Return a single item that describes the argument 
		return [{ title: 'An argument was passed: ' + argument }];
	}
}

function runWithString(string) {
	var body = 'q=' + string;
	var result = HTTP.post('http://localhost:'+port, {body: body});
	LaunchBar.log(result.data);
}
