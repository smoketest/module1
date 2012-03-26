function fake1(){
	alert('fake 1');
	require('f2/fake2').fake2();
};

module.exports = {
	fake1: fake1
};