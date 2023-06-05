$(document).ready(function() {
    
	$("#nav_list a").click(function(e) {
		e.preventDefault();
		var fileName = $(this).attr("title") + ".json";
		loadSpeakerData(fileName);
	});

	function loadSpeakerData(fileName) {

		$("#speakerData").empty();

		$.getJSON("json_files/" + fileName, function(data) {

			var speakerTitle = $("<h1>").text(data.speakers[0].title);
			var speakerImage = $("<img>").attr("src", data.speakers[0].image);
			var speakerMonth = $("<h2>").text(data.speakers[0].month);
			var speakerText = $("<p>").text(data.speakers[0].text);

			$("#speakerData").append(speakerTitle, speakerImage, speakerMonth, speakerText);
           
            
		});
	}
});
