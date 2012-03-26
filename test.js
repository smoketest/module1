/**
 * @author Mahlon Gumbs
 */

function startup(){
	require('./fake1').fake1();
	return 'This is the start of the test.';
};

function shutdown(){
	return 'This is the end of the test.';
};

function start(){
	alert('Depracated. Please use startup() insteand.');
	alert(startup());
};

function stop(){
	alert('Depracated. Please use shutdown() insteand.');
	alert(shutdown());
};

module.exports = {
	startup: startup,
	shutdown: shutdown,
	start: start,
	stop: stop
};