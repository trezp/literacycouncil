$( "#accordion" ).accordion({
	collapsible: true,
	active: false,
	animate: 200,
	heightStyle: "content"
});

$(document).ready(function(){


		// $("#home").click(function(){
  //       $('#most-important').load();
  //      }); 

       $("#classes-link").click(function(){
        $('#home-content').load('classes.html')
        $('#most-important').remove();
       }); 

       $("#volunteer-link").click(function(){
        $('#home-content').load('volunteer.html');
        $('#most-important').remove();
       }); 

       $("#about-link").click(function(){
        $('#home-content').load('about.html');
        $('#most-important').remove();
       }); 

       $("#general-link").click(function(){
        $('#home-content').load('general.html');
        $('#most-important').remove();
       }); 
     });

$("#classes").on('click', function(e){
	e.preventDefault;
	$("#magic").load("classes.html")
});