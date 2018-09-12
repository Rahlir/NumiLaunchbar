try
	tell application "System Events"
		set the BID to (get the id of application process "Numi")
		return 3
	end tell
on error errMsg
	try
		tell application "Numi"
			activate
		end tell
		tell application "System Events"
			set visible of application process "Numi" to false
		end tell
		return 1
	on error errMsg
		return 2
	end try
end try
