function login(){
 
  var emails=document.getElementById("username");
 
  var password=document.getElementById("passwords");
  
  //var letters = /^[A-Za-z]+$/;
  let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 // var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var error=0;
  if(emails.value=="" && password.value==""){
    //alert("kk");
    document.getElementById("msg").innerHTML="*email id reqired";
    emails.style.border="2px solid red";
    document.getElementById("msg2").innerHTML="*password required!";
    password.style.border="2px solid red";
    error++;
  }
 if(emails.value==""){
  document.getElementById("msg").innerHTML="*email id reqired";
  emails.style.border="2px solid red";
  
  error++;
 }
 else if(regexp.test(emails.value)){
  document.getElementById("msg").innerHTML="";
  emails.style.border="2px solid black";
  //ch.style.visibility = "visible";
  //ch.style.color="green";
  //ex.style.visibility="hidden";
}
else{
document.getElementById("msg").innerHTML="* email id not valid!";
emails.style.border="2px solid red";
//ex.style.visibility = "visible";
//ex.style.color="red";
//ch.style.visibility="hidden";
error++; 
}

if(password.value!=""){

if(password.value.length>=5)
      {
     
        if(password.value == emails.value) {
       // alert("Error: Password must be different from Username!");
        document.getElementById("msg2").innerHTML="*password and username must be different";
        password.style.border="2px solid red";
        //ex2.style.visibility = "visible";
        //ex2.style.color="red";
        //ch.style.visibility="hidden";
         return false;
        }
        else{
          document.getElementById("msg2").innerHTML="";
          password.style.border="2px solid black";
         //ch2.style.visibility = "visible";
        //ch2.style.color="green";
        //ex2.style.visibility="hidden";
        }

        re = /[0-9]/;
        if(!re.test(password.value)) {
        // alert("Error: password must contain at least one number (0-9)!");
         document.getElementById("msg2").innerHTML="* at least one number required(0-9)!";
         password.style.border="2px solid red";
         //ex2.style.visibility = "visible";
         //ex2.style.color="red";
         //ch2.style.visibility="hidden";
         return false;
        }
        else{
          document.getElementById("msg2").innerHTML="";
          password.style.border="2px solid black";
          //ch2.style.visibility = "visible";
          //ch2.style.color="green";
          //ex2.style.visibility="hidden";
        }
        re = /[a-z]/;
        if(!re.test(password.value)) {
        //alert("Error: password must contain at least one lowercase letter (a-z)!");
        document.getElementById("msg2").innerHTML="*at least one lowercase required(a-z)!";
        password.style.border="2px solid red";
        //ex2.style.visibility = "visible";
         //ex2.style.color="red";
         //ch2.style.visibility="hidden";
        return false;
        
       }
       else{
          document.getElementById("msg2").innerHTML="";
          password.style.border="2px solid black";
          //ch2.style.visibility = "visible";
          //ch2.style.color="green";
          //ex2.style.visibility="hidden";
       }
        re = /[A-Z]/;
       if(!re.test(password.value)) {
       //alert("Error: password must contain at least one uppercase letter (A-Z)!");
       document.getElementById("msg2").innerHTML="*at least one uppercase required(A-Z)!";
       password.style.border="2px solid red";
       //ex2.style.visibility = "visible";
        // ex2.style.color="red";
         //ch2.style.visibility="hidden";
        return false;
    
       } 
       else{
          document.getElementById("msg2").innerHTML="";
          password.style.border="2px solid black";
         // ch2.style.visibility = "visible";
          //ch2.style.color="green";
          //ex2.style.visibility="hidden";
       }
  }   

else{
  document.getElementById("msg2").innerHTML="at least 5 characters required!";
  password.style.border="2px solid red";
  //ex2.style.visibility = "visible";
  //ex2.style.color="red";
  //ch2.style.visibility="hidden";
  return  false;
}
}
else{
  
  error++;
}

 if(error>0){
     return false;
 }
 if(error<=0){
  //return true;
  //alert("jj");
  
  window.location.href="/";
 
 }
 
}