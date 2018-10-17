function add(btn) {
	btn.addClass("active");
}

function remove(btn) {
	btn.removeClass("active");
}

const solo = new Howl( {
	src: ['assets/sherlock-audio/sherlock-bbc-main-modified.mp3']
});
solo.on('end', function() {
	remove($("#soloBtn"));
});

const rhythm = new Howl( {
	src: ['assets/sherlock-audio/sherlock-bbc-main-rhythm.mp3']
});
rhythm.on('end', function() {
	remove($("#rhythmBtn"));
});

const original = new Howl( {
	src: ['assets/sherlock-audio/sherlock-bbc-main-altogether.mp3']
});
original.on('end', function() {
	remove($("#originalBtn"));
});

$("#soloBtn").on("click", function() {
	if (solo.playing()) {
		solo.stop();
		remove($(this));
	} else {
		solo.play();
		add($(this));
	}
});

$("#rhythmBtn").on("click", function() {
	if (rhythm.playing()) {
		rhythm.stop();
		remove($(this));
	} else {
		rhythm.play();
		add($(this));
	}
});

$("#originalBtn").on("click", function() {
	if (original.playing()) {
		original.stop();
		remove($(this));
	} else {
		original.play();
		add($(this));
	}
});

$("#submitBtn").on("click", function() {
	if ($("#input").val() === "Mark Gatiss") {
		$("#content").fadeOut(500, function() {
			$("#succeeded").fadeIn(100);
			this.remove();
		})
	} else {
		$("#failed").fadeIn(500, function() {
			setTimeout(function() {
				$("#failed").fadeOut();
			}, 5000);
		})
	}
});

