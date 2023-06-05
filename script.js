const title =document.getElementById('title');
const nameField=document.getElementById('nameField');
const signupBtn=document.getElementById('signupBtn');
const signinBtn=document.getElementById('signinBtn');

signupBtn.onclick=function(){
    title.innerHTML="Sign Up";
    nameField.style.display="block";
}

signupBtn.onclick=function(){
    title.innerHTML="Sign Up";
    nameField.style.display="block";
}
signinBtn.onclick=function(){
    title.innerHTML="Login";
    nameField.style.display="none";
}
