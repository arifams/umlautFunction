"use strict";

var getQueryString = function ( field, url ) {
	    var href = url ? url : window.location.href;
	    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	    var string = reg.exec(href);
	    return string ? string[1] : null;
	};

function umlaut() {
	.replace(/\+/g, " ")
	.replace(/\%27/g, "'")
	.replace(/\%2C/g,",")
	.replace(/\%C3%A4/g, "ä")
	.replace(/\%C3%84/g, "Ä")
	.replace(/\%C3%AF/g,"ï")
	.replace(/\%C3%8F/g,"Ï")
	.replace(/\%C3%BC/g,"ü")
	.replace(/\%C3%9C/g,"Ü")
	.replace(/\e%C3%AB/g,"ë")
	.replace(/\ %C3%8B/g,"ë")
	.replace(/\%C3%B6/g,"ö")
	.replace(/\%C3%96/g,"Ö")
	.replace(/\%C3%BF/g, "ÿ")
	.replace(/\%C5%B8/g, "Ÿ");
}
