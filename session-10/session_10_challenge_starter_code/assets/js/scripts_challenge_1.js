let validated = "Your email is validated!"
let notValidated = "The email seems not correct please try again."

let attempt = []

function isCorrectEmail(email)
{
  (email === true) ? console.log(validated) : console.log(notValidated)
}


function isValidEmail(email) {
    // Use expression operators, the match method, a regex and strings to validate the email
    const validation = email.match(/^\S+@\S+\.\S+$/) !== null;
    return validation;
  }
  
  // Test cases
console.log(isCorrectEmail(isValidEmail("john@example.com"))); // Should return true
console.log(isCorrectEmail(isValidEmail("invalidemail@.com"))); // Should return false
console.log(isCorrectEmail(isValidEmail("no spaces@example.com"))); // Should return true
