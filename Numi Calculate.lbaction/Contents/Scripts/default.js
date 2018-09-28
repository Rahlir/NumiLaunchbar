// Tadeas Uhlir
// 09/09/2018
// default.js
// Default script for the LaunchBar action

const port = 15055
const maxTime = 5

function run(argument) {
	openNumi(true);
}

function runWithString(string) {
	var request = encodeURIComponent(string);
	var response = HTTP.get('http://localhost:'+port+'/?q='+request);

	var result;
	if (response.data != undefined) {
		result = [{
			title: response.data,
			icon: 'font-awesome:fa-calculator'
			}, {
			title: string + ' = ' + response.data,
			subtitle: 'EXPR',
			icon: 'font-awesome:fa-superscript'
			}];
	}
	else if (response.error != undefined && response.error.includes('Could not connect')) {
		var openCode = openNumi(false);
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
			title: string,
			icon: 'font-awesome:fa-calculator'
			}, {
			title: string + ' = ' + string,
			subtitle: 'EXPR',
			icon: 'font-awesome:fa-superscript'
			}];
	}

	if (result != undefined) {
		LaunchBar.debugLog(JSON.stringify(result[0]))
	}
	else {
		LaunchBar.debugLog("RESULT UNDEFINED")
	}

	return result;
}

function openNumi(show) {
	// This function returns 1 on successful opening of Numi,
	// 2 when Numi is already opened,
	// and 3 when Numi could not be opened
	if (show) {
		LaunchBar.execute('script.sh', 'openN', 'show');
		return 0
	}

	if (isOpen()) {
		if (runningFor() > maxTime) {
			return 2;
		} 
		else {
			return 1;
		}
	}
	else {
		var openCall = LaunchBar.execute('script.sh', 'openN');
		if (openCall == 1) {
			return 1;
		}
		else {
			return 3;
		}
	}
}

function isOpen() {
	var isOpen = LaunchBar.execute('script.sh', 'isOpen');
	if (isOpen == 1) {
		return true;
	}
	else {
		return false;
	}
}

function runningFor() {
	var runningForStr = LaunchBar.execute('script.sh', 'runningFor');
	var time_array = runningForStr.split(':')
	var seconds = time_array[time_array.length]
	return parseFloat(seconds)
}
