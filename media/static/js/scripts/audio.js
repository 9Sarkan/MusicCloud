$(document).ready(function() {
	var homePlayer = new MediaElementPlayer('#player', {
		audioWidth: "100%",
		audioHeight: 21,
		startVolume: 1,
		loop: false,
		enableAutosize: true,
		features: ['playpause', 'current', 'progress', 'duration','tracks','volume'],
		alwaysShowControls: true,
		iPadUseNativeControls: false,
		iPhoneUseNativeControls: false, 
		AndroidUseNativeControls: false,
		alwaysShowHours: false,
		showTimecodeFrameCount: false,
		framesPerSecond: 25,
		enableKeyboard: true,
		pauseOtherPlayers: true,
		keyActions: [],
		loop: true,
		success: function (mediaElement, domObject) { 
		    mediaElement.addEventListener('loadeddata', function(e) {
		           $(".loading").fadeOut("slow");
		    }, false)
		}
	});
});
