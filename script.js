// 1. Custom functions
function openHelp() {
  document.getElementById('helpModal').style.display = 'block';
}

function closeHelp() {
  const modal = document.getElementById('helpModal');
  // 6. DOM tree navigation property
  modal.parentElement.style.backgroundColor = '#f0f0f0';
  modal.style.display = 'none';
}

function submitHelp() {
  const query = document.getElementById('helpInput').value;
  if (query.trim() === '') {
    alert("Please type your help query!");
  } else {
    // 7. Create and insert an element at runtime
    const confirmation = document.createElement("p");
    confirmation.textContent = "Your query has been submitted!";
    confirmation.classList.add("confirmation-message");  // 3. Use classList
    const helpBox = document.getElementById('helpModal');
    helpBox.append(confirmation);

    alert("Your query: " + query + " has been submitted. We’ll assist you shortly.");
    closeHelp();
  }
}

function goToLogin() {
  window.location.href = "login/login.html";
}

// 4. First mouse-based event: clicking outside modal closes it
window.onclick = function (event) {
  const modal = document.getElementById('helpModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 5. Key-based event using addEventListener
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitHelp();  // Pressing Enter will submit the help query
  }
});

// 2. Second DOM traversal method
const allInputs = document.querySelectorAll("input");

// 4. Second mouse-based events: hover on help button
const helpButton = document.getElementById('helpBtn');
helpButton.addEventListener("mouseover", function () {
  helpButton.classList.add("hovered");  // 3. Style with class list
});
helpButton.addEventListener("mouseout", function () {
  helpButton.classList.remove("hovered");
});
