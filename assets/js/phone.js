document.addEventListener("DOMContentLoaded", function () {
  const telInput = document.querySelector(".phone"),
        errorMsg = document.querySelector(".error-msg"),
        validMsg = document.querySelector(".valid-msg");

  const iti = window.intlTelInput(telInput, {   // <-- use telInput here
    initialCountry: "auto",
    preferredCountries: ["sa", "ae", "qa", "om", "bh", "kw", "ma","us"],
   onlyCountries: [
  "dz", // Algeria
  "bh", // Bahrain
  "eg", // Egypt
  "iq", // Iraq
  "jo", // Jordan
  "kw", // Kuwait
  "lb", // Lebanon
  "ly", // Libya
  "ma", // Morocco
  "mr", // Mauritania
  "om", // Oman
  "ps", // Palestine
  "qa", // Qatar
  "sa", // Saudi Arabia
  "sd", // Sudan
  "sy", // Syria
  "tn", // Tunisia
  "ae", // United Arab Emirates
  "ye", // Yemen
  "so", // Somalia
  "dj", // Djibouti
  "km", // Comoros
],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.10/build/js/utils.js", // needed for formatting/validation
  });

  const reset = () => {
    telInput.classList.remove("error");
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
  };

  telInput.addEventListener("blur", () => {
    reset();
    if (telInput.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("hide");
      } else {
        telInput.classList.add("error");
        errorMsg.classList.remove("hide");
      }
    }
  });

  telInput.addEventListener("keyup", reset);
  telInput.addEventListener("change", reset);

  // Set default to Bahrain
  iti.setCountry("bh");
});
