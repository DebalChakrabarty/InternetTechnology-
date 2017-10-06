function validate(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ph = document.getElementById("phno").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;

    var regex=/^[a-zA-z]+$/;
    var phn=/^[0-9]{10}$/;
    
    var flag=true;
    
    console.log("inside validate");
    if(firstName!="" || lastName!="")
    {
        if(regex.test(firstName)== false && firstName.length<=40)
        {
                document.getElementById("firstValidation").innerHTML = "No special characters or numbers";
                document.getElementById("firstName").value="";
                flag=false;
        }
        if(regex.test(lastName)== false && lastName.length<=40)
        {
                document.getElementById("secondValidation").innerHTML = "No special characters or numbers";
                document.getElementById("lastName").value="";
                flag=false;
        }
    }
    if(ph!="")
    {
        if(phn.test(ph)==false)
        {
                document.getElementById("phoneValidation").innerHTML = "must be 10 digits only, no special characters or alphabets";
                document.getElementById("phno").value="";
                flag=false;
        }
    }
    if(flag && firstName!="" && lastName!="" && ph!="" && email!="" && password!="")
    {
            document.write("Form successfully submitted");
    }
}
function resetFields(){
        window.location.reload(true);
}
