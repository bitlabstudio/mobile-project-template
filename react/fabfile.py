from __future__ import with_statement

import os

from fabric.api import cd, local


CORDOVA_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), '../cordova'))


def build():
    local('npm run build-ios')
    local('cd ../cordova && cordova prepare')

def deploy_ios():
    local('open ../cordova/platforms/ios/HelloCordova.xcodeproj')

def deploy_android():
    local('cd {} && cordova run android --device'.format(CORDOVA_PATH))
