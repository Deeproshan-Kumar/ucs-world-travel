// Load Header
export const loadHeader = () => {
  fetch("../src/components/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to load header: ${response.status} ${response.statusText}`,
        );
      }
      return response.text();
    })
    .then((data) => {
      const header = document.querySelector("#header");

      if (!header) {
        throw new Error("Header element (#header) not found");
      }

      header.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
};

// Load Footer
export const loadFooter = () => {
  fetch("../src/components/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to load footer: ${response.status} ${response.statusText}`,
        );
      }
      return response.text();
    })
    .then((data) => {
      const footer = document.querySelector("#footer");

      if (!footer) {
        throw new Error("Footer element (#footer) not found");
      }

      footer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
};

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
