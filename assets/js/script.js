var $currentDay = $("#currentDay");

var currentTime = moment();

function init() {
    // Display current day in header
    $currentDay.text(currentTime.format("dddd, MMMM Do"));
}

// Timeblocks color coded
    // Past

    // Present

    // Future

// Save events within timeblocks
    // Create input field

    // Create save button
        // Upon click,

        // Text saved in local storage

    // When refreshed, events persist

init();