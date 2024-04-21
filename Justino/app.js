var menuItems = document.querySelectorAll(".menu-item");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
ScrollReveal({reset:true,distance:'60px',duration :2500,delay:400});

ScrollReveal().reveal('.first .title', {delay:300,origin:'left'});
ScrollReveal().reveal('.first .price', {delay:400,origin:'left'});
ScrollReveal().reveal('.first .text', {delay:500,origin:'left'});
ScrollReveal().reveal('.first button', {delay:700,origin:'left'});

ScrollReveal().reveal('.second .title', {delay:300,origin:'right'});
ScrollReveal().reveal('.second .price', {delay:400,origin:'right'});
ScrollReveal().reveal('.second .text', {delay:500,origin:'right'});
ScrollReveal().reveal('.second button', {delay:700,origin:'right'});

ScrollReveal().reveal('.first .image', {delay:500,origin:'top'});
ScrollReveal().reveal('.second .image', {delay:500,origin:'bottom'});

ScrollReveal().reveal('.people img', {delay:500,origin:'bottom',interval:300});


ScrollReveal().reveal('footer > h1', {delay:500,origin:'top'});