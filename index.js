const form=document.getElementById("form")
const nameerror=document.getElementById("nameerror")
const emailerror=document.getElementById("emailerror")
const passworderror=document.getElementById("passworderror")
const confirmerror=document.getElementById("confirmerror")
var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
var validpassword=/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/
function validdetail(formdetail){
    let errors = {};
    if(formdetail.name.length<4 || formdetail.name.length>20 ){
        errors.name="Name will be between 4 to 20"
    }
    if(formdetail.password.length<6){
        errors.password="Password Length is minimum 6"
    }
    if(formdetail.password !== formdetail.confirmpassword){
        errors.confirmpassword="password not equal"
    }
    
    if(formdetail.name==""){
        errors.name="Name cannot be empty"
    }
    if(formdetail.email==""){
        errors.email="Email cannot be empty"
    }
    if(formdetail.password==""){
        errors.password="Password cannot be empty"
    }
    if(!formdetail.email.match(validRegex)){
        errors.email="Invalid Mail-Id"
    }
    if (!formdetail.password.match(validpassword)){
        errors.password="Password should have At least one number,At least one uppercase character,At least one lowercase character,and special latter"  
    }

    return errors
}
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const values = Array.from(event.target);
    console.log(values)
    const formdetail={
        name:values[0].value,
        email:values[1].value,
        password:values[2].value,
        confirmpassword:values[3].value
    }
    console.log(formdetail)
    const errors=validdetail(formdetail)
    if(Object.keys(errors).length>0){
        nameerror.innerText=errors.name || ""
        passworderror.innerText=errors.password || ""
        confirmerror.innerText=errors.confirmpassword || ""
        emailerror.innerText=errors.email || ""
    }
    else{
        alert("SignUp Sucessful")
        nameerror.innerText="";
        passworderror.innerText="";
        confirmerror.innerText="";
        emailerror.innerText=""
    }
})