#!/bin/bash
npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass;
npm --registry=https://registry.npm.taobao.org --phantomjs=http://npm.taobao.org/mirrors/phantomjs --ChromeDriver=http://npm.taobao.org/mirrors/chromedriver --Selenium=http://npm.taobao.org/mirror/selenium -d install;
npm --registry=https://registry.npm.taobao.org --phantomjs=http://npm.taobao.org/mirrors/phantomjs --ChromeDriver=http://npm.taobao.org/mirrors/chromedriver --Selenium=http://npm.taobao.org/mirror/selenium -d run build;
#npm run dev;