
let email = document.getElementById("email");
let password =document.getElementById("pass");
document.getElementById("register").addEventListener("click",(e)=>{
    e.preventDefault();
    if(!email.value){
        document.querySelector(".email-required").innerHTML = `<span style="color:crimson;padding-top: 1rem;">Email field is required</span>`;
        document.querySelector(".incorrect").style.display ="none" ;
    };
    if(!password.value) {
        document.querySelector(".password-required").innerHTML = `<span style="color:crimson;padding-top: 1rem;">Password field is required</span>`;
        ocument.querySelector(".incorrect").style.display ="none";
    }
    if(email.value && password.value){
        let users = getUsers(); ///[{name:"akk",email:"akk@gmail.com",pass:'1212'}]
        let hasUser = users.find((u)=> u.email === email.value && u.password === password.value );
        if(hasUser){
            localStorage.setItem("loginUser",JSON.stringify({name:hasUser.name,email:hasUser.email}));
            window.location.href = "shop.html"
        }else{
            document.querySelector(".incorrect").style.display ="block" ;
            document.querySelector(".email-required").innerHTML="";
            document.querySelector(".password-required").innerHTML="";
        }
    }
})