
//create function
function clk() {
    var em = document.getElementById("emailaddress").value;
    var pass = document.getElementById("passwprd").value;
    if (em == 'dhaval@gmail.com' && pass == '123456') {
        alert("Successfully log in")
        window.location = 'welcome.html';
    }
    else {
        alert("Please enterv correct Email address and Password")
        window.location = 'Question_4.html';
    }
}
