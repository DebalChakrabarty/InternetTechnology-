function validate(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ph = document.getElementById("phno").value;
    var regex=/^[a-zA-z]+$/;
    var phn=/^[0-9]{10}$/;
    console.log("inside validate");
    if(firstName!="" || lastName!="")
    {
        if(regex.test(firstName)== false)
        {
                document.getElementById("firstValidation").innerHTML = "No special characters or numbers";
                document.getElementById("firstName").value="";
        }
        if(regex.test(lastName)== false)
        {
                document.getElementById("secondValidation").innerHTML = "No special characters or numbers";
                document.getElementById("lastName").value="";
        }
    }
    if(ph!="")
    {
        if(phn.test(ph)==false)
        {
                document.getElementById("phoneValidation").innerHTML = "must be 10 digits only no special characters";
                document.getElementById("phno").value="";
        }
    }
}
function resetFields(){
        window.location.reload(true);
}
