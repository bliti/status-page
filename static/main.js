//main.js

$(document).ready(function() {
	
	//change these two vars to whatever
	//message you might need to.
	var online = 'System is online as of:' ;
	var offline = "System is offline as of: ";
	
	//timestamp for status message. It helps. :)
	var stamp = new Date();

	//change the URL to your needs
	var url = 'http://localhost:3000';
    
	var ping = $.get(url, function(response){
		console.log(response);
    })
	.done(function(response){
		
		$('link[rel="shortcut icon"]').remove();
		$('head').append('<link id="favicon" rel="shortcut icon" href="static/green/favicon.ico">');
		$('.current-status').removeClass('bg-danger');
		$('.current-status').addClass('bg-success');
		$('.current-status').text(online+stamp);
	})
	.fail(function(response){
		
		$('head').append('<link id="favicon" rel="shortcut icon" href="static/red/favicon.ico">');
		$('.current-status').removeClass('bg-success');
		$('.current-status').addClass('bg-danger');
		$('.current-status').text(offline+stamp);
	})
	.always(function(response){
		console.log(response);
	})
});


