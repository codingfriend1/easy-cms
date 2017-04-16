
// const compileIndex = require('../../../components/compile-index')

var reasonsToRecompile = [
	'clientID', 
	'appID', 
	'verificationID', 
	'recaptchaClientKey', 
	'recaptchaKey'
];

module.exports = options => {
	
  const contains = options || reasonsToRecompile;

  return hook => {
    if(hook.params.query && contains.indexOf(hook.params.query.name) > -1) {
      console.log('recompiling html views');
      // compileIndex.call(hook.app);
    }
  }
}
