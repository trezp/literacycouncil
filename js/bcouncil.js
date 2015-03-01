$( "#accordion" ).accordion({
	collapsible: true,
	active: false,
	animate: 200,
	heightStyle: "content"
});

$("#home").click(function(){
	$("#body").load("#home");
});

$("#classes").click(function(){
	console.log("Clicked")
	$("#body").load("classes.html");
});

$("#volunteer").click(function(){
	$("#body").load("volunteer.html");
});

$("#about").click(function(){
	$("#body").load("about.html");
});

$("#general").click(function(){
	$("#body").load("general.html");
});
