function isValidEmail(email) {
    // Use expression operators, strings, the match method 
    // and a template literal containing a ternary operator to validate the email
    let validated = "validated!"
    let notValidated = "not correct please try again."
    const regex = /^(?=.*[a-z])(?=.*[A-Z])[\S+@\S+\.\S+]$/
    const validation = email.match(regex) !== null;
    return `The email "${email}" \nis ${(validation == true) ? validated : notValidated}`;
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("no spaces@example.com"));
console.log(isValidEmail("@@example.com"));
    