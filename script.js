//defines things
var html = '';
var firstNumber = 1;
var secondNumber = 1;
var calculated = 2;

//Creates all of the html (which is mostly buttons with numbers to click on)
function createHtml()	{
//First times table
	for (var i = 1; i < 101; i++) {
		html += '<button id="' + i + '" class="number">' + i + '</button>';
//Creates new lines after every tenth button to make it look pretty and easy to use
		if (i % 10 === 0) {
		html += '<br>';
		}
	}
//Creates html with the calculation. This gets updated when a new calculation is done
	html += '<h1 id="calculation">' + firstNumber + ' x ' + secondNumber + ' = ' + calculated + ' </h1>';
//Creates second times table
	for (var i = 1; i < 101; i++) {
		html += '<button id="b' + i + '" class="bnumber">' + i + '</button>';
		if (i % 10 === 0) {
		html += '<br>';
		}
	}
}

//Appends the created html
function writeHtml()	{
	$('.timesTable').append(html);
}

//Calss the functions that create and Appends the html when it loads
$(document).on("ready", function()	{
	createHtml();
	writeHtml();
})

//Handles the calcualtion
function calculate()	{
	calculated = firstNumber*secondNumber;
}

//Rewrites the calculation in the html
function replaceCalculation()	{
	$('#calculation').text(firstNumber + ' x ' + secondNumber + ' = ' + calculated);
	
}

//firstNumber is updated on the click of a button from the first times table. It also adds a class to make it blue
$(document).on("click", ".number", function()	{
	$(".selected1").removeClass('selected1');
	$(this).addClass('selected1');
	firstNumber = parseInt($(this).text());
	calculate();
	replaceCalculation()
})

//secondNumber is updated on the click of a button from the first times table. It also adds a class to make it blue
$(document).on("click", ".bnumber", function()	{
	$(".selected2").removeClass('selected2');
	$(this).addClass('selected2');
	secondNumber = parseInt($(this).text());
	calculate();
	replaceCalculation()
})