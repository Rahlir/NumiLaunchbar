# Numi Launchbar

Launchbar action for awesome little calculator [Numi](https://numi.io/). Inspired by
[Alfred extension](https://github.com/nikolaeu/Numi-extensions).

<img src="https://Rahlir.github.io/Assets/show.gif?raw=true" width=500px>

## Features

* Press `spacebar` and enter expression to be calculated with Numi
	* *Numi Calculate* can do convert currency, calculate scientific functions,
deal with different scales and units, do time calculations, and much more. See 
[Numi](https://numi.io/)
* Live Feedback Enabled: see the result as you type
* Press `enter` to activate the application - no need to select *Numi.app* in LaunchBar
* Automatically launches Numi in background if it is not running

## Installation

First, make sure that you have selected `Enable Alfred integration` in Numi's
preferences.

To get the most recent version, clone the repository and run the install script
which removes an old version of *Numi Calculate* if there is one and installs
the latest version:

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

## Changelog

**Version 0.9**
* Live Feedback is enabled now. *Numi Calculate* is now smarter about opening
Numi app in the background. Even with Live Feedback, *Numi Calculate* will
seamlessly start the app in the background and deliver the result once ready.
* Used icons from *font-awesome* bundle to have looks consistent with other
LaunchBar actions.

**Version 0.2**:
* When Numi is not running, the *Numi Calculate* action will start Numi in background
* When *Numi Calculate* action is run without input (pressing `return` instead of
`space`), Numi is shown in foreground and calculation can be done in a standard
Numi window

**Version 0.1** (alpha):
* 	Simple interaction between LaunchBar and Numi
	* 	Press `space` to enter input when the action is selected in LaunchBar
	* 	Displays result and the whole expresion
