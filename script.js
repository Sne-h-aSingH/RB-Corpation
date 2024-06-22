$(document).ready(function () {
  var navbar = $(".navbar-container");
  var headBan = $(".head-ban");
  var nextSection = $(".career-abt"); // Change this selector to the next section you want to scroll to
  var sticky = navbar.offset().top + headBan.height();

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition >= sticky) {
      navbar.addClass("sticky");
      $("#navbarBrandImage").attr("src", "Images/B-Logo-White.png");
    } else {
      navbar.removeClass("sticky");
      $("#navbarBrandImage").attr("src", "Images/B-Logo-Black-1.png");
    }

  });

  // Add this part to handle the case when scrolling back to the top
  $(window).scroll(function () {
    if ($(this).scrollTop() === 0) {
      navbar.removeClass("sticky");
      $("#navbarBrandImage").attr("src", "Images/B-Logo-Black-1.png");
    }
  });
});


// scroll to top
window.onscroll = function () {
  toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
  var button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll to top functionality
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
$(document).ready(function () {
  $("#scrollToTopBtn").hide();
});
