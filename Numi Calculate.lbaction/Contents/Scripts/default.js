// Tadeas Uhlir
// 09/09/2018
// default
// Default script for the LaunchBar action

const port = 15055

function run(argument) {
	// Just activate Numi
	if (argument == undefined) { // Inform the user that there was no argument 
		LaunchBar.alert('No argument was passed to the action'); 
	} 
}

function runWithString(string) {
	var query = encodeURIComponent(string);
	var request = HTTP.get('http://localhost:'+port+'/?q='+query);
	
	if (request.data != undefined) {
		var result = [{
			title: request.data
		}, {
			title: string+' = '+request.data,
			label: 'EXPR'
		}];
	}
	else if (request.error != undefined && request.error.includes('Could not connect')) {
		// Here, we will attempt to open Numi
		var result = [{
			title: "Couldn't connect"
		}];
	}
	LaunchBar.log(request.error);
		
	return result;
}

function openNumi(delay) {
	return 0;
}
