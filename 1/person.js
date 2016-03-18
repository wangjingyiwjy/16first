var num = 0;
function Person (name) {
	this.name = name;
	num ++;
	Person.prototype.count = function(){
		return num;
	}
}

Person.prototype.toString = function() {
	return this.name 
}

var ha = new Person('hahahaha');
var hei = new Person('hieheihei');
ha.toString();//hahaha
hei.toString();//heiheihei

hei.count();

var per3 = new Person('aaaaa')
per3.toString();//aaaaa
per3.count();

//实在不会。。