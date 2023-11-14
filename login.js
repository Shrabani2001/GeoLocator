function validate() {
    console.log('calling....');
    var msg;
    if (document.myform.psw.value.length >= 6) {
        msg = "Password is Strong";
    }else if(document.myform.psw.value.length >= 4){
        msg = "Password is Medium";
    }
    else{
        msg = "Password is Weak";
    }
    document.getElementById("msg").innerText = msg;
}