#!/bin/bash
usage="$(basename "$0") [-hS]

where:
	-h         show this help and exit
	-S         install for setapp version of Numi"

while getopts ':hS' option; do
	case "$option" in
		h) 	echo "$usage"
				exit
				;;
		S)  version="setapp"
			  ;;
		\?) printf "illegal option: -%s\n" "$OPTARG" >&2
			  echo "$usage" >&2
				exit 1
				;;
	esac
done



bold=$(tput bold)
normal=$(tput sgr0)

# Make sure previous version is properly removed
printf "${bold}Removing previous version:${normal}\n"
rm -vr ~/Library/Application\ Support/LaunchBar/Actions/Numi\ Calculate.lbaction

printf "\n${bold}Installing new version:${normal}\n"
cp -vr Numi\ Calculate.lbaction ~/Library/Application\ Support/LaunchBar/Actions/

if [ "$version" == "setapp" ]; then
	sed -i '' 's/com.nikolaeu.numi</com.nikolaeu.numi-setapp</g' "$HOME/Library/Application Support/Launchbar/Actions/Numi Calculate.lbaction/Contents/Info.plist"
fi
