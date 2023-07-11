function fibonacci(num) {
// your code here
	let f=0;
	let s=1;
	let fab=0;
	for (let i=1; i < num; i++) {
		fab=fab+i;
	}
	return fab;
}

module.exports = fibonacci;
