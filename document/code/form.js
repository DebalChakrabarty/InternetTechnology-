function validate(){
 var firstName = document.getElementById("firstName").value;
 var lastName = document.getElementById("lastName").value;
 var ph = document.getElementById("phno").value;
 var email = document.getElementById("Email").value;
 var password = document.getElementById("password").value;
 var regex=/^[a-zA-z]+$/;
 var phn=/^[0-9]{10}$/;
 var e=/^([a-zA-Z0-9_\-\.])$/;
 var flag=true;
 if(firstName=="")
 {
  document.getElementById("firstValidation").innerHTML = "";
 }
 if(lastName=="")
 {
  document.getElementById("secondValidation").innerHTML = "";
 }
 console.log("inside validate");
 if(firstName!="" || lastName!="")
 {
  if(regex.test(firstName)== false)
  {
   document.getElementById("firstValidation").innerHTML="xyz";
   document.getElementById("firstName").value="";
   flag=false;
  }
  if(regex.test(lastName)== false)
  {
   document.getElementById("secondValidation").innerHTML ="xyz";
   document.getElementById("lastName").value="";
   flag=false;
  }
  if(firstName.length>40)
  {
   document.getElementById("firstValidation").innerHTML = "xyz"
   document.getElementById("firstName").value="";
   flag=false;
  }
  if(lastName.length>40)
  {
   document.getElementById("secondValidation").innerHTML="xyz";
   document.getElementById("lastName").value="";
   flag=false;
  }
 }
 if(ph!="")
 {
  if(phn.test(ph)==false)
  {
   document.getElementById("phoneValidation").innerHTML="10digit";
   document.getElementById("phno").value="";
   flag=false;
  }
 }
 else
 {
  document.getElementById("phoneValidation").innerHTML = "";
 }
 if(email!="")
 {
  if(e.test(email)==false)
  {
   document.getElementById("emailValidation").innerHTML ="email id";
   document.getElementById("Email").value="";
   flag=false;
  }
 }
 else
 {
   document.getElementById("emailValidation").innerHTML = "";
 }
 if(flag&&firstName!=""&&lastName!=""&& ph!="")
 {
   document.write("Form successfully submitted");
   setTimeout(function() {
   window.location.reload(true);
   }, 3000);
 }
}
function resetFields(){
 window.location.reload(true);
}
