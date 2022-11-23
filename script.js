$(function () {
  let navMenu = $('#nav-menu');
  let navToggle = $('#nav-toggle');

  navToggle.on('click', () => {
    navMenu.css('right', '0');
  });

  $('#close-flyout').on('click', () => {
    navMenu.css('right', '-100%');
  });

  $(document).on('click', (e) => {
    let target = $(e.target);
    if (
      !(
        target.closest('#nav-toggle').length > 0 ||
        target.closest('#nav-menu').length > 0
      )
    ) {
      navMenu.css('right', '-100%');
    }
  });
});

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});

$(window).on('resize', function () {
  var win = $(this);
  if (win.width() <= 767.98) {
    $('#addFlex').addClass('flex');
  } else {
    $('#addFlex').removeClass('flex');
  }
});
