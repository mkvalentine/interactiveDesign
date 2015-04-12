$(document).ready(function(){

	$('#loonGif').hide();

	$('#title').toggle(function(){
		$('#loonGif').show();
	},
	function() {
        $('#loonGif').hide();
	});
});

