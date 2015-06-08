//main.js

$(document).ready(function() {
	
	$('#status-btn').click(function(){
		console.log('click');
	var url = 'http://localhost:3000'
    var ping = $.get(url, function(response){
		console.log(response);
    })
	.done(function(response){
		
		stamp = new Date(response.when);
		
		$('#current-status').removeClass('text-danger');
		$('#current-status').addClass('text-success');
		$('#current-status').text("Pong received on: "+stamp);
	})
	.fail(function(response){
		$('#current-status').removeClass('text-success');
		$('#current-status').addClass('text-danger');
		$('#current-status').text("Pong not received");
	})
	.always(function(response){
		console.log(response);
	})
	
	});
});


