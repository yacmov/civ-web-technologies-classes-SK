// Challenge 4 Starter
const eventLinks = document.querySelectorAll(".sidebar a");

function logEvent(eventDetails) {
    // Your code goes here
    for (const [index, value] of eventDetails.entries()){
        console.log(eventDetails[index]["innerHTML"].toUpperCase());
    }

}

// Your code goes here
logEvent(eventLinks);
