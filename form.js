function validate(){
    var firstName = document.getElementById("firstName").value;
    console.log("inside validate");
    for(i=0;i<firstName.length;i++)
    {
        console.log("inside firstname");
        if(!(firstName.charAt(i)>="A" && firstName.charAt(i)<="Z" || firstName.charAt(i)>="a" && firstName.charAt(i)<="z" ))
        {
                document.getElementById("firstValidation").innerHTML = "No special characters or numbers";
                document.getElementById("firstName").value="";
                break;
        }
    }

    for(i=0;i<lastName.length;i++)
    {
            console.log("inside lastname");
            if(!(lastName.charAt(i)>="A" && lastName.charAt(i)<="Z" || firstName.charAt(i)>="a" && firstName.charAt(i)<="z"))
            {
                    document.getElementById("secondValidation").innerHTML = "No special characters or numbers";
                    document.getElementById("lastName").value="";
                    break;
            }
    }
}
