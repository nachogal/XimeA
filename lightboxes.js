
//Click capture event on an image
//Show overlay
//Update overlay with image
//Add caption 

//Add overlay with image and caption

//When overlay is clicked hide the overlay

var $overlay = $('<div id="overlay"></div>'); 
var $image = $("<img>");
var $quote = $("<p></p>");

$overlay.append($image);

$overlay.append($quote);

$("body").append($overlay);

$("#flex a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	$image.attr("src", imageLocation);

	$overlay.show(); 

	var quoteText = $(this).children("img").attr("alt");
	$quote.text(quoteText);

});		

$("#flex2 a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	$image.attr("src", imageLocation);

	$overlay.show(); 

	var quoteText = $(this).children("img").attr("alt");
	$quote.text(quoteText);

});

$("#flex3 a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	$image.attr("src", imageLocation);

	$overlay.show(); 

	var quoteText = $(this).children("img").attr("alt");
	$quote.text(quoteText);

});

$overlay.click(function(){
	$overlay.hide();
});






