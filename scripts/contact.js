const typewriterElement = document.querySelector(".typewriter-title");
const text = "Mau Tours and Taxis";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typewriterElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
// Mobile menu
const toggleBtn = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
toggleBtn.addEventListener("click", () => navMenu.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
  // Wait for ToursModule to be ready
  if (typeof ToursModule === "undefined") {
    console.error(
      "ToursModule not loaded. Check that tours.js is loaded before contact.js",
    );
    return;
  }

  // Mobile menu toggle (if not already in separate file)
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () =>
      navMenu.classList.toggle("active"),
    );
  }

  // ---------- Interested Tours Section ----------
  let currentInterested = [];

  function loadInterestedTours() {
    const interestedIds = ToursModule.getInterestedTours(); // array of tour IDs
    const allTours = ToursModule.tours;
    currentInterested = allTours.filter((tour) =>
      interestedIds.includes(tour.id),
    );
    renderInterestedList();
  }

  function renderInterestedList() {
    const listContainer = document.getElementById("interestedList");
    const emptyDiv = document.getElementById("empty-interested");
    if (!listContainer) return;

    if (currentInterested.length === 0) {
      listContainer.innerHTML = "";
      if (emptyDiv) emptyDiv.style.display = "block";
      return;
    }
    if (emptyDiv) emptyDiv.style.display = "none";

    listContainer.innerHTML = currentInterested
      .map(
        (tour) => `
            <li class="interested-item">
                <span>${escapeHtml(tour.title)}</span>
                <button class="remove-tour" data-id="${tour.id}"><i class="fas fa-trash-alt"></i></button>
            </li>
        `,
      )
      .join("");

    // Attach remove event listeners
    document.querySelectorAll(".remove-tour").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const tourId = btn.dataset.id;
        removeInterestedTour(tourId);
      });
    });
  }

  function removeInterestedTour(tourId) {
    let interestedIds = ToursModule.getInterestedTours();
    interestedIds = interestedIds.filter((id) => id !== tourId);
    localStorage.setItem("interestedTours", JSON.stringify(interestedIds));
    // Refresh the list
    loadInterestedTours();
    alert("Tour removed from your interests.");
  }

  // Helper to escape HTML
  function escapeHtml(str) {
    return str.replace(/[&<>]/g, function (m) {
      if (m === "&") return "&amp;";
      if (m === "<") return "&lt;";
      if (m === ">") return "&gt;";
      return m;
    });
  }

  // ---------- Build message with interested tours ----------
  function buildMessageWithInterests() {
    const name = document.getElementById("name")?.value.trim() || "";
    const groupSize = document.getElementById("groupSize")?.value.trim() || "";
    const date = document.getElementById("date")?.value || "";
    const description =
      document.getElementById("description")?.value.trim() || "";

    let msg =
      "Hello Mau Tours! I'd like to inquire about a trip to Zanzibar.\n\n";
    if (name) msg += `Name: ${name}\n`;
    if (groupSize) msg += `Group size: ${groupSize}\n`;
    if (date) msg += `Preferred date: ${date}\n`;
    if (description) msg += `Message: ${description}\n`;

    if (currentInterested.length > 0) {
      msg += `\n--- Tours I'm interested in ---\n`;
      currentInterested.forEach((tour, idx) => {
        msg += `${idx + 1}. ${tour.title}\n`;
      });
    } else {
      msg += `\n(No specific tours selected yet – I'd like recommendations.)\n`;
    }

    return encodeURIComponent(msg);
  }

  // Attach event listeners to buttons
  const whatsappBtn = document.getElementById("whatsappBtn");
  const emailBtn = document.getElementById("emailBtn");
  const smsBtn = document.getElementById("smsBtn");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const message = buildMessageWithInterests();
      window.open(`https://wa.me/255777123456?text=${message}`, "_blank");
    });
  }
  if (emailBtn) {
    emailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const subject = "Tour Inquiry from Mau Tours website";
      const body = decodeURIComponent(buildMessageWithInterests());
      window.location.href = `mailto:info@mautours.co.tz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
  if (smsBtn) {
    smsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const body = decodeURIComponent(buildMessageWithInterests());
      window.open(
        `sms:+255777123456?body=${encodeURIComponent(body)}`,
        "_blank",
      );
    });
  }

  // Initial load
  loadInterestedTours();
});
