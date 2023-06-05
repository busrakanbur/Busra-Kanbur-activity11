$(document).ready(function() {
	// Click event handler for speaker links in the sidebar
	$("#nav_list a").click(function(event) {
		event.preventDefault(); // Prevent default link behavior

		// Get the data-json attribute of the clicked link
		var jsonFileName = "json_files/" + $(this).data("json") + ".json";

		// Clear the main element
		$("main").empty();

		// Fetch JSON data for the selected speaker
		$.getJSON(jsonFileName, function(data) {
			var speaker = data.speakers[0];

			// Create and append the speaker's information to the main element
			var speakerTitle = $("<h1>").text(speaker.title);
			var speakerImage = $("<img>").attr("src", "json_files/" + speaker.image);
			var speakerMonth = $("<h2>").text(speaker.month);
			var speakerText = $("<p>").text(speaker.text);

			$("main")
				.append(speakerTitle)
				.append(speakerImage)
				.append(speakerMonth)
				.append(speakerText);
		});
	});
});
