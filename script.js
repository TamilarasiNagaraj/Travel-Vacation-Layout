const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

 // Toggle dropdown on profile pic click
    profilePic.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent event bubbling
      dropdownMenu.classList.toggle("active");
    });

    // Close dropdown when clicking anywhere else
    document.addEventListener("click", (e) => {
      if (!dropdownMenu.contains(e.target) && e.target !== profilePic) {
        dropdownMenu.classList.remove("active");
      }
    });

   
// PAYMENT DROPDOWN
function togglePaymentMenu() {
    let box = document.getElementById("paymentMenu");
    let arrow = document.getElementById("payArrow");
    let header = document.querySelector(".paymentboxunique-header");

    if (box.style.display === "block") {
        box.style.display = "none";
        arrow.classList.remove("rotate");
        header.classList.remove("active");
    } else {
        box.style.display = "block";
        arrow.classList.add("rotate");
        header.classList.add("active");
    }
}


// ⭐ WHEN CREDIT CARD IS CLICKED
document.querySelector(".payCredit").onclick = function () {

    // Hide the whole payment selection box
    document.getElementById("paymentBoxUnique").style.display = "none";

    // Hide dropdown
    document.getElementById("paymentMenu").style.display = "none";

    // Show credit card form
    document.getElementById("creditCardBoxUnique").style.display = "block";
};


// ⭐ WHEN OTHER PAYMENT OPTIONS ARE CLICKED
document.querySelectorAll(".payDebit, .payGoogle, .payUpi").forEach(option => {
    option.onclick = function () {

        // Show Payment Selection Box again
        document.getElementById("paymentBoxUnique").style.display = "block";

        // Hide credit card form
        document.getElementById("creditCardBoxUnique").style.display = "none";

        // Hide dropdown
        document.getElementById("paymentMenu").style.display = "none";
    };
});
document.querySelector(".creditCard-proceed-btn").onclick = function () {

    // Show success popup
    document.getElementById("paymentSuccessPopup").style.display = "flex";

    // Redirect to Home Page after 2 seconds
    setTimeout(function () {
        window.location.href = "home.html"; // ← Change to your home page
    }, 2000);
};
 