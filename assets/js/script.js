var $currentDay = $("#currentDay");
var $descriptionArray = $(".description");
var $saveButtonArray = $(".saveBtn");

var currentTime = moment();

var storedEventsArray = JSON.parse(localStorage.getItem("event")) || [];

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
        if ($descriptionArray[i].parentNode.dataset.time < currentHour) {
            $descriptionArray[i].classList.add("past");
        } else if ($descriptionArray[i].parentNode.dataset.time === currentHour) {
            $descriptionArray[i].classList.add("present");
        } else {
            $descriptionArray[i].classList.add("future");
        }
    }
}

// Save events within timeblocks
function handleSave(event) {    
    var eventObject = {
    hour: event.target.parentNode.dataset.time,
    userInput: event.target.previousElementSibling.value,
    };

    storedEventsArray.push(eventObject);

    localStorage.setItem("event", JSON.stringify(storedEventsArray));
}

    // Create save button
        // Upon click,

        // Text saved in local storage

    // When refreshed, events persist

init();