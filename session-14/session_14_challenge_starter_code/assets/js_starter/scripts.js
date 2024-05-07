// localStorage API
// Store data
let local_data = "The data that I want to store for later.";
localStorage.setItem("myDataKey", local_data);

// Get data
let savedData = localStorage.getItem("myDataKey");

// Remove data
localStorage.removeItem("myDataKey");

// sessionStorage API
// Store data
let session_data = "The data that I want to store temporarily.";
sessionStorage.setItem("myTempDataKey", session_data);

// Get data
let tempData = sessionStorage.getItem("myTempDataKey");

// Remove data
sessionStorage.removeItem("myTempDataKey");
