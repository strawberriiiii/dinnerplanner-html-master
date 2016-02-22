var LeftSidebarController = function(view, model ) {
	view.$incrementButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log(model.getNumberOfGuests());
	});

	view.$decrementButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	
	view.$confirmMenuButton.click(function() {
		document.location.href = "dinner_overview.html";
	});
}