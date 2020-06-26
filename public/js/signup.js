function c1()
{
  
  var fname=document.getElementById("fname");
  var lname=document.getElementById("lname");
  var dob=document.getElementById("dob");
  var emails=document.getElementById("emails");
  var phone=document.getElementById("phone");
  var address=document.getElementById("address");
  var password=document.getElementById("password");
  var cpassword=document.getElementById("cpassword");
  var prog=document.getElementById("myprogress");
  var elem=document.getElementById("mybar");
  var letters = /^[A-Za-z]+$/;
  let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var error=0;
  alert(fname);
  return false;
}

function check(){
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var dob=document.getElementById("dob");
    var emails=document.getElementById("emails");
    var phone=document.getElementById("phone");
    var address=document.getElementById("address");
    var password=document.getElementById("password");
    var cpassword=document.getElementById("cpassword");
    var prog=document.getElementById("myprogress");
    var elem=document.getElementById("mybar");
    var letters = /^[A-Za-z]+$/;
    let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var error=0;
    if(fname.value==""){
        
        document.getElementById("nameerror").innerHTML="*first name reqired";
        error++;
    }
   else if(fname.value.match(letters)){
    document.getElementById("nameerror").innerHTML="";
    fname.style.border="2px solid black";
   }
   else{
       document.getElementById("nameerror").innerHTML="*first name not valid";
       fname.style.border="2px solid red";
       error++;
       return false;
   }
  
   if(lname.value==""){
        
    document.getElementById("lerror").innerHTML="*last name reqired";
    error++;
}
   else if(lname.value.match(letters)){
    document.getElementById("lerror").innerHTML="";
    lname.style.border="2px solid black";
   }
   else{
    document.getElementById("lerror").innerHTML="*last name not valid";
    lname.style.border="2px solid red";
    error++; 
    return false;
   }
   if(dob.value==""){
    document.getElementById("doberror").innerHTML="*date of birth required"; 
   }
   else{
    document.getElementById("doberror").innerHTML="";
   }
   if(emails.value==""){
    document.getElementById("emailerror").innerHTML="*email reqired";
    error++;
   }
   else if(regexp.test(emails.value)){
    document.getElementById("emailerror").innerHTML="";
    emails.style.border="2px solid black";
}
else{
 document.getElementById("emailerror").innerHTML="* email id not valid";
 emails.style.border="2px solid red";
 error++; 
}
if(phone.value==""){
    document.getElementById("phoneerror").innerHTML="contact no reqiured";
    error++;
}
else if(phone.value.match(phoneno)){
    document.getElementById("phoneerror").innerHTML="";
    phone.style.border="2px solid black";
}
else{
    document.getElementById("phoneerror").innerHTML="*contact no not valid";
    phone.style.border="2px solid red";
    error++;  
    return false;
}
if(address.value==""){
    document.getElementById("addresserror").innerHTML="*address required";
    error++;
}
else{
    document.getElementById("addresserror").innerHTML="";
}

if(password.value==""){
  document.getElementById("passworderror").innerHTML="*password required";
  error++;
}
else{



if(password.value.length>=5)
        {
       
          if(password.value == emails.value) {
         // alert("Error: Password must be different from Username!");
          document.getElementById("passworderror").innerHTML="*same";
          password.style.border="2px solid red";
          prog.style.visibility="hidden";
          elem.style.visibility="hidden";
           return false;
          }
          else{
            document.getElementById("passworderror").innerHTML="";
            password.style.border="2px solid black";
          }

          re = /[0-9]/;
          if(!re.test(password.value)) {
          // alert("Error: password must contain at least one number (0-9)!");
           document.getElementById("passworderror").innerHTML="*password must contain at least one number (0-9)!";
           password.style.border="2px solid red";
          
          prog.style.visibility="hidden";
          elem.style.visibility="hidden";
           return false;
          }
          else{
            document.getElementById("passworderror").innerHTML="";
            password.style.border="2px solid black";
          }
          re = /[a-z]/;
          if(!re.test(password.value)) {
          //alert("Error: password must contain at least one lowercase letter (a-z)!");
          document.getElementById("passworderror").innerHTML="*password must contain at least one lowercase letter (a-z)!";
          password.style.border="2px solid red";
          prog.style.visibility="hidden";
          elem.style.visibility="hidden";
          return false;
          
         }
         else{
            document.getElementById("passworderror").innerHTML="";
            password.style.border="2px solid black";
         }
          re = /[A-Z]/;
         if(!re.test(password.value)) {
         //alert("Error: password must contain at least one uppercase letter (A-Z)!");
         document.getElementById("passworderror").innerHTML="*password must contain at least one uppercase letter (A-Z)!";
         password.style.border="2px solid red";
         prog.style.visibility="hidden";
          elem.style.visibility="hidden";
          return false;
      
         } 
         else{
            document.getElementById("passworderror").innerHTML="";
            password.style.border="2px solid black";
         }
    }   
 
  else{
    document.getElementById("passworderror").innerHTML="password must contain at least 5 characters";
    password.style.border="2px solid red";
    prog.style.visibility="hidden";
     elem.style.visibility="hidden";
    return  false;
  }
}

  if(password.value!="" && password.value.length>=5){
   // alert('hhh');
  //var s= document.getElementById("strengthBar");
  //s.style.visibility="visible";
  //s.value=30;
  //s.style.border.color="red";
  //var elem=document.getElementById("mybar");
  //var width=30;
  //elem.style.width=width+"%";
  //elem.innerHTML=width+"%";


}
 if(cpassword.value!=password.value){
    document.getElementById("cpassworderror").innerHTML="*password and confirm password must be same";
    cpassword.style.border="2px solid red";
    return false;
 }
 else{
    document.getElementById("cpassworderror").innerHTML="";
    cpassword.style.border="2px solid black";
 }
 
   if(error>0){
       return false;
   }
   if(error<=0){
    //return true;
    alert(" successfully registered!!");
    //window.location.href="/";
   }
   
}
function resets(){

   var name=document.getElementById("fname");
   var lname= document.getElementById("lname");
   var email= document.getElementById("emails");
   var phone= document.getElementById("phone");
   var address= document.getElementById("address");
   var password=document.getElementById("password");
    var cpassword=document.getElementById("cpassword");
    var prog=document.getElementById("myprogress");
    var elem=document.getElementById("mybar");
    var dob=document.getElementById("dob");
   

    document.getElementById("nameerror").innerHTML="";
    document.getElementById("lerror").innerHTML="";
    document.getElementById("emailerror").innerHTML="";
    document.getElementById("addresserror").innerHTML="";
    document.getElementById("phoneerror").innerHTML="";
    document.getElementById("passworderror").innerHTML="";
    document.getElementById("cpassworderror").innerHTML="";
    document.getElementById("doberror").innerHTML="";
    //alert("hh");
    prog.style.visibility="hidden";
    elem.style.visibility="hidden";
    name.style.border="2px solid black";
    lname.style.border="2px solid black";
    email.style.border="2px solid black";
    phone.style.border="2px solid black";
   address.style.border="2px solid black";
   password.style.border="2px solid black";
   cpassword.style.border="2px solid black";
  // s.style.visibility="hidden";
  // prog.style.visibility="hidden";
  
   //elem.style.visibility="hidden";
}
function passwordcheck(){
  var prog=document.getElementById("myprogress");
  var elem=document.getElementById("mybar");
  if(password.value=="" || password.value.length<5){
    prog.style.visibility="hidden";
    elem.style.visibility="hidden";
  }
    if(password.value!="" && password.value.length>=5){
        var prog=document.getElementById("myprogress");
        var elem=document.getElementById("mybar");
        prog.style.visibility="visible";
        elem.style.visibility="visible";
        var width=30;
        elem.style.backgroundColor="red";
        elem.style.width=width+"%";
        elem.innerHTML=width+"%";
    } 
    if(password.value.length>=6 && password.value.length<=8){
      var prog=document.getElementById("myprogress");
      var elem=document.getElementById("mybar");
      prog.style.visibility="visible";
      elem.style.visibility="visible";
      var width=60;
      elem.style.backgroundColor="green";
      elem.style.width=width+"%";
      elem.innerHTML=width+"%";
  } 
  if(password.value.length>=9 && password.value.length<=11){
    var prog=document.getElementById("myprogress");
    var elem=document.getElementById("mybar");
    prog.style.visibility="visible";
    elem.style.visibility="visible";
    var width=100;
    elem.style.backgroundColor="blue";
    elem.style.width=width+"%";
    elem.innerHTML=width+"%";
} 

 
}