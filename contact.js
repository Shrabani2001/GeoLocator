function goBack() {
    history.back();
  }
  
  function goReload() {
    location.reload();
    window.location.href = "home.html";
  }
function myFunction() {
            var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === '' || email === '' || message === '') {
      alert("Please fill out all the fields");
  } else {
      alert("Your response is successfully recorded!");
    
  }

}