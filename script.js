// --------------------------------------------------
// PASSWORD GATE LOGIC
// --------------------------------------------------

// 🐶 Your new password:
const SECRET_PASSWORD = "basil";

const lockScreen   = document.getElementById("lock-screen");
const mainContent  = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const enterButton  = document.getElementById("enter-button");
const errorMsg     = document.getElementById("error-msg");

// If they've already unlocked before, skip straight to the main content
if (localStorage.getItem("ljag_unlocked") === "true") {
  if (lockScreen)  lockScreen.classList.add("hidden");
  if (mainContent) mainContent.classList.remove("hidden");
}

// Handle clicking the "Enter" button
if (enterButton) {
  enterButton.addEventListener("click", () => {
    const value = passwordInput ? passwordInput.value.trim() : "";

    if (value === SECRET_PASSWORD) {
      localStorage.setItem("ljag_unlocked", "true");

      if (lockScreen)  lockScreen.classList.add("hidden");
      if (mainContent) mainContent.classList.remove("hidden");

      if (errorMsg) errorMsg.textContent = "";
    } else {
      if (errorMsg) {
        errorMsg.textContent = "wrong password, bestie 😅";
      }
    }
  });
}

// Also let them hit Enter to unlock
if (passwordInput) {
  passwordInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      enterButton.click();
    }
  });
}


// --------------------------------------------------
// NEWSLETTER SUBSCRIBE LOGIC
// --------------------------------------------------

const subscribeForm = document.getElementById("subscribe-form");
const subscribeMsg  = document.getElementById("subscribe-msg");
const emailInput    = document.getElementById("email-input");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput ? emailInput.value.trim() : "";

    if (!email) {
      if (subscribeMsg) {
        subscribeMsg.textContent = "pls drop an email first 😅";
      }
      return;
    }

    // This will be upgraded later to send emails to your backend.
    if (subscribeMsg) {
      subscribeMsg.textContent = "you're on the list 💌 (this is local for now!)";
    }

    if (emailInput) {
      emailInput.value = "";
    }
  });
}