let form = document.querySelector('.form');
let firstName = document.getElementById("name");
let dataNas   = document.getElementById("brithday");
let email     = document.getElementById("email");
let nam   = document.getElementById("last");
let subject   = document.getElementById("sub");
let phone     = document.getElementById("phone")


form.addEventListener("submit" , function(e){
    let type = validation()
    type  == true ? console.log("info passed"): e.preventDefault();
})

function validation() {
    let valueFirst = firstName.value.trim();
    let valuename = nam.value.trim()
    let valueData  = dataNas.value.trim();
    let valueEmail = email.value.trim();
    let valuePhone = phone.value.trim();
    let valueSub   = subject.value.trim();
    let rName = false ;
    let rFirst = false ;
    let rEmail = false ;
    let rPhone = false ;
    let rSub  = false ;
    const reg = /\w@gmail.com/ig;
    const reg2 = /[0-9]{10}/;
    
    if(valueFirst === "" | valueFirst.length <= 5){
        error(firstName ,"small name ")
    }else{
        correct(firstName)
        rFirst = true;
    }
    if( valuename === "" | valuename.length <= 5){
        error(nam ,"small name ")
    }else{
        correct(nam)
        rName = true;
    }

    if(reg.test(valueEmail) == true){
        correct(email)
        rEmail = true ;
    }else{
        error(email, "veried your email ,please")
    }
    if(reg2.test(valuePhone) == true ){
        rPhone = true;
        correct(phone)
    }else{
        error(phone, "veried your phone number ,please")
    }

    if(valueSub.length < 20 |   valueSub == ""){
        error(subject , "you object must be more that 22 carcter")
    }else {
        correct(subject)
        rSub = true ;
    }

    if (rEmail == true && rFirst == true && rSub == true && rPhone == true && rName == true ){
        return true
    }
    else {
        return false
    }
}


function error(input ,message ){
    input.className = "red" ;
    let parent = input.parentElement;
    console.log(parent);
    parent.querySelector(".fa-circle-xmark").className = "fa-solid fa-circle-xmark active"
    let va = parent.querySelector(".fa-circle-check")
    va.className = "fa-solid fa-circle-check ";
    parent.querySelector(".errer").innerText = message 
}

function  correct (input){
    input.className = "green";
    let parent = input.parentElement ;
    let va = parent.querySelector(".fa-circle-check")
    va.className = "fa-solid fa-circle-check active";
    parent.querySelector(".fa-circle-xmark").className = "fa-solid fa-circle-xmark"
    parent.querySelector(".errer").innerText = " " ;
    console.log("correct");
    console.log( parent.querySelector(".errer"))
    console.log(parent)
  
}

function  correc (input){
    input.className = "green";
    let parent = input.parentElement ;
    let va = parent.querySelector(".fa-circle-check")
    va.className = "fa-solid fa-circle-check active";
    parent.querySelector(".fa-circle-xmark").className = "fa-solid fa-circle-xmark"
    parent.querySelector(".errer").innerText = " " ;
    console.log("correct");
    console.log( parent.querySelector(".errer"))
    console.log(parent)
  
 
}


