$(document).ready(function() {
	loadHeader();
	loadFooter();
});

function loadPage(pageName){
	$.ajax({
		type: "GET",
        url: pageName,
		dataType: "html",
		success: function(data){
			 $("html").html(data);
			loadHeader();
			loadFooter();
			loadBreadcrumb();
		}
	});
}

function loadHeader(){
	$(".mainheader").html("<header>" + 
	"<nav>" + 
	"<ul>" + 
	"	<li><a href=\"/index.html\">Home</a></li>" + 
	"	<li><a href=\"#\">Services</a>" + 
	"		<ul>" + 
	"			<li><a href=\"/services/about.html\" onclick=\"loadPage(\'/services/about.html\');\">About</a></li>" + 
	"			<li><a href=\"/services/contact.html\"onclick=\"loadPage(\'/services/contact.html\');\">Contact</a></li>" + 
	"		</ul>" + 
	"	</li>" + 
	"</ul>" + 
	"</nav>" + 
	"</header>");		
}
 
function loadFooter(){
	$(".mainfooter").html("The highest forms of understanding we can achieve are laughter and human compassion. ~ Richard P. Feynman"+
		"<br>The affairs of the world will go on forever, do not delay the practice of meditation. Once you have met with the profound instructions from a meditation master, with single pointed determination, set about realizing the Truth. ~Milarepa"+
		"<br>Whatever you do, just check - is it for the wellbeing of others, or is it about you? If it is about you, you shouldn’t do it. ~Sadhguru Jaggi Vasudev<br>");
}

function loadBreadcrumb(){
	// split relative path
	var items = location.pathname.substr(1).split("/");
	
	// build main path
	var mainpath = "<a href='" + location.protocol + "//" +
	location.host + "/";

	// begin breadcrumb
	var breadcrumbTrail = "Breadcrumb|Trail: ";
	for (var i = 0; i < items.length; i++) {
		// trailing slash
		if (items[i].length == 0 ) break;

		// extend main path for new level
		mainpath+=items[i];

		// add slash after all but last item
		if (i < items.length-1)
			mainpath+="/";

		// create breadcrumb component
		// add arrows for interior items only
		if (i > 0 && i < items.length)
			breadcrumbTrail+=" <span class=\"glyphicon glyphicon-circle-arrow-right\"></span> ";

		// add crumb
		breadcrumbTrail+= mainpath + "'>" + items[i] + "</a>";
	}

	// insert into page
	$("#breadcrumb").html(breadcrumbTrail);
}

$(window).on("load", function() {
	loadBreadcrumb();
});
