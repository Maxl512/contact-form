let submitBtn = document.querySelector("#contact-button");
let firstName = document.querySelector("#first-name");
let firstNameIcon = firstName.previousElementSibling;
let lastName = document.querySelector("#last-name");
let lastNameIcon = lastName.previousElementSibling;
let subject = document.querySelector("#subject");
let subjectIcon = subject.previousElementSibling;
let message = document.querySelector("#message");
let messageIcon = message.previousElementSibling;
const getError = () =>{
    let error = [];
    if(firstName.value.length == 0){
        firstName.style.border = ".3vh solid #c00";
        firstNameIcon.style.backgroundColor ="#c00";
        firstNameIcon.style.color ="#fff";
        error[1] = "You haven't write something as your first name";
        return error;
    } else{
        firstName.style.border = ".3vh solid #fff";
        firstNameIcon.style.backgroundColor ="#fff";
        firstNameIcon.style.color ="#58c";
    };
    if((firstName.value.length > 0 && firstName.value.length < 8) || firstName.value.length > 16){
        firstName.style.border = ".3vh solid #c00";
        firstNameIcon.style.backgroundColor ="#c00";
        firstNameIcon.style.color ="#fff";
        error[0] = true;
        error[1] = "The first name must to be between 8 to 16 characters";
        return error;
    } else{
        firstName.style.border = ".3vh solid #fff";
        firstNameIcon.style.backgroundColor ="#fff";
        firstNameIcon.style.color ="#58c";
    };        
    if(lastName.value.length == 0){
        lastName.style.border = ".3vh solid #c00";
        lastNameIcon.style.backgroundColor ="#c00";
        lastNameIcon.style.color ="#fff";
        error[1] = "You haven't write something as your last name";
        return error;
    } else{
        lastName.style.border = ".3vh solid #fff";
        lastNameIcon.style.backgroundColor ="#fff";
        lastNameIcon.style.color ="#58c";
    };
    if((lastName.value.length > 0 && lastName.value.length < 8) || lastName.value.length > 16){
        lastName.style.border = ".3vh solid #c00";
        lastNameIcon.style.backgroundColor ="#c00";
        lastNameIcon.style.color ="#fff";
        error[0] = true;
        error[1] = "The last name must to be between 8 to 16 characters";
        return error;
    } else{
        lastName.style.border = ".3vh solid #fff";
        lastNameIcon.style.backgroundColor ="#fff";
        lastNameIcon.style.color ="#58c";
    };
    if(subject.value.length == 0){
        subject.style.border = ".3vh solid #c00";
        subjectIcon.style.backgroundColor ="#c00";
        subjectIcon.style.color ="#fff";
        error[1] = "You haven't write something as your subject";
        return error;
    } else{
        subject.style.border = ".3vh solid #fff";
        subjectIcon.style.backgroundColor ="#fff";
        subjectIcon.style.color ="#58c";
    };
    if((subject.value.length > 0 && subject.value.length < 8) || subject.value.length > 16){
        subject.style.border = ".3vh solid #c00";
        subjectIcon.style.backgroundColor ="#c00";
        subjectIcon.style.color ="#fff";
        error[0] = true;
        error[1] = "The subject must to be between 8 to 16 characters";
        return error;
    } else{
        subject.style.border = ".3vh solid #fff";
        subjectIcon.style.backgroundColor ="#fff";
        subjectIcon.style.color ="#58c";
    };            
    if(message.value.length == 0){
        message.style.border = ".3vh solid #c00";
        messageIcon.style.backgroundColor ="#c00";
        messageIcon.style.color ="#fff";
        error[1] = "You haven't write something as your message";
        return error;
    } else{
        message.style.border = ".3vh solid #fff";
        messageIcon.style.backgroundColor ="#fff";
        messageIcon.style.color ="#58c";
    }; 
    if(message.value.length > 0 && message.value.length > 500){
        message.style.border = ".3vh solid #c00";
        messageIcon.style.backgroundColor ="#c00";
        messageIcon.style.color ="#fff";
        error[0] = true;
        error[1] = "The message must to be under the 300 characters";
        return error;
    } else{
        message.style.border = ".3vh solid #fff";
        messageIcon.style.backgroundColor ="#fff";
        messageIcon.style.color ="#58c";
    }; 
    error[0] = false;
    error[1] = "Message correctly submitted";
    firstName.value = "";
    lastName.value = "";
    subject.value = "";
    message.value = "";
    return error;
};
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();        
    let error = getError();
    if(error[0]){
        alert(error[1])
    } else{
        alert(error[1]);
    };
});