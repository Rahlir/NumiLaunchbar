# Numi Launchbar

Launchbar action for awesome little calculator [Numi](https://numi.io/). Inspired by
[Alfred extension](https://github.com/nikolaeu/Numi-extensions).

![Showcase](https://rahlir.github.io/Assets/showcase.gif)

## Features

**Version 0.2**:
* When Numi is not running, the *Numi Calculate* action will start Numi in background
* When *Numi Calculate* action is run without input (pressing `return` instead of
`space`), Numi is shown in foreground and calculation can be done in a standard
Numi window

**Version 0.1** (alpha):
* 	Simple interaction between LaunchBar and Numi
	* 	Press `space` to enter input when the action is selected in LaunchBar
	* 	Displays result and the whole expresion

## Installation

First, make sure that you have selected `Enable Alfred integration` in Numi's
preferences.

To get the most recent version, clone the repository and run the install script
which removes an old version of *Numi Calculate* if there is one: 

```bash 
git clone https://github.com/Rahlir/NumiLaunchbar.git 
cd NumiLaunchbar
./install.sh
```

The install script has to be run every time you pull updates from this
repository.

## Caveat 

Right now, the action is unsigned. This means that you either have to sign it
yourself or allow unsigned actions in Launchbar's index.

## Acknowledgment

Icons by Muneer A.Safiah from the Noun Project:
[website](https://thenounproject.com/mabusafiah/).
