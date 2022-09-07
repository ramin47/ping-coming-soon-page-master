let myArray = []
let mail = ""
let getEmail = document.getElementById("input-email")
let getBtn = document.getElementById("input-btn")
let getMessage = document.getElementById("message")

getBtn.addEventListener("click", function() {
    ValidateEmail(mail)
    myArray.push(getEmail.value)
    getEmail.value = ""

    localStorage.setItem("Email", myArray)

    


  
})


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getEmail.value))
  {
    return (true)
  }
    getMessage.textContent = "You have entered invalid Email-Address"
    setTimeout(function(){
        window.location.reload(1);
     }, 2500);

    return (false)

}

