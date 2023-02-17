console.log("Starts!");

let ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

const isValidWeb = () => {
  console.log("Called!");
  let email = document.querySelector(
    ".check-your-website-speed-container-input-right"
  );
  let url = document.querySelector(
    ".check-your-website-speed-container-input-left"
  );
  console.log(ValidateEmail(email));
  if (ValidateEmail(email.value) && isValidUrl(url.value)) {
    let responseArea = document.querySelector(".validate-web-response-box");
    responseArea.innerHTML = "Response Recieved!";
  } else {
    let responseArea = document.querySelector(".validate-web-response-box");
    responseArea.innerHTML = "Enter Valid Things Please!";
  }

  setTimeout(function () {
    let responseArea = document.querySelector(".validate-web-response-box");
    responseArea.innerHTML = "";
  }, 5000);
  email.value = "";
  url.value = "";
};

const subscribeDetailsValidate = () => {
  let subscriberName = document.querySelector(".subscriber-name");
  let subscriberEmail = document.querySelector(".subscriber-email");
  let responseArea = document.querySelector(".subcribe-response-area");

  console.log(ValidateEmail(subscriberEmail.value));
  console.log(subscriberName.value);

  if (
    !!subscriberName.value.trim().length &&
    ValidateEmail(subscriberEmail.value.trim())
  ) {
    responseArea.innerHTML = `Subscription Added for ${subscriberEmail.value.trim()}!`;
  } else {
    responseArea.innerHTML = "Please Enter Valid Responses";
  }

  setTimeout(function () {
    responseArea.innerHTML = "";
  }, 5000);

  subscriberEmail.value = "";
  subscriberName.value = "";
};

// SWIPPER CODE

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
