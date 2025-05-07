let generatedCaptcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  generatedCaptcha = captcha;
  document.getElementById("captchaText").innerText = captcha;
}

function validateCaptcha() {
  const userCaptcha = document.getElementById("captchaInput").value.trim();
  const message = document.getElementById("message");

  if (userCaptcha === generatedCaptcha) {
    message.style.color = "green";
    message.innerText = "Login Successful!";
    return true;  // allow form submission
  } else {
    message.style.color = "red";
    message.innerText = "Invalid CAPTCHA. Please try again.";
    generateCaptcha();
    document.getElementById("captchaInput").value = "";
    return false; // prevent form submission
  }
}

window.onload = generateCaptcha;
