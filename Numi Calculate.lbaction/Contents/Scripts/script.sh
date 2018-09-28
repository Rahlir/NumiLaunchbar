#!/bin/bash
runningFor() {
	pid=$(pgrep Numi || echo 0)
	if [ $pid -eq 0 ]; then
		echo 0
	else
		ps -p $pid -o etime=
	fi
}

isOpen() {
	pgrep -q Numi && echo 1 || echo 0
}

openN() {
	if [ "$1" = "show" ]; then
		open -a Numi
	else
		open -j -a Numi && echo 1 || echo 2
	fi
}

$1 $2
