function Complex (real,imagination) {
	if (isNaN(real)||isNaN(imagination)) 
		throw new TypeError();
	this.r = real;
	this.i = imagination;
}


//相加
Complex.prototype.add = function (second) {
	return new Complex(this.r + second.r , this.i + second.i);
	console.log(this.r + second.i)
};
var myr1 = new Complex(2,3);
var myr2 = new Complex(3,2);
myr1.add(myr2);//Complex {r: 5, i: 5}


//相乘
Complex.prototype.mul = function (second) {
	return new Complex(this.r * second.r - this.i * second.i , this.r * second.i + this.i * second.r);
};
var num1 = new Complex(2,3);
var num2 = new Complex(4,5);
num1.mul(num2);//Complex {r: -7, i: 22}


//返回自身的模
Complex.prototype.mag = function () {
	return  Math.sqrt(this.r * this.r + this.i * this.i);
}
var myr = new Complex(2,3);
myr.mag();//3.605551275463989


//取反
Complex.prototype.fan = function () {
	return new Complex(~this.r , ~this.i);
}
var myr = new Complex(2,3);
myr.fan();//Complex {r: -3, i: -4}


//求负
Complex.prototype.neg = function () {
	return new Complex(- this.r , - this.i);
}
var myr = new Complex(2,3);
myr.neg();//Complex {r: -2, i: -3}


//是否相等
Complex.prototype.equals = function (second) {
	return this != null &&
	this.r === second.r && this.i === second.i;
} 
var myr = new Complex(2,3);
var myr2 = new Complex(2,3);
myr.equals(myr2);//true

var myr = new Complex(2,3);
var myr2 = new Complex(7,6);
myr.equals(myr2);//false


//返回字符串
Complex.prototype.toString = function (second) {
	return " 实数: " + this.r  + " , " + "虚数: " + this.i 
}
var myr = new Complex(2,3);
myr.toString(); //{2,3}