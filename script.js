$(document).ready(function(){

	var urls = {
		"facebook" :{
			"baseurl" : "https://www.facebook.com/sharer/sharer.php",
			"parameters" : [
				{ name: "u", value: "http://brospars.github.io/" }
			]
		},
		"twitter" :{
			"baseurl" : "http://twitter.com/share",
			"parameters" : [
				{ name: "url", value: "http://brospars.github.io/" },
				{ name: "text", value: "Discover this awesome content" },
				{ name: "hashtags", value: "Frontend,Share,Social" },
				{ name: "via", value: "Benuuts" }
			]
		},
		"linkedin" :{
			"baseurl" : "http://www.linkedin.com/shareArticle",
			"parameters" : [
				{ name: "url", value: "http://brospars.github.io/" },
				{ name: "title", value: "Discover this awesome content" },
				{ name: "summary", value: "Super simple social share buttons (no configuration required)" },
				{ name: "source", value: "brospars.github.io" }
			]
		},
		"googleplus" :{
			"baseurl" : "https://plus.google.com/share",
			"parameters" : [
				{ name: "url", value: "http://brospars.github.io/" }
			]
		},
		"pinterest" :{
			"baseurl" : "http://pinterest.com/pin/create/link/",
			"parameters" : [
				{ name: "url", value: "http://brospars.github.io/" },
				{ name: "media", value: "http://brospars.github.io/img/grenoble-lans.jpg" },
				{ name: "description", value: "Super simple social share buttons (no configuration required)" }
			]
		},
		"email" :{
			"baseurl" : "mailto:",
			"parameters" : [
				{ name: "subject", value: "Discover this awesome content" },
				{ name: "body", value: "Super simple social share buttons (no configuration required) : http://brospars.github.io/" }
			]
		},
		"instagram" :{
			"baseurl" : "",
			"parameters" : []
		}
	};

	$(".share-btn").on("click",function(e){
		e.preventDefault();

		var target = $(this).data("target");

		var url = urls[target].baseurl+"?"+decodeURIComponent($.param(urls[target].parameters, true));

		if(target == "email"){
			window.location = url;
		}else if(target == "instagram"){
			window.alert("no instagram sharer");
		}else{
			var sharepopup = window.open(url, "pop", "width=600, height=400, scrollbars=no");
		}
	    
	});

});