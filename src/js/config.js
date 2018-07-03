require.config({
	baseUrl : "/",
	paths : {
		jquery : "lib/jquery/jquery-1.12.4.min",
		template : "lib/artTemplate/template-web",
		cookie : "lib/jquery-plugins/jquery.cookie",
		xm_carousel: "lib/jquery-plugins/xm_carousel/jquery.xm_carousel",
		fly : "lib/jquery-plugins/jquery.fly.min",
		zoom : "lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
		load : "js/headerandfooter"	,
		banner:"js/banner",
		jQuery_1:"js/jquery-1.8.3.min"
	},
	shim : {
		xm_carousel : {
			deps : ["jquery"]
		},
		fly : {
			deps : ["jquery"]
		},
		zoom : {
			deps : ["jquery"]
		},
		jQuery_1:{
			deps : ["jquery"]
		},
		banner:{
			deps : ["jquery"]
		}	
	}
});