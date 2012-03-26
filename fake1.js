function fake1(){
	alert('THE FAKE 1');
	require('lib/module1/f2/fake2').fake2();
};

module.exports = {
	fake1: fake1
};