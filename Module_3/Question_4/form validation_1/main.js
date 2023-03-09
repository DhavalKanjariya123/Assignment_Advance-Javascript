

function clk() {

    if (document.formdetail.emailaddress.value== "") {
        alert("Please enter Email address")
        document.formdetail.emailaddress.focus();
        return false;
    }
    if (document.formdetail.pass.value== "") {
        alert("Please enter Password")
        document.formdetail.pass.focus();
        return false;
    }
    
}
