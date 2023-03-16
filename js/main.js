var nameInput=document.getElementById("name");
var emailInput=document.getElementById("email-user");
var passwordInput=document.getElementById("password-user");
var userMsg=document.getElementById("user-msg");
var signUp=document.querySelector(".signupBtn");
var userEmailInput=document.getElementById("email");
var userPasswordInput=document.getElementById("password");
var userAlertMsg=document.getElementById("errorMsg");
var userLogin=document.querySelector(".loginBtn");
var userArr;
if(localStorage.getItem("userInfo") == null){

    userArr=[];
}
else{
    userArr=JSON.parse(localStorage.getItem("userInfo"));
  
}