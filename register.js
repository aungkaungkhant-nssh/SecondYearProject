let name = document.getElementById("name");
let email = document.getElementById("email");
let password =document.getElementById("pass");
document.getElementById("register").addEventListener("click",(e)=>{
    e.preventDefault();
    if(!name.value) document.querySelector(".name-required").innerHTML = `<span style="color:crimson;padding-top: 1rem;">Name field is required</span>`;
    if(!email.value) document.querySelector(".email-required").innerHTML = `<span style="color:crimson;padding-top: 1rem;">Email field is required</span>`;
    if(!password.value) document.querySelector(".password-required").innerHTML = `<span style="color:crimson;padding-top: 1rem;">Password field is required</span>`;
    if(name.value && email.value && password.value){
        let u = getUsers(); // []
        u.push({name:name.value,email:email.value,password:password.value})
        localStorage.setItem("users",JSON.stringify(u));
        window.location.href = "login.html"
    }
})

