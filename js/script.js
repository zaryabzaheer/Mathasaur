$(document).ready(function () {
  AOS.init();

  $(".avatar-box-girl").click(function() {
    $(".avatar-box-girl").removeClass("active");
    // Add a class to the element
    $(this).toggleClass("active");
  });
  $(".avatar-box-boy").click(function() {
    $(".avatar-box-boy").removeClass("active");
    // Add a class to the element
    $(this).toggleClass("active");
  });

  $(".about-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    dots: true,
  });



// Get a reference to the container
var container = document.getElementById("lottie-animation");

// Configuration options
var animationOptions = {
  container: container, // The container for the animation
  renderer: "svg", // You can also use 'canvas' as the renderer
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to play automatically
  path: "./images/lottie/animation_lne96pkm.json" // Path to your Lottie animation file
};

// Create the Lottie animation
var animation = lottie.loadAnimation(animationOptions);

// Get a reference to the container
var container = document.getElementById("lottie-animation-1");

// Configuration options
var animationOptions = {
  container: container, // The container for the animation
  renderer: "svg", // You can also use 'canvas' as the renderer
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to play automatically
  path: "./images/lottie/animation_lne96pkm.json" // Path to your Lottie animation file
};

// Create the Lottie animation
var animation = lottie.loadAnimation(animationOptions);

// Configuration options
var animationOptions = {
  container: null, // The container for the animation
  renderer: "svg", // You can also use 'canvas' as the renderer
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to play automatically
  path: "./images/lottie/animation_lneilbwi.json" // Path to your Lottie animation file
};

for (var i = 1; i <= 5; i++) {
  // Get a reference to the container
  animationOptions.container = document.getElementById("tick-animation-" + i);

  // Create the Lottie animation
  var animation = lottie.loadAnimation(animationOptions);
}

// Configuration options
var animationOptions = {
  container: null, // The container for the animation
  renderer: "svg", // You can also use 'canvas' as the renderer
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to play automatically
  path: "./images/lottie/animation_lneilbwi.json" // Path to your Lottie animation file
};

for (var i = 1; i <= 5; i++) {
  // Get a reference to the container
  animationOptions.container = document.getElementById("ticker-animation-" + i);

  // Create the Lottie animation
  var animation = lottie.loadAnimation(animationOptions);
}



});
