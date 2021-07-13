var $currentDay = $("#currentDay");
var $descriptionArray = $(".description");

var currentTime = moment();

function init() {
    // Display current day in header
    $currentDay.text(currentTime.format("dddd, MMMM Do"));

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
    // Create input field

    // Create save button
        // Upon click,

        // Text saved in local storage

    // When refreshed, events persist

init();