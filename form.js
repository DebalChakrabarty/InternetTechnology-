function validate(){
    var firstName = document.getElementById("firstName").value;
    console.log("inside validate");
    for(i=0;i<firstName.length;i++)
    {
        console.log("inside firstname");
        if(firstName.charCodeAt(i)>="33" && firstName.charCodeAt(i)<="57")
        {
                document.getElementById("firstValidation").innerHTML = "No special characters or numbers";
                document.getElementById("firstName").value="";
                break;
        }
    }

    for(i=0;i<lastName.length;i++)
    {
            console.log("inside lastname");
            if(lastName.charCodeAt(i)>="33" && lastName.charCodeAt(i)<="57")
            {
                    document.getElementById("secondValidation").innerHTML = "No special characters or numbers";
                    document.getElementById("lastName").value="";
                    break;
            }
    }
}
