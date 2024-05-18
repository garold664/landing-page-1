const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  // const visibility = nav.getAttribute("data-visible");
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');

  if (primaryNav.hasAttribute('data-visible')) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  slidesToShow: 1,
  centerMode: true,
  arrows: false,

  responsive: {
    752: {
      slidesToShow: 3,
      dots: false,
      // arrows: true,
    },
  },
});
// setTimeout(() => {
//   slider.scrollToSlide(1);
// }, 500);
