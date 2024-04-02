function isValidEmail(email) {
    // Use expression operators, the match method, a regex and strings to validate the email
    regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regex))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  // Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("no spaces@example.com")); // Should return true
