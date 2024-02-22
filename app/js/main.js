$(function () {
  if ($(".blog-page__slider")) {
    $(".blog-page__slider").slick({
      prevArrow:
        '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 0.0195312 6.957031 C 0.0195312 6.707031 0.105469 6.464844 0.269531 6.273438 L 5.507812 0.28125 C 5.652344 0.09375 5.875 -0.015625 6.113281 -0.015625 C 6.347656 -0.015625 6.570312 0.09375 6.714844 0.28125 C 7.050781 0.675781 7.050781 1.253906 6.714844 1.652344 L 2.082031 6.957031 L 6.714844 12.265625 C 7.046875 12.664062 7.046875 13.246094 6.714844 13.648438 C 6.566406 13.828125 6.34375 13.933594 6.109375 13.933594 C 5.878906 13.933594 5.65625 13.828125 5.507812 13.648438 L 0.269531 7.65625 C 0.105469 7.460938 0.0195312 7.214844 0.0195312 6.957031 Z M 0.0195312 6.957031 "/></g></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 7 6.984375 C 7 6.734375 6.917969 6.488281 6.761719 6.285156 L 1.484375 0.28125 C 1.335938 0.09375 1.113281 -0.0117188 0.875 -0.0117188 C 0.636719 -0.0117188 0.414062 0.09375 0.265625 0.28125 C -0.0703125 0.679688 -0.0703125 1.265625 0.265625 1.664062 L 4.929688 6.984375 L 0.265625 12.304688 C -0.0703125 12.707031 -0.0703125 13.289062 0.265625 13.691406 C 0.417969 13.871094 0.640625 13.976562 0.875 13.976562 C 1.109375 13.976562 1.332031 13.871094 1.484375 13.691406 L 6.761719 7.671875 C 6.925781 7.480469 7.007812 7.238281 7 6.984375 Z M 7 6.984375 "/></g></svg></button>',
        infinite: false,
    });
  }
  if ($(".product-tabs__top-item")) {
    $(".product-tabs__top-item").on("click", function (e) {
      e.preventDefault();
      $(".product-tabs__top-item").removeClass(
        "product-tabs__top-item--active"
      );
      $(this).addClass("product-tabs__top-item--active");

      $(".product-tabs__content-item").removeClass(
        "product-tabs__content-item--active"
      );
      $($(this).attr("href")).addClass("product-tabs__content-item--active");
    });
  }

  if ($(".product-slide__thumb")) {
    $(".product-slide__thumb").slick({
      asNavFor: ".product-slide__big",
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
    });
    $(".product-slide__big").slick({
      asNavFor: ".product-slide__thumb",
      draggable: false,
      arrows: false,
      fade: true,
    });
  }

  if ($(".shop-content__filter-btn")) {
    $(".shop-content__filter-btn").on("click", function () {
      $(".shop-content__filter-btn").removeClass(
        "shop-content__filter-btn--active"
      );
      $(this).addClass("shop-content__filter-btn--active");
    });
  }

  if ($(".button-list")) {
    $(".button-list").on("click", function () {
      $(".product-item").addClass("product-item--list");
    });
    $(".button-grid").on("click", function () {
      $(".product-item, .product-one__num").removeClass("product-item--list");
    });
  }

  if ($(".select-style") || $(".product-one__num")) {
    $(".select-style").styler();
    $(".product-one__num").styler();
  }

  if ($(".filter-price__input")) {
    $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $(".filter-price__from").text(data.from);
        $(".filter-price__to").text(data.to);
      },
      onChange: function (data) {
        $(".filter-price__from").text(data.from);
        $(".filter-price__to").text(data.to);
      },
    });
  }

  if ($(".top-slider__inner")) {
    $(".top-slider__inner").slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }

  if ($(".star")) {
    $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
      starSvg: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1">
        <g id="surface1">
          <path
            d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 " />
        </g>
      </svg>`,
    });
  }

  if ($(".promo__clock")) {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    function initializeClock(className, endtime) {
      const clock = document.querySelector(className);
      const daysSpan = clock.querySelector(".promo__days");
      const hoursSpan = clock.querySelector(".promo__hours");
      const minutesSpan = clock.querySelector(".promo__minutes");
      const secondsSpan = clock.querySelector(".promo__seconds");

      function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $(".promo__clock").attr("data-time");
    initializeClock(".promo__clock", deadline);
  }
});
