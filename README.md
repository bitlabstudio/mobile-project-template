This repository shall contain a simple starter project for mobile development
with django-rest-framework, Cordova and ReactJS.

# Prerequisites

## Install Cordova

```bash
sudo npm install -g cordova
```

This is how we created the ``mobile`` folder of this project.
You don't need to do this when you clone this repository.

```bash
cordova create cordova
cd cordova
cordova platform add ios
cordova platform add android
rm -r www
ln -s ../mobile/build/ios www
```

## Install JDK & Android Studio

* JDK: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
* Android Studio: http://developer.android.com/sdk/index.html

## Install ant

On OSX:

```bash
brew install ant
```

On Ubuntu:

```bash
sudo apt-get install ant
```
