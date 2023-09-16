function welcomeMessage (fullName) {
    return function () {
        alert("welcome" + ' '+ fullName);
    }
}
var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");

guillaume();
alex();
fred();