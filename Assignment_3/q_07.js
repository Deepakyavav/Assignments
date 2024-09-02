class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return '*'.repeat(this._password.length);
    }

    set password(newPassword) {
        if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

const user = new User("johnDoe", "Pass1234");
console.log(user.password); // "********"
user.password = "NewPass1"; // Valid password change
