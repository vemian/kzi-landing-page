$(document).ready(function () {
  $("#lightSlider-benefits").lightSlider({
    item: 2,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 60,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 1000, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 4000,

    keyPress: true,
    controls: true,
    prevHtml: "",
    nextHtml: "",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 1,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
          enableTouch: true,
          enableDrag: true,
          freeMove: true,
          swipeThreshold: 1,
          keyPress: true,
          controls: true,
          prevHtml: "",
          nextHtml: "",
          pause: 2000
        },
      },
    ],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });
});
