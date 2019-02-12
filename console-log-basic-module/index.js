const cMSG = () => {
	console.log('Simple console log message module...');
}
module.exports = cMSG;

// usage
// use it as local dependency

//>>>>>>>>>>>>>>>>>  const cMSG = require('./cMSG');

// 
// 
// upload it at github
// yarn add gitusername/repo/folder/package#master 
// add dependency in package json by usin yarn command above
// and then in index.js use it like
 
const cMSG = require('console-log-basic-module');
cMSG();

// console-log-basic-module above is the package dependency /// its a package folder name that has the file index.js

// https://www.youtube.com/watch?v=QgiGF-c44n8