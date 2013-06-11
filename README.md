webnpm
======

This is the web version for define and require function to load the module
-----------------------------------

We all know in node.js, we can very easily use _define_ function to define a module and use _require_ function to load the module. This is very powerful. In the javascript world of web, there are also a lot of tools to solve the similar problem. Unfortunately, all of which is too complex for me.

In my recent project, I need to use the [pinyin.js](https://github.com/hotoo/pinyin.js),which can work very well in node.js environment with [sea.js](http://seajs.org). But I want to use it in the web. So I read the source code of pinyin.js and find that if I can replace the define and require function, I can use this library directly without any change. I finally made it. So, here comes my web version of javascript package manager.

How to use it
--------------
It is simple, you only need to include the javascript in your html file
`<script language="javascript" src="libs/webnpm.js"></script>`

If you want to use require to include a javascript library, you need to define that.

```
//file name path/mylib.js
define(function(require,exports,module){
	var mylib=function(){console.log("mylib is running")};
	module.exports=mylib;
})
```


you can test your code with the following way:




```
	var mylib=require('path/mylib');
	mylib();//will print the string "my lib is running"
```



How to config it
----------------

So far, there are two parameters for configuring:

```
webnpm.config={
	pathProvider:function(path){
		return path;
	},
	autoAddPostfix:true;
}
```
- pathProvider: you can set your own pathProvider,so that your web app can load the right javascript lib. **attention:** the final path of the javascript lib has to be put to the same domain of your webapp in order to avoid the cross-domain issue of the browser.
- autoAddPostfix: if it is set to _true_, you can require("path/mylib") instead of using require("path/mylib.js")

Enjoy it
-----------

Thanks



