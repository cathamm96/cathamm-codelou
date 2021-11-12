function validateForm() {
    let x = document.forms["submitform"]["fname"].value;
    if (x == "") {
        alert ("first name must be filled out");
        return false;
    }
}

function validateForm() {
    let x = document.forms["submitform"]["lname"].value;
    if (x == "") {
        alert ("last name must be filled out");
        return false;
    }
}

function validateForm() {
    let x = document.forms["submitform"]["email"].value;
    if (x == "") {
        alert ("email must be filled out");
        return false;
    }
}
