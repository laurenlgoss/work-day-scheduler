var $currentDay = $("#currentDay");
var $descriptionArray = $(".description");
var $saveButtonArray = $(".saveBtn");

var $event09 = $("#event-09");
var $event10 = $("#event-10");
var $event11 = $("#event-11");
var $event12 = $("#event-12");
var $event13 = $("#event-13");
var $event14 = $("#event-14");
var $event15 = $("#event-15");
var $event16 = $("#event-16");
var $event17 = $("#event-17");
var eventArray = [$event09, $event10, $event11, $event12, $event13, $event14, $event15, $event16, $event17];

var currentTime = moment();

function init() {
    // Display current day in header
    $currentDay.text(currentTime.format("dddd, MMMM Do"));

    // Add event listener to all save buttons
    for (var i = 0; i < $saveButtonArray.length; i++) {
        $saveButtonArray[i].addEventListener("click", handleSave);
    }

    colorTimeblocks();
}

// Color code timeblocks
function colorTimeblocks() {
    var currentHour = currentTime.format("k");

    // Compare timeblocks to current hour, assign appropriate class
    for (var i = 0; i < $descriptionArray.length; i++) {
        if ($descriptionArray[i].dataset.time < currentHour) {
            $descriptionArray[i].classList.add("past");
        } else if ($descriptionArray[i].dataset.time === currentHour) {
            $descriptionArray[i].classList.add("present");
        } else {
            $descriptionArray[i].classList.add("future");
        }
    }
}

// Save events within timeblocks
function handleSave($eventXX) {
}
    // Create save button
        // Upon click,

        // Text saved in local storage

    // When refreshed, events persist

init();