# Numi Launchbar

Launchbar action for awesome little calculator [Numi](https://numi.io/).

## Installation

To get the most recent version, clone the repository and cp .lbaction bundle
into action folder of Launchbar: 
```bash 
git clone https://github.com/Rahlir/NumiLaunchbar.git 
cp -r "NumiLaunchbar/Numi Calculate.lbaction" "~/Library/Application Support/LaunchBar/Actions/"
```

For simplicity, I added shell script to remove previous version of **Numi Launchbar** and
to copy the newest version into Launchbar action folder. Just run
```bash
./install.sh
```
after cloning/pulling the repository.

## Caveat 

Right now, the action is unsigned. This means that you either have to sign it
yourself or allow unsigned actions in Launchbar's index.
