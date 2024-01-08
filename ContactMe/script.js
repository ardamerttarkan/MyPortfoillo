const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#Email');
const message = document.querySelector('#message');
const subject = document.querySelector('#subject');

function sendEmail(){

    const bodyMessage = `İsim: ${name.value} <br> Email: ${email.value} <br>  Telefon: ${phone.value} <br> Konu: ${subject.value} <br>   Mesaj: ${message.value}`;



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ardamert607734@gmail.com",
        Password : "3BAC479B961373B99A66652CF706051D5FBE",
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});
