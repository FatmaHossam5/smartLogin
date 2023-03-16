var nameInput=document.getElementById("name");
var emailInput=document.getElementById("email-user");
var passwordInput=document.getElementById("password-user");
var userMsg=document.getElementById("user-msg");
var signUp=document.querySelector(".signupBtn");
var userEmailInput=document.getElementById("email");
var userPasswordInput=document.getElementById("password");
var userAlertMsg=document.getElementById("errorMsg");
var userLogin=document.getElementById("logIn");
var userArr;

if(localStorage.getItem("userInfo") == null){

    userArr=[];
}
else{
    userArr=JSON.parse(localStorage.getItem("userInfo"));
    
}

    // check log in Inputs 
    function logIn(){
    if(userEmailInput.value==""||userPasswordInput.value==""){
        return true;}
else{
    return false;
}}

    // Sign Up - Check Sign Up Inputs
    function checkEmpty(){
        
    if(nameInput.value =="" && emailInput.value=="" && passwordInput.value ==""){
        return true;
    }
    else{
        return false;
    }
        }
    // Sign Up - Check Sign Up Email Exist or Not
    function checkExist(){
    for(var i=0;i<userArr.length;i++){
        if(emailInput.value==userArr[i].email ){
            return true; }
        }
        return false;
        }
    // Sign Up - Push Your data signUp
    function addUser(){
        if(validation()==true){
            var user ={
                name:nameInput.value,
                email: emailInput.value,
                password:passwordInput.value
                }
                userArr.push(user)
                localStorage.setItem("userInfo", JSON.stringify(userArr))
                userMsg.innerHTML="Success";
                userMsg.classList.remove("text-danger")
                userMsg.style.color="green"
                userMsg.classList.remove("d-none")
                
        }
    
    }
    // handling an Event 
    signUp.addEventListener("click",function(){
      
    if(!checkEmpty()){
    
        if(checkExist()){
            userMsg.innerHTML="Email is already Exist"
            userMsg.classList.remove("d-none")
            userMsg.classList.add("text-danger")
        
        }
        else{
            addUser();
        }
    }
    else{
        userMsg.innerHTML="All input is required !"
        userMsg.classList.remove("d-none")
    }
    })

     // login Process to check & enter welcome page
    function checkLogin(){
        let flag = false;

        for(var i=0;i<userArr.length;i++){
                if(userArr[i].email== userEmailInput.value && userArr[i].password == userPasswordInput.value) 

                {var name=userArr[i].name;
                localStorage.setItem("userName",JSON.stringify(name) );
                location.replace("welcome.html");
                    flag = true;
                
            }
            
               
            }
        
            if(flag == false)
            {userAlertMsg.innerHTML="incorrect email or password";
                userAlertMsg.classList.remove("d-none");
                
              
        }
        
        }

            
    // handling Event onclick 
    function userlogin(){
    if(logIn()){
                userAlertMsg.innerHTML="All input is required";
            userAlertMsg.classList.remove("d-none");
                }else{
                        if(checkLogin()){ 
                        }
                        else{
                            userAlertMsg.innerHTML="incorrect email or password";
                            userAlertMsg.classList.remove("d-none");
                            
                            
                        }
                    }
                    
                            }
    //Welcome Function
    function welcome(){
            var html = "";
            for(var i=0;i<userArr.length;i++){
                var name=userArr[i].name
                localStorage.setItem("userName",JSON.stringify(name) )
                html+=` <h1 id="welcome" class="text-info">${name}</h1>`;
            }
            document.getElementById("welcome").innerHTML=  " welcome" + " " + JSON.parse(localStorage.getItem("userName"));
                    }
        
//  validate Sign Up UserName
function validateUserName(){

   var userExpression=/^[A-Z][a-z A-Z 0-9]{3,}$/;
   if(userExpression.test(nameInput.value)==true && nameInput.value !=""){
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    // userMsg.classList.add("d-none")
    return true;
   }
   else{
    nameInput.classList.add("is-invalid")
    nameInput.classList.remove("is-valid")
    // userMsg.classList.remove("d-none")
    return false
   }
 }

 function validateEmailUser(){
      var emailExpression=/^([^0-9][a-z\d\.-]+)@(hotmail|gmail)\.com$/i;
      if(emailExpression.test( emailInput.value)==true &&  emailInput.value!=""){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        // userMsg.classList.add("d-none")
        return true;
      }
      else{
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        // userMsg.classList.remove("d-none")
        return false
       }
 }

 function validatePassword(){

    var passwordExpression=/^[\w]{5,10}$/;
    if( passwordExpression.test( passwordInput.value)==true &&  passwordInput.value!=""){
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        // userMsg.classList.add("d-none")
        return true;
      }
      else{
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        // userMsg.classList.remove("d-none")
        return false
       }

 }
 function validation(){
    validateUserName();
     validateEmailUser();
     validatePassword();
     
     if(validateUserName()==true && validateEmailUser()==true && validatePassword()==true){
         return true;
     }else{
         return false;
     }
 }
 function logOut(){
     localStorage.removeItem("userName")
    //  localStorage.removeItem("userInfo")
 }