// scripts/tours.js

// ----------------------------- TOURS DATA -----------------------------
const tours = [
  {
    id: "mnemba-snorkeling",
    title: "Mnemba Atoll Snorkeling",
    shortDesc: "Explore Zanzibar's most pristine coral reef.",
    longDesc: "Sail to Mnemba Atoll, a marine conservation area with crystal-clear waters. You'll snorkel among colourful corals, tropical fish, and maybe even sea turtles. Includes boat, gear, light breakfast, and fruits. Perfect for beginners and experts alike.",
    image: "images/tours/mnemba/img9.jpg",
    category: "Water Sports"
  },
  {
    id: "dolphins-trip",
    title: "Dolphin Tour – Kizimkazi",
    shortDesc: "Swim with wild dolphins in their natural habitat.",
    longDesc: "Early morning departure to Kizimkazi, where bottlenose and spinner dolphins gather. Your guide will help you spot them responsibly – you can jump in and snorkel alongside these gentle creatures. Includes boat, snorkel gear, and light refreshments.",
    image: "images/dolphin.jpeg",
    category: "Wildlife"
  },
  {
    id: "swimming-turtles",
    title: "Swimming with Sea Turtles",
    shortDesc: "Meet and swim with rescued sea turtles.",
    longDesc: "Visit a conservation centre where rescued green and hawksbill turtles are cared for. You'll learn about their life cycle, feed them, and even swim alongside them in protected lagoons. A magical experience for all ages.",
    image: "images/tours/turtles/img1.jpg",
    category: "Wildlife"
  },
  {
    id: "stone-town",
    title: "Stone Town Heritage Walk",
    shortDesc: "Step into Zanzibar's historic heart.",
    longDesc: "Join a guided walk through Stone Town's labyrinthine alleys. See the Old Fort, House of Wonders, Freddie Mercury's house, the Darajani Market, and intricately carved Zanzibari doors. Learn about Swahili culture, the spice trade, and local legends.",
    image: "images/tours/stone-town/img1.jpg",
    category: "Cultural"
  },
  {
    id: "prison-island",
    title: "Prison Island & Giant Tortoises",
    shortDesc: "Meet ancient tortoises and explore a former quarantine station.",
    longDesc: "A 20‑minute boat ride takes you to Changuu Island. Walk among giant Aldabra tortoises – some over 150 years old. Snorkel in the clear waters, relax on the beach, and learn about the island's history as a prison and yellow fever quarantine.",
    image: "images/tours/prison-island/img1.jpg",
    category: "Wildlife & History"
  },
  {
    id: "nakupenda-sandbank",
    title: "Nakupenda Sandbank Picnic",
    shortDesc: "A white sand paradise in the middle of the ocean.",
    longDesc: "Sail to Nakupenda (meaning 'I love you') – a stunning sandbank that appears at low tide. Spend the day swimming, sunbathing, and enjoying a freshly prepared seafood BBQ. Crystal waters, starfish, and incredible photo opportunities.",
    image: "images/tours/nakupenda/img1.jpg",
    category: "Beach & Relax"
  },
  {
    id: "blue-safari",
    title: "Blue Safari – Full Day Adventure",
    shortDesc: "Combine snorkeling, sandbanks, and a tropical lunch.",
    longDesc: "The ultimate water excursion: visit three different reefs, two sandbanks, and a mangrove lagoon. Snorkel, swim, and feast on a seafood lunch prepared right on the boat. Includes professional guides, gear, and all refreshments.",
    image: "images/tours/blue-safari/img1.jpg",
    category: "Water Sports"
  },
  {
    id: "village-tour",
    title: "Local Village Tour",
    shortDesc: "Experience authentic Swahili village life.",
    longDesc: "Step off the tourist trail and visit a traditional Zanzibari village. Walk through farms, meet local artisans, visit a family home, and share a cup of spiced tea. Learn about daily life, agriculture, and community projects.",
    image: "images/villagetour.jpg",
    category: "Cultural"
  },
  {
    id: "jozani-forest",
    title: "Jozani Forest & Red Colobus Monkeys",
    shortDesc: "Home to the rare red colobus monkey.",
    longDesc: "Explore Jozani Chwaka Bay National Park, the only remaining natural forest in Zanzibar. Walk on wooden boardwalks through mangrove swamps and see the endemic Kirk's red colobus monkeys up close – they're very friendly!",
    image: "images/tours/jozani/img3.jpg",
    category: "Nature"
  },
  {
    id: "spice-tour",
    title: "Traditional Spice Farm Tour",
    shortDesc: "Taste and smell the spices that made Zanzibar famous.",
    longDesc: "Visit a working spice farm where you'll see cloves, vanilla, nutmeg, cinnamon, and many tropical fruits. Your guide will explain traditional medicinal uses. End with a fruit tasting and a delicious Swahili lunch.",
    image: "images/tours/spice-farm/img1.jpg",
    category: "Food & Spice"
  },
  {
    id: "mtende-beach",
    title: "Mtende Beach & Rock Pools",
    shortDesc: "Dramatic cliffs and natural rock pools.",
    longDesc: "Escape to the south‑east coast. Mtende Beach is famous for its huge rock formations, natural swimming pools formed by tides, and incredible sunset views. Perfect for photography, relaxation, and low‑tide exploration.",
    image: "images/pool.jpeg",
    category: "Beach"
  },
  {
    id: "massai-village",
    title: "Masai Village Experience",
    shortDesc: "Visit a Masai community and learn their traditions.",
    longDesc: "A short drive from Zanzibar's main tourist areas, you'll find a Masai village. Experience their dancing, jumping, and beadwork. Learn about their nomadic culture, cattle herding, and modern challenges. A respectful, eye‑opening visit.",
    image: "images/maasai.jpg",
    category: "Cultural"
  },
  {
    id: "rock-restaurant",
    title: "The Rock Restaurant Visit",
    shortDesc: "Dine on a legendary rock in the ocean.",
    longDesc: "Combine a boat trip with lunch at one of the world's most famous restaurants – The Rock. Perched on a stone off Michamvi Beach, you can only reach it by boat at high tide. Enjoy fresh seafood and stunning panoramic views. (Meals not included, but transfer and reservation service provided.)",
    image: "images/rock.webp",
    category: "Food & Dining"
  },
  {
    id: "sunset-cruise",
    title: "Traditional Dhow Sunset Cruise",
    shortDesc: "Sail into the Zanzibar sunset on a handcrafted dhow.",
    longDesc: "Relax on cushioned decks as you glide along the coast of Stone Town. Sip on fresh juice or a local drink, listen to taarab music, and watch the sky turn orange and purple. Drinks and snacks included.",
    image: "images/dhow.jpg",
    category: "Adventure"
  },
  {
    id: "cooking-class",
    title: "Swahili Cooking Class",
    shortDesc: "Learn to cook authentic Zanzibari dishes.",
    longDesc: "Visit a local home or cooking school. You'll shop for ingredients at a market, then prepare a full Swahili meal – think pilau rice, coconut fish curry, and plantains. Eat what you cook and take the recipes home.",
    image: "images/cooking.jpeg",
    category: "Food & Spice"
  },
  {
    id: "safari-tanzania",
    title: "Tanzania Safari – 3 Days (Optional)",
    shortDesc: "Combine Zanzibar with a mainland safari.",
    longDesc: "Extend your Zanzibar holiday with a 2‑3 day safari to Nyerere National Park (Selous) or Mikumi. See elephants, giraffes, lions, hippos, and hundreds of bird species. Includes flights or ferry, park fees, accommodation, and safari jeep. (Price varies by group size.)",
    image: "images/tours/safari/img1.jpg",
    category: "Safari"
  }
];

// ----------------------------- LOCAL STORAGE HELPERS -----------------------------
const STORAGE_KEY = "interestedTours";

function getInterestedTours() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveInterestedTours(toursList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toursList));
}

function addInterestedTour(tourId) {
  const interested = getInterestedTours();
  if (!interested.includes(tourId)) {
    interested.push(tourId);
    saveInterestedTours(interested);
    alert("Added to your interests! You can view them later.");
  } else {
    alert("This tour is already in your interested list.");
  }
}

function openTourModal(tour) {
  
  const existingModal = document.querySelector(".tour-modal");
  if (existingModal) existingModal.remove();
    
  const modal = document.createElement("div");
  modal.className = "tour-modal";
  modal.innerHTML = `
    <div class="tour-modal-content">
      <span class="tour-modal-close">&times;</span>
      <img src="${tour.image}" alt="${tour.title}" class="tour-modal-img">
      <h2>${tour.title}</h2>
      <div class="tour-modal-description">${tour.longDesc}</div>
      <div class="tour-modal-actions">
        <button class="btn-interested" data-id="${tour.id}">✅ I'm interested</button>
        <a href="booking.html" class="btn-booknow">📅 Book now</a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = "flex";

  // Close modal
  const closeBtn = modal.querySelector(".tour-modal-close");
  closeBtn.onclick = () => modal.remove();

  // Click outside to close
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  // Interested button handler
  const interestedBtn = modal.querySelector(".btn-interested");
  interestedBtn.onclick = () => addInterestedTour(tour.id);
}

// ----------------------------- RENDER TOUR CARDS -----------------------------
function renderTours(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  container.innerHTML = ""; // clear existing

  tours.forEach(tour => {
    const card = document.createElement("div");
    card.className = "tour-card";
    card.dataset.id = tour.id;
    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.title}" class="tour-card-img">
      <div class="tour-card-body">
        <h3 class="tour-card-title">${tour.title}</h3>
        <p class="tour-card-desc">${tour.shortDesc}</p>
      </div>
    `;
    card.addEventListener("click", () => openTourModal(tour));
    container.appendChild(card);
  });
}

// ----------------------------- EXPORT (for modular use) -----------------------------
// If using ES modules, you can uncomment:
// export { tours, renderTours, getInterestedTours, addInterestedTour };

// For non-module usage (global), expose:
window.ToursModule = {
  renderTours,
  getInterestedTours,
  addInterestedTour,
  tours
};