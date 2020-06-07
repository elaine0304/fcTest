#!/usr/bin/env bash

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" == "master" ];
then
    echo "Current branch is $APPCENTER_BRANCH"
    npm install
    npm I jetifier
    npx jetify
    ls
    cd android 
    ./gradlew clean
    ./gradlew cleanBuildCache
fi