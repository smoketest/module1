function fake2(){
	alert('THE FAKE 2');
    require('lib/module1/f2/f3/fake3').fake3();

};

module.exports = {
	fake2: fake2
};