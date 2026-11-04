// Initialize Date Picker
export const initDatePicker = () => {
  $(document).ready(function () {
    $(".datepicker").datepicker({
      dateFormat: "dd/mm/yy",
      minDate: 0,
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true,
      changeYear: true,
    });
  });
};

// Initialize Travellers & Class Dropdown
export const initTravellersClass = () => {
  const selectedOptions = document.querySelectorAll(".selected-options");
  if (!selectedOptions) return;
  selectedOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const field = option.closest(".field");
      if (!field) return;
      field.classList.toggle("active");
    });
  });

  const body = document.querySelector("body");
  body.addEventListener("click", (event) => {
    selectedOptions.forEach((option) => {
      const field = option.closest(".field");
      if (!field) return;
      if (!field.contains(event.target)) {
        field.classList.remove("active");
      }
    });
  });
};

// Initialize Counter Widget
export const initCounters = () => {
  const counters = document.querySelectorAll(".counter");

  if (!counters.length) return;

  counters.forEach((widget) => {
    const incrementBtn = widget.querySelector(".btn-counter-inc");
    const decrementBtn = widget.querySelector(".btn-counter-dec");
    const countDisplay = widget.querySelector(".counter-count");

    if (!incrementBtn || !decrementBtn || !countDisplay) return;

    const field = widget.closest(".field");

    const adultsCount = field.querySelector("#adults-count");
    const childrenCount = field.querySelector("#children-count");
    const infantsCount = field.querySelector("#infants-count");
    const selectedOptions = field.querySelector("#selected-options");

    let count = parseInt(countDisplay.value, 10) || 0;

    const updateCount = () => {
      countDisplay.value = count;

      const adults = Number(adultsCount?.value || 0);
      const children = Number(childrenCount?.value || 0);
      const infants = Number(infantsCount?.value || 0);

      if (selectedOptions) {
        selectedOptions.textContent = `${adults + children + infants} Passenger${adults + children + infants !== 1 ? "s" : ""}`;
      }
    };

    incrementBtn.addEventListener("click", () => {
      count++;
      updateCount();
    });

    decrementBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        updateCount();
      }
    });
  });
};

// Initialize Special Offer Swiper
function initSwiper(swiperId, options) {
  const swiper = new Swiper(swiperId, options);
}

export const initSpecialOfferSwiper = () => {
  initSwiper("#specialOffersSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },

    breakpoints: {
      // Mobile
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      // Tablet
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      // Desktop
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
};
