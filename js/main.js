function myfunction(){
  var x=document.getElementById('list');
  if(x.style.display=="block"){
      x.style.display="none";
  }
  else{
      x.style.display="block";
  }
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 767px
      1920: {
        slidesPerView: 6,
        spaceBetween: 30,
     },
     1440: {
      slidesPerView: 6,
      spaceBetween: 30,
   },

      1366: {
         slidesPerView: 6,
         spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
     },
     768: {
      slidesPerView: 3,
      spaceBetween: 30,
   },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
     },
     540: {
      slidesPerView: 3,
      spaceBetween: 30,
   },
   425: {
    slidesPerView: 2,
    spaceBetween: 30,
 },
 375: {
  slidesPerView: 2,
  spaceBetween: 30,
},
320: {
  slidesPerView: 2,
  spaceBetween: 30,
}
    }
  });

//   var swiper = new Swiper(".myCarousel", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
  var swiper = new Swiper(".myCarousel", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 767px
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
     },
     1440: {
      slidesPerView: 3,
      spaceBetween: 30,
   },

      1366: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
     },
      768: {
         slidesPerView: 1,
         spaceBetween: 30,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
     },
     540: {
      slidesPerView: 1,
      spaceBetween: 30,
   },
   425: {
    slidesPerView: 1,
    spaceBetween: 30,
 },
 375: {
  slidesPerView: 1,
  spaceBetween: 30,
},
320: {
  slidesPerView: 1,
  spaceBetween: 30,
}
    }
  });
function openTab(evt, ids) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ids).style.display = "block";
    evt.currentTarget.className += " active";


    showmore = document.getElementsByClassName("showmore");
    for (i = 0; i < showmore.length; i++) {
        showmore[i].style.display = "none";
       div_showmore= evt.currentTarget.nextElementSibling;
       div_showmore.innerHTML= document.getElementById(ids).innerHTML;
       div_showmore.style.display="block";
    }
}