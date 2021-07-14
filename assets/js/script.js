var $currentDay = $("#currentDay");
var $descriptionArray = $(".description");
var $saveButtonArray = $(".saveBtn");

var currentTime = moment();

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
    $descriptionArray.each(function() {
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

    storedEventsArray.push(eventObject);

    localStorage.setItem("event", JSON.stringify(storedEventsArray));
}

function renderEvents() {
    
}

init();