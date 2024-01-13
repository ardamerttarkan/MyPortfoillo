var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function ContactMe(){
    window.location.href ="../ContactMe/contactme.html" ;
}

    function HomePage(){
    window.location.href ="../Homepage/index.html" ;
}

function WhoAmI(){
    window.location.href ="../WhoAmI/whoami.html" ;
}
function Hobbies(){
    window.location.href ="../Hobbies/hobbies.html" ;
}

  