// CommonJS规范导出这个函数为一个模块
//Greeter.js
module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = "Hi Everyone and Greetings!";
	return greet;
}