function isValidEmail(email) {
    // Use expression operators, strings, the match method 
    // and a template literal containing a ternary operator to validate the email
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let feedback = "";

    let result = (email.match(regex) !== null)? true : false;
    let split = email.split('@');

    // It contains exactly one "@"
    (split.length > 2) ? feedback += "Remove additional '@'\n" : '';

    // The "@" character is not the first or last
    (split[0] === "") ? feedback += "Add Your ID before '@'\n" : "";
    (split[split.length -1] === "") ? feedback += "Add Your Domain after '@'\n" : "";
    
    // The "." character include after "@"
    (!split[split.length -1].includes(".")) ? feedback += "Check your domain" : "";
    
    // The "." character is not the first or last after "@"
    (split[split.length -1][0] === ".") ? feedback += "Remove '.' after '@'" : "";
    //TODO: FIX not working below
    (email[email.length -1] === ".") ? feedback += "Remove '.' at the end" : "";
    

    // No Space
    (email.includes(" ") === true) ? feedback += "Not allow blank check your email" : "";



    // Print feedback
    console.log(`Your email is ${email}\n${feedback}`);
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("@@example.com"));
console.log(isValidEmail("abcd@"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("invalidemail@gcom"));
console.log(isValidEmail("invalidemail@gcom."));
console.log(isValidEmail("no spaces@example.com"));
    