$(document).ready(function(){

	$('#loonGif').hide();

	$('#title').toggle(function(){
		$('#loonGif').show();
		$('canvas').hide();
	},
	function() {
        $('#loonGif').hide();
        $('canvas').show();
	});
});

