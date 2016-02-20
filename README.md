reap-presentation
----------------
reap-presentation is the example code used for a 1 hour presentation on reap.  

Creating a new reapp base application
-------------------------------------
npm install -g reapp  
reapp new myapp  
cd myapp  

npm install --save react@0.13.2  
npm install --save reapp-ui@0.12.55  
npm install --save reapp-kit@1.2.15  

edit 'package.config' to have 0.13.2 instead of ^0.13.2  

run 'npm install'  

'reapp run' to start the application  
http://localhost:3010/  

To see more documentation on reapp, try [the getting started docs](http://reapp.io/start.html).  

Building for Android
-------------------
reapp build android  
npm install -g cordova  
cd build  
mkdir cordova  
cordova create myapp  
cd myapp  
rm -r www  
cp -avr ../../android www  
cordova platform add android  
install android SDK from http://developer.android.com/sdk/index.html?hl=sk  
http://dl.google.com/android/installer_r24.4.1-windows.exe  
set ANDROID_HOME=C:\\android-sdk-windows  
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools  
cordova platform update android  
cordova prepare  
cordova compile  
cordova build  
