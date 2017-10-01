function validate(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var regex=/^[a-zA-z]+$/;
    console.log("inside validate");
    if(firstName == "")
    {
        document.getElementById("firstValidation").innerHTML = "firstname cannot be left blank";
    }
    else if(lastName== "")
    {
        document.getElementById("secondValidation").innerHTML = "lastname cannot be left blank";
    }
    else
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
}
function resetFields(){
        window.location.reload(true);
}
