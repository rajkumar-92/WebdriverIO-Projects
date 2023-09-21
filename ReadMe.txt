For Mocha, use npm install --save-dev mocha
For WebdriverIO, we have to add dev dependency npm install webdriverio --save-dev
For WebdriverIO testrunner command line interface, install using npm install @wdio/cli
Set WebdriverIO configuration using ./node_modules/.bin/wdio config(Note: If we face any dificult please launch
powershell with run as administrator and enter command Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine)
Install local runner dev dependency using  npm install local-runner --save-dev
Add Allure reporter dev dependency using  npm install @wdio/allure-reporter --save-dev
Add allure command line terminal using npm install -g allure-commandline --save-dev
Add allure command line terminal to auto generate reports using npm i allure-commandline
Add appium dependency using npm install -g appium@next
Install driver dependencies  npm i @appium/execute-driver-plugin
Install UIAutomator using appium driver install uiautomator2
Install moment for formatting date using npm install moment --save  
Install excel dependency using npm i xlsx
Install mySQL dependency using npm install mysql
For API installation use npm install wdio-intercept-service --save-dev (Once installed update the wdio. conf.js - add 'intercept', in services: section)   

1.Launch VS Code
2.Open android sdk and start execution emulator[Note:For 1st time only]
3. Launch execution emulator using below 2 commands

   cd C:\Users\Adimn\AppData\Local\Android\Sdk\emulator
   emulator -avd TestEmulator 
   
4.Launch appium server using command appium -p 4724
   cd C:\Users\Adimn\AppData\Local\Android\Sdk\emulator
   emulator -avd Pixel5AppiumInspector
5. Open appium inspector and launch inspector emulator


Note:Before executing we have clear the existing reports & results using command: npm run-script pretest 

1) For Mobile Automation:
   To run whole suite=> npm run wdio
   To run single Test=> npx wdio run ./wdio.conf.js --spec LanguageTest.specs.js
					 
2) For Web Automation:  
   To run whole suite=> npm run wdio:web
   To run single Test=> npx wdio run ./wdio.conf.webapplication.js --spec InterceptorTest.js

Note: Allure report will generate automatically,just we have to open using below command: allure open