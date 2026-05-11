// scripts/gallery.js

const tourFolders = [
    { name: "Stone Town Heritage", folder: "stone-town" },
    { name: "Spice Farm & Cooking", folder: "spice-farm" },
    { name: "Prison Island & Tortoises", folder: "prison-island" },
    { name: "Swimming with turtles", folder: "turtles" },
    { name: "Snorkeling Mnemba", folder: "mnemba" },
    { name: "Jozani Forest and Monkeys", folder: "jozani" }, // ← comma was missing here
    { name: "Safari Blue", folder: "blue-safari" },
    { name: "Nakupenda Sand beach", folder: "nakupenda" },
    { name: "Safari Tanzania", folder: "safari" }
];

// Max images per tour (img1 to img10)
const maxImages = 10;

// All images are .jpg – build path directly
function buildImagePath(folder, index) {
    return `images/tours/${folder}/img${index}.jpg`;
}

// Load gallery (synchronous – no need for async/await)
function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) {
        console.error('Gallery container not found!');
        return;
    }

    galleryContainer.innerHTML = '<div class="loading">Loading gallery images...</div>';

    let allImages = [];

    for (const tour of tourFolders) {
        for (let i = 1; i <= maxImages; i++) {
            const imgPath = buildImagePath(tour.folder, i);
            // We'll just assume the image exists. If it doesn't, the browser will show a broken icon.
            // But we can still add it; you can optionally check via Image.onerror later.
            allImages.push({
                src: imgPath,
                tourName: tour.name,
                alt: `${tour.name} - image ${i}`
            });
        }
    }

    // Clear loading message
    galleryContainer.innerHTML = '';

    if (allImages.length === 0) {
        galleryContainer.innerHTML = '<p class="no-images">No images defined.</p>';
        return;
    }

    // Render grid
    allImages.forEach(img => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.style.opacity='0.3'; this.title='Image not found'">
            <div class="gallery-card-caption">${img.tourName}</div>
        `;
        card.addEventListener('click', () => openModal(img.src, img.alt));
        galleryContainer.appendChild(card);
    });
}

// Modal functions
function openModal(imageSrc, altText) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = imageSrc;
        modalImg.alt = altText;
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) modal.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Start loading when DOM ready
document.addEventListener('DOMContentLoaded', loadGallery);