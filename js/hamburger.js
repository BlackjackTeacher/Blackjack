// HAMBURGERv2

function togglescroll() {
  $('body').on('touchstart', function (e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function () {
  togglescroll()
  $(".icon-header").click(function () {
    $(".nav-main ul").fadeToggle(400);
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
});

var width = $(window).width();
$(document).ready(function () {
  togglescroll()
  var w = $(window).width()
  if (w < 768 && width < 768) {
    $(".nav-main ul li a").click(function () {
      $(".nav-main ul").fadeToggle(400);
      $(".top-menu").toggleClass("top-animate");
      $("body").toggleClass("noscroll");
      $(".mid-menu").toggleClass("mid-animate");
      $(".bottom-menu").toggleClass("bottom-animate");
    });
  }
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    $(".nav-main ul").fadeOut(400);
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});

// RESIZE

$(window).resize(function () {
  var w = $(window).width()
  if (w > 768 && width < 768) {
    $(".mobilenav").show();
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  } else if (w < 768 && width > 768) {
    $(".mobilenav").hide();
  }
  width = w;
});