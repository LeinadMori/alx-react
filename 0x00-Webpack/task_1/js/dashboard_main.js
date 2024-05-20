// Import jQuery and Lodash
import $ from 'jquery';
import debounce from 'lodash/debounce';

// Function to add elements to the DOM
function addElements() {
    // Add paragraph element: Holberton Dashboard
    $('<p>').text('Holberton Dashboard').appendTo('body');

    // Add paragraph element: Dashboard data for the students
    $('<p>').text('Dashboard data for the students').appendTo('body');

    // Add button element with text "Click here to get started"
    $('<button>').text('Click here to get started').appendTo('body');

    // Add paragraph element with id 'count'
    $('<p>').attr('id', 'count').appendTo('body');

    // Add another paragraph element: Copyright - Holberton School
    $('<p>').text('Copyright - Holberton School').appendTo('body');
}

// Function to update the counter
function updateCounter() {
    let count = 0;

    // Function to update the count and display it
    const updateAndDisplayCount = () => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };

    // Debounce the function to prevent rapid clicks
    const debouncedUpdate = debounce(updateAndDisplayCount, 1000);

    // Event handler for button click
    $('button').on('click', function() {
        debouncedUpdate();
    });
}

// Call the function to add elements and bind the event handlers when the document is ready
$(document).ready(function() {
    addElements();
    updateCounter();
});