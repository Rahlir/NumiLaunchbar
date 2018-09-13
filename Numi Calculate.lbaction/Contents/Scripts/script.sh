#!/bin/bash
isOpen() {
	lines=$(ps -A | grep -c Numi.app)
	if [ $lines -gt 1 ]; then
		echo 1
	else
		echo 0
	fi
}

openN() {
	if [ "$1" = "show" ]; then
		open -a Numi
	else
		open -j -a Numi
		sleep "$1"
	fi
}

$1 $2
