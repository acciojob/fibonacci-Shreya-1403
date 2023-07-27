function fibonacci(num) {
// your code here
	 let a = 0, b = 1, c, i;
    if( num == 1)
        return a;
	if(num==2)
		return b;
    for(i = 3; i <= num; i++)
    {
    c = a + b; //c==1
    a = b; //a==1
    b = c; //b==1
    }
    return b;
}

module.exports = fibonacci;
