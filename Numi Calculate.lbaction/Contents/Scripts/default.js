// Tadeas Uhlir
// 09/09/2018
// default.js
// Default script for the LaunchBar action

const port = 15055
const delay = .25

function run(argument) {
	var openCode = openNumi(delay);
	LaunchBar.alert('No argument or wrong argument was passed to the action'); 
}

function runWithString(string) {
	var request = encodeURIComponent(string);
	var response = HTTP.get('http://localhost:'+port+'/?q='+request);

	var result;
	if (response.data != undefined) {
		result = [{
			title: response.data
			}, {
			title: string + ' = ' + response.data,
			subtitle: 'EXPR'
			}];
		}
	else if (response.error != undefined && response.error.includes('Could not connect')) {
		var openCode = openNumi(delay);
		if (openCode == 1) {
			return runWithString(string);
		}
		else if (openCode == 2) {
			LaunchBar.alert('Could not connect to Numi'
										  + '\nCheck that Alfred Extension is allowed in Numi preferences');
		}
		else {
			LaunchBar.alert('Could not open Numi.app, try opening it manually');
		}
	}
	else if (response.error != undefined) {
		LaunchBar.alert('Error: ' + response.error);
	}
	else {
		result = [{
			title: string
			}, {
			title: string + ' = ' + string,
			subtitle: 'EXPR'
			}];
	}

	return result;
}

function openNumi(delay) {
	// This function returns 1 on successful opening of Numi,
	// 2 when Numi is already opened,
	// and 3 when Numi could not be opened
	return 3;
}
