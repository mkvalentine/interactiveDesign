$(document).ready(function(){

	$('#loonGif').hide();
	$('#phoneCompass').hide();
	$('#phoneCompassStatic').hide();

	$('#title').toggle(function(){
		$('#loonGif').show();
		$('canvas').hide();
		$('#phoneCompass').show();
		$('#phoneCompassStatic').show();
	},
	function() {
        $('#loonGif').hide();
        $('canvas').show();
        $('#phoneCompass').hide();
		$('#phoneCompassStatic').hide();
	});
});

