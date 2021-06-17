var swiper = new Swiper('.swiper-container', {
  autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
  pagination: '.swiper-pagination',
  direction: "horizontal",
  // mousewheel:true,


  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : true
  },
  loop: true
});

function toggleMenu()
{
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation')
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}
