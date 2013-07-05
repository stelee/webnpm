/*
webnpm

A simple javascript package management tool

version 1.2

author: liyang

email: stephen.liy@gmail.com

*/

var webnpm=new Object();

webnpm.config={
	pathProvider:function(path){
		return path;
	},
	autoAddPostfix:true
}

webnpm.define=function(fn){
  if("object"==typeof(fn)){
    return fn;
  }else if("function"==typeof(fn)){
    var module={
      exports:{}
    }
    fn(require,module.exports,module);
    return module.exports;
  }
}
webnpm.require=function(path){
	if(webnpm.autoAddPostfix){
		if(path.length<3){
			path=path+".js";
		}else if(path.substring(path.length-3)!=".js"){
			path=path+".js";
		}
	}
	var path=webnpm.config.pathProvider(path);

	var ret;
	$.ajax(path,{
		async:false,
		dataType:"html",
		scriptCharset:"UTF-8",
		success:function(data)
		{
			ret=data;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			ret=null;
		}
	})
	return eval(ret);
}
define=webnpm.define;
require=webnpm.require;