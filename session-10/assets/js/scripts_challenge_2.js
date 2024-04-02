function isValidEmail(email) {
  // Regular expression for email validation
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let validated = "This is validated email";
  let notValidated = "This is not validated email";
  let result = {};
  
  // Use match function to check if the email matches the regex
  (email.match(regex) !== null) ? result += validated : result += notValidated;
  console.log(result);
}

// Test cases
isValidEmail("john@example.com"); // Should return true
isValidEmail("invalidemail@.com"); // Should return false
isValidEmail("no spaces@example.com"); // Should return true