$(document).ready(function() {

	$(".album-songs .album-song .player .album-player").each(function() {
		$(this).find("audio").mediaelementplayer({
			audioWidth: "100%",
			audioHeight: 21,
			startVolume: 1,
			loop: false,
			enableAutosize: true,
			features: ['playpause', 'progress'],
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
		});
	});
});
