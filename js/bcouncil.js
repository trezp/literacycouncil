$( "#accordion" ).accordion({
	collapsible: true,
	active: false,
	animate: 200,
	heightStyle: "content"
});

$(document).ready(function(){
//when section link is clicked, load that section into the home-content div
//and remove most-important div CHANGE TO MORE SENSIBLE NAMES 
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

