var DinnerOverviewController = function(view, model ) {
	view.$goBack.click(function() {
		document.location.href = "select_dish.html";
	});
	
	view.$printRecipe.click(function() {
		document.location.href = "dinner_preperation.html";
	});
	
};
