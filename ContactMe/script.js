const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#Email');
const message = document.querySelector('#message');
const subject = document.querySelector('#subject');


function ContactMe(){
    window.location.href ="../ContactMe/contactme.html" ;
}

    function HomePage(){
    window.location.href ="index.html" ;
}

function WhoAmI(){
    window.location.href ="../WhoAmI/whoami.html" ;
}
function Hobbies(){
    window.location.href ="../Hobbies/hobbies.html"
}


function sendEmail(){

    const bodyMessage = `İsim: ${name.value} <br> Email: ${email.value} <br> Konu: ${subject.value} <br>   Mesaj: ${message.value}`;



    Email.send({
        //https://smtpjs.com/
        SecureToken: "42efbe46-83f4-45c5-a93d-5a423015def6",
        To : 'ardamert607734@gmail.com',
        From : "ardamert607734@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == 'OK'){
            Swal.fire({
                title: "Teşekkürler",
                text: "Mesajınız İletildi!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {

const items = document.querySelectorAll(".item");

for(const item of items ){
    if(item.value == ""){
        item.classList.add("error");
        item.parentElement.classList.add("error");
            
          }

          if(items[1].value !=""){
            checkEmail();
          }

          items[1].addEventListener("keyup", () =>{
            checkEmail();
          });



          item.addEventListener("keyup", () =>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
          });
        
    }
}


function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");




    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Lütfen geçerli bir email adresi giriniz.";
        }
        else{
            errorTxtEmail.innerText = "Email Boş Olamaz";
        }



    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }


}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();


if(!name.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error") && !subject.classList.contains("error")){

    sendEmail();
   
    form.reset();
    return false;
}




});
