let username;

function isValidPassword(password) {
    if (password < 8 || password.includes(" ") || password.includes(username)) {
        return false
    } else {
        return true
    }
    
}



