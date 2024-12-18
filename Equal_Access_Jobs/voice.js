// voice.js

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    navigateToSection(transcript);
};

recognition.onerror = (event) => {
    console.error("Speech recognition error: ", event.error);
};

function startListening() {
    recognition.start();
}

function navigateToSection(command) {
    const sections = {
        'internship': 'sectioninternship',
        'job': 'sectionjob'
        // Add more mappings as needed
    };

    if (sections[command]) {
        document.getElementById(sections[command]).scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("No matching section found for: " + command);
    }
}
function startListening() {
    // Check for browser support for speech recognition
    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false; // Set to true for continuous recognition
        recognition.interimResults = false; // Set to true to get interim results

        recognition.onstart = function() {
            console.log('Voice recognition started. Speak into the microphone.');
        };

        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript; // Get the recognized text
            document.getElementById('searchBar').value = transcript; // Set the input value
            console.log('You said: ' + transcript);
        };

        recognition.onerror = function(event) {
            console.error('Error occurred in recognition: ' + event.error);
        };

        recognition.onend = function() {
            console.log('Voice recognition ended.');
        };

        recognition.start(); // Start the speech recognition
    } else {
        alert('Sorry, your browser does not support speech recognition.');
    }
}
function performSearch() {
    // Get the value of the search bar
    const query = document.getElementById('searchBar').value.toLowerCase();

    // Define the sections to search for
    const sections = {
        'internship': 'sectioninternship',
        'job': 'sectionjob'
        // Add more sections as needed
    };

    // Check if the query matches any section
    if (sections[query]) {
        // Scroll to the corresponding section
        document.getElementById(sections[query]).scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("No matching section found for: " + query);
    }
}