var $currentDay = $("#currentDay");
var $descriptionArray = $(".description");
var $saveButtonArray = $(".saveBtn");

var currentTime = moment();

// Create array for local storage
var storedEventsArray = JSON.parse(localStorage.getItem("event")) || [];

function init() {
    // Display current day in header
    $currentDay.text(currentTime.format("dddd, MMMM Do"));

    // Add event listener to all save buttons
    $saveButtonArray.on("click", handleSave);

    colorTimeblocks();
    renderEvents();
}

// Color code timeblocks
function colorTimeblocks() {
    var currentHour = currentTime.format("k");

    // Compare timeblocks to current hour, assign appropriate class
    $descriptionArray.each(function () {
        if ($(this).parent().attr("data-time") < currentHour) {
            $(this).addClass("past");
        } else if ($(this).parent().attr("data-time") === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
}

// Save events to local storage
function handleSave(event) {
    var eventObject = {
        hour: event.target.parentNode.dataset.time,
        userInput: event.target.previousElementSibling.value,
    };

    // Push event into local storage array
    storedEventsArray.push(eventObject);

    localStorage.setItem("event", JSON.stringify(storedEventsArray));
}

// Render stored events to corresponding timeblock
function renderEvents() {
    // Check if there are any stored events that match data-time of each row
    $descriptionArray.each(function () {
        for (var i = 0; i < storedEventsArray.length; i++) {
            if ($(this).parent().attr("data-time") === storedEventsArray[i].hour) {
                $(this).text(storedEventsArray[i].userInput);
            }
        }
    })
}

init();