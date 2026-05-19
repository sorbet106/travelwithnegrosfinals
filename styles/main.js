const destinations = [
  {
    id: 1,
    name: "The Ruins",
    municipality: "Talisay City",
    category: "Historical Site",
    image: "images/theruins.jpg",
    shortDesc: "Known as the 'Taj Mahal of Negros,' this hauntingly beautiful ruined mansion stands as a monument to love and the indomitable Negrense spirit.",
    fullDesc: "The Ruins in Talisay City is the skeletal remains of a grand early 20th-century mansion built by sugar baron Don Mariano Ledesma Lacson for his beloved wife Maria Braga. During World War II, retreating Filipino forces torched the mansion to prevent Japanese forces from using it as headquarters. Despite the fire, the intricate Italianate façade and its towering columns remained standing. Today it is a beloved heritage landmark surrounded by manicured gardens.",
    entranceFee: "₱100 (Adults) / ₱50 (Children)",
    openingHours: "8:00 AM – 10:00 PM daily",
    activities: ["Heritage tour", "Photography", "Night illumination viewing", "Garden walk", "Museum visit"],
    bestTime: "October to May; stunning at night when lit up",
    travelTip: "Visit at dusk to see the dramatic golden lighting. The cafe inside serves local snacks and drinks."
  },
  {
    id: 2,
    name: "Mambukal Mountain Resort",
    municipality: "Murcia",
    category: "Mountain",
    image: "images/mambukal.jpg",
    shortDesc: "A lush mountain resort at the foot of Mt. Kanlaon featuring hot sulfur springs, waterfalls, zip lines, and dense forest trails.",
    fullDesc: "Mambukal Mountain Resort is a government-owned eco-tourism destination nestled at the foot of Mount Kanlaon Natural Park. It features seven waterfalls, natural hot sulfur springs believed to have healing properties, trekking trails through old-growth forest, a butterfly garden, and adventure activities including zip lines. The resort is a favorite weekend escape for both locals and tourists seeking nature and adventure.",
    entranceFee: "₱50 (Adults) / ₱30 (Children)",
    openingHours: "Open daily, 24 hours",
    activities: ["Waterfall trekking", "Hot spring bathing", "Zip line", "Butterfly garden", "Camping", "Bird watching"],
    bestTime: "March to June (dry season); avoid typhoon months",
    travelTip: "Bring trekking shoes and insect repellent. Overnight stays are available in the resort's cottages."
  },
  {
    id: 3,
    name: "Danjugan Island",
    municipality: "Cauayan",
    category: "Island",
    image: "images/danjugan.jpg",
    shortDesc: "A pristine protected marine reserve and wildlife sanctuary with five lagoons, coral reefs, and diverse bird species — a paradise for eco-tourists.",
    fullDesc: "Danjugan Island is a 42-hectare marine reserve and wildlife sanctuary managed by the Philippine Reef and Rainforest Conservation Foundation. The island is home to five unique lagoons, diverse coral reefs, sea turtles, and over 70 bird species. Activities are strictly regulated to protect its fragile ecosystem. Visitors must book through the foundation, and overnight stays in eco-cabins allow for stargazing and nature immersion.",
    entranceFee: "₱500–₱1,500 (reservation required)",
    openingHours: "By reservation only; day and overnight trips available",
    activities: ["Snorkeling", "Kayaking", "Bird watching", "Lagoon exploration", "Night dive", "Eco camping"],
    bestTime: "April to June (calmest seas)",
    travelTip: "Reserve well in advance. Bring biodegradable sunscreen only to protect the reefs."
  },
  {
    id: 4,
    name: "Bago River Whitewater Adventure",
    municipality: "Bago City",
    category: "Adventure",
    image: "images/bagoriver.jpg",
    shortDesc: "Challenge yourself with a whitewater rafting experience along Bago River, where rushing currents and scenic landscapes promise adrenaline and fun.",
    fullDesc: "Bago River in Bago City is an emerging adventure destination for thrill-seekers. Its strong currents and rocky passages make it ideal for rafting and tubing, offering both excitement and natural beauty. Surrounded by lush forests and mountain views, the river provides a refreshing escape from city life. Local guides ensure safety while adding cultural insights, making the adventure both exhilarating and educational.",
    entranceFee: "₱300–₱600 (rafting packages)",
    openingHours: "Daily, 8 AM – 4 PM",
    activities: ["Whitewater rafting", "Tubing", "River trekking"],
    bestTime: "Rainy season (June–October) for stronger currents",
    travelTip: "Go with a group for safety and fun, and always wear protective gear."
  },
  {
    id: 5,
    name: "Bacolod ATV Adventure Park",
    municipality: "Bacolod City",
    category: "Adventure",
    image: "images/ATV.jpg",
    shortDesc: "Ride through rugged trails and muddy tracks at Bacolod’s ATV Adventure Park, where adrenaline and fun meet in an outdoor playground.",
    fullDesc: "The Bacolod ATV Adventure Park offers thrill-seekers an exciting ride across rugged terrain, muddy tracks, and scenic countryside trails. Visitors can rent all-terrain vehicles and enjoy guided rides that test both skill and courage. The park is designed for groups of friends, families, and adventure enthusiasts who want a safe yet exhilarating outdoor experience. With professional guides and safety gear provided, it’s a must-try activity for those looking to add adrenaline to their Negros Occidental trip.",
    entranceFee: "₱500–₱800 (ATV rental packages)",
    openingHours: "Daily, 9 AM – 6 PM",
    activities: ["ATV riding", "Trail exploration", "Group adventure"],
    bestTime: "Year-round, especially weekends",
    travelTip: "Wear comfortable clothes you don’t mind getting muddy, and follow safety instructions."
  },
  {
    id: 6,
    name: "Lakawon Island",
    municipality: "Cadiz City",
    category: "Island",
    image: "images/lakawonisl.jpg",
    shortDesc: "A stunning white-sand island retreat with crystal-clear waters, a floating bar, and a relaxed resort ambiance perfect for a tropical getaway.",
    fullDesc: "Lakawon Island in Cadiz City is one of Negros Occidental's most popular beach destinations. The island features pristine white-sand shores, turquoise water, and a well-maintained resort with cottages, water sports facilities, and the famous Tatoy's floating cottage bar. It is ideal for swimming, snorkeling, and simply lounging on the beach.",
    entranceFee: "₱100 (environmental fee)",
    openingHours: "6:00 AM – 6:00 PM (day trip); overnight accommodation available",
    activities: ["Swimming", "Snorkeling", "Island hopping", "Beach volleyball", "Floating cottage bar"],
    bestTime: "November to May (dry season)",
    travelTip: "Take a banca boat from Cadiz City proper. Arrive early for the best spots on the beach."
  },
  {
    id: 7,
    name: "Campomanes Bay",
    municipality: "Sipalay City",
    category: "Beach",
    image: "images/campomanes.jpg",
    shortDesc: "A secluded emerald bay surrounded by rolling hills, perfect for swimming, kitesurfing, and snorkeling in Sipalay's scenic coastline.",
    fullDesc: "Campomanes Bay in Sipalay City is one of Negros Occidental's hidden gems — a sheltered emerald bay with calm clear waters ideal for swimming and snorkeling. It is also one of the Philippines' best kitesurfing spots, thanks to its consistent winds and shallow waters. The scenic surroundings of rolling green hills and mangroves make it exceptionally picturesque.",
    entranceFee: "Free",
    openingHours: "Open daily",
    activities: ["Kitesurfing", "Swimming", "Snorkeling", "Windsurfing", "Kayaking", "Fishing"],
    bestTime: "December to February (peak kite season)",
    travelTip: "Sipalay has several affordable resorts around the bay. Rent kitesurfing equipment on-site."
  },
  {
    id: 8,
    name: "Sagay Marine Reserve",
    municipality: "Sagay City",
    category: "Beach",
    image: "images/sagay.jpg",
    shortDesc: "The largest marine protected area in the Visayas, featuring pristine reefs, mangroves, seagrass beds, and rich marine biodiversity.",
    fullDesc: "The Sagay Marine Reserve covers 32,000 hectares and is one of the most protected marine ecosystems in the Philippines. It shelters rare fish species, sea turtles, dugong, and diverse coral formations. Visitors can explore the Carbin Reef, Bagong-silang mangrove forest, and the famous white sand bar. The reserve is strictly managed to preserve its biodiversity.",
    entranceFee: "₱50–₱200 depending on activity",
    openingHours: "6:00 AM – 5:00 PM",
    activities: ["Snorkeling", "Scuba diving", "Island hopping", "Bird watching", "Mangrove kayaking"],
    bestTime: "March to June",
    travelTip: "Join guided tours from Sagay City. Bring your own snorkeling gear for better experience."
  },
  {
    id: 9,
    name: "Gawahon Nature Park",
    municipality: "Victorias City",
    category: "Waterfall",
    image: "images/gawahon.jpg",
    shortDesc: "A natural forest park with a stunning spring-fed lagoon of intensely blue-green water, ideal for swimming and cave exploration.",
    fullDesc: "Gawahon Eco Park in Victorias City is home to one of Negros Occidental's most beautiful natural features — a spring-fed lagoon with mesmerizing emerald-blue water surrounded by dense forest. The park also features limestone caves, rock formations, and picnic areas. The pristine, non-chlorinated water is crystal clear and cool, making it perfect for swimming.",
    entranceFee: "₱40 (Adults) / ₱20 (Children)",
    openingHours: "8:00 AM – 5:00 PM (Tuesday to Sunday)",
    activities: ["Swimming", "Cave exploration", "Nature walk", "Picnic", "Photography"],
    bestTime: "Year-round; best in summer (March–May)",
    travelTip: "Closed on Mondays for maintenance. Bring a change of clothes — you'll definitely want to swim!"
  },
  {
    id: 10,
    name: "Mt. Kanlaon Natural Park",
    municipality: "La Carlota / Canlaon City",
    category: "Mountain",
    image: "images/kanlaon.png",
    shortDesc: "One of the Philippines' most active volcanoes and a UNESCO Ramsar site, offering challenging trekking through exceptional biodiversity.",
    fullDesc: "Mount Kanlaon, the highest peak in the Visayas at 2,465 meters, is an active volcano and a protected natural park known for its rich biodiversity. It is home to numerous endemic plant and animal species, including the Visayan warty pig and Philippine spotted deer. Trekking to the crater is a challenging but rewarding experience for experienced mountaineers.",
    entranceFee: "₱500–₱1,500 (permits required)",
    openingHours: "Trekking permits from DENR; no climbing during high alert",
    activities: ["Volcano trekking", "Camping", "Bird watching", "Photography", "Scientific research"],
    bestTime: "March to May (dry season, safest for climbing)",
    travelTip: "Secure a permit from DENR weeks ahead. Hire a local guide — the trail can be confusing."
  },
  {
    id: 11,
    name: "Silay Heritage Houses",
    municipality: "Silay City",
    category: "Historical Site",
    image: "images/silay.jpg",
    shortDesc: "Stroll through 'The Paris of Negros' — a city of over 30 well-preserved ancestral homes that tell stories of the sugar era's golden age.",
    fullDesc: "Silay City is known as 'The Paris of Negros' for its remarkable collection of Spanish-era and American colonial ancestral houses built by sugar barons in the 19th and early 20th centuries. Over 30 heritage structures have been preserved, many of which are open to the public. The Balay Negrense Museum, Hofilena Art Collection, and several private mansions offer a glimpse into Negros Occidental's aristocratic past.",
    entranceFee: "₱50–₱150 per house museum",
    openingHours: "9:00 AM – 5:00 PM (varies per site)",
    activities: ["Heritage walking tour", "Museum visits", "Photography", "Art gallery", "Food tasting"],
    bestTime: "Year-round; coolest in November–February",
    travelTip: "Hire a heritage tour guide in Silay's tourism office for a richer experience of the history."
  },
  {
    id: 12,
    name: "Tinagong Dagat",
    municipality: "Hinoba-an",
    category: "Beach",
    image: "images/tinagong.jpg",
    shortDesc: "A hidden sea — a landlocked saltwater lake surrounded by cliffs and mangroves, accessible only by a narrow passage through limestone rocks.",
    fullDesc: "Tinagong Dagat, meaning 'hidden sea,' is a rare geological formation in Hinoba-an: a large saltwater lake enclosed by towering cliffs and dense mangroves, connected to the sea only through a narrow underwater passage. The water inside is calm and teeming with fish. Visitors can swim, kayak, and explore the dramatic rock formations by boat.",
    entranceFee: "₱50 (environmental fee) + boat rental",
    openingHours: "6:00 AM – 5:00 PM",
    activities: ["Swimming", "Kayaking", "Snorkeling", "Rock cliff viewing", "Boat tour"],
    bestTime: "March to May",
    travelTip: "The journey to Hinoba-an is long but worth it. Combine with a visit to Campomanes Bay in Sipalay."
  },
  {
    id: 13,
    name: "Kabankalan Cathedral",
    municipality: "Kabankalan City",
    category: "Historical Site",
    image: "images/cathedral.jpg",
    shortDesc: "The magnificent St. Joseph Cathedral, one of the oldest and most beautiful churches in Negros Occidental, standing for over two centuries.",
    fullDesc: "The St. Joseph Cathedral in Kabankalan City is one of the oldest churches in the province, dating back to the Spanish colonial period. Its imposing façade, sturdy stone walls, and beautifully maintained interior make it one of the most photographed religious landmarks in Negros Occidental. The cathedral remains an active place of worship and an important cultural heritage site.",
    entranceFee: "Free",
    openingHours: "6:00 AM – 8:00 PM daily",
    activities: ["Prayer and mass", "Heritage photography", "Historical tour", "Cultural appreciation"],
    bestTime: "Year-round",
    travelTip: "Dress modestly when visiting. The town of Kabankalan is also known for its bustling market and local cuisine."
  },
  {
    id: 14,
    name: "Bulata White Beach",
    municipality: "Cauayan",
    category: "Beach",
    image: "images/bulata.jpg",
    shortDesc: "An unspoiled stretch of fine white sand beach with calm clear waters, ideal for snorkeling with sea turtles and reef fish.",
    fullDesc: "Bulata Beach in Cauayan is one of Negros Occidental's best-kept secrets: a long, tranquil white-sand beach with rich underwater life including sea turtles, reef fish, and vibrant corals. The beach is relatively undeveloped, offering a peaceful escape from the crowds. Small resorts and beach cottages cater to overnight guests.",
    entranceFee: "Free",
    openingHours: "Open daily",
    activities: ["Swimming", "Snorkeling", "Sea turtle watching", "Beach combing", "Sunset watching"],
    bestTime: "November to May",
    travelTip: "Combine with a day trip to Danjugan Island. The drive from Bacolod takes about 3.5 hours."
  },
  {
    id: 15,
    name: "Mandayao Falls",
    municipality: "La Castellana",
    category: "Waterfall",
    image: "images/mandayao.jpg",
    shortDesc: "A refreshing waterfall with clear spring waters from Mt. Kanlaon, offering a serene escape for hikers and nature lovers.",
    fullDesc: "Mandayao Falls is a hidden gem in La Castellana, surrounded by lush greenery and mountain views. The falls flow from Mt. Kanlaon’s natural springs, creating a tranquil environment perfect for relaxation, photography, and eco‑tourism. Visitors often enjoy the overlooking views of nearby towns and the majestic Kanlaon peak.Mandayao Falls is a stunning natural attraction in the municipality of La Castellana, featuring multi-tiered cascades of crystal-clear water flowing through a pristine tropical forest. The falls are accessible via a scenic trek through lush greenery and offer natural swimming pools at the base. The surrounding forest is rich in bird life and native flora.",
    entranceFee: "N/A",
    openingHours: "Open daily - 24hrs",
    activities: ["Swimming", "Trekking", "Photography", "Nature walk", "Picnic"],
    bestTime: "Dry season (November–May)",
    travelTip: "Wear sturdy shoes for the trek; paths can be slippery."
  },
  {
    id: 16,
    name: "Jomabo Island",
    municipality: "Escalante City",
    category: "Island",
    image: "images/jomabo.jpg",
    shortDesc: "A picturesque island resort in the north with white-sand beaches, clear blue waters, and excellent snorkeling and diving spots.",
    fullDesc: "Jomabo Island in Escalante City is one of the less-visited but equally stunning islands in Negros Occidental. The island features fine white sand, calm turquoise waters, and healthy coral reefs teeming with marine life. The island resort offers overnight accommodation in native cottages, making it ideal for a weekend island escape.",
    entranceFee: "₱150 (resort fee)",
    openingHours: "Check-in from 8:00 AM; overnight stays available",
    activities: ["Swimming", "Snorkeling", "Kayaking", "Island hopping", "Beach volleyball", "Fishing"],
    bestTime: "November to May",
    travelTip: "Book accommodation in advance for weekends. The banca ride from Escalante port takes about 30 minutes."
  },
  {
    id: 17,
    name: "Sugar Beach",
    municipality: "Sipalay City",
    category: "Beach",
    image: "images/sugar.jpg",
    shortDesc: "A long, peaceful stretch of white-powder beach lined with coconut palms and budget-friendly beach resorts in scenic Sipalay.",
    fullDesc: "Sugar Beach in Sipalay City lives up to its sweet name: a pristine, relatively undeveloped stretch of fine white sand with calm waters and a laid-back atmosphere. Several small resorts and guesthouses line the beach, most of which are affordable and run by friendly locals. The beach is perfect for swimming, sunbathing, and watching spectacular sunsets.",
    entranceFee: "Free",
    openingHours: "Open daily",
    activities: ["Swimming", "Sunbathing", "Sunset viewing", "Snorkeling", "Kayaking", "Beach dining"],
    bestTime: "November to May",
    travelTip: "Sipalay is a 4-hour drive from Bacolod. Combine with Campomanes Bay and Tinagong Dagat."
  }
];

//color map
const categoryColors = {
  "Beach":          "#0d9488",
  "Mountain":       "#65a30d",
  "Waterfall":      "#2563eb",
  "Historical Site":"#92400e",
  "Island":         "#7c3aed",
  "Adventure":      "#dc2626",
  "Food Destination":"#d97706"
};
//used in inquiry
function populateDestinationSelect(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  destinations.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.name;
    opt.textContent = `${d.name} (${d.municipality})`;
    sel.appendChild(opt);
  });
}

function renderNavbar() {
  const navHTML = `
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm" id="mainNavbar">
    <div class="container-xl">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
        <img src="images/negroslogo.png" alt="Negros Occidental" class="nav-logo" style="border-radius:50%;object-fit:cover;width:46px;height:46px;">
        <div class="nav-brand-text">
          <span class="nav-title">Province of Negros Occidental</span>
          <span class="nav-motto">The Land of Sweet Surprises</span>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navLinks">
        <ul class="navbar-nav align-items-lg-center gap-1 py-2 py-lg-0">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="destinations.html">Destinations</a></li>
          <li class="nav-item"><a class="nav-link" href="inquiry.html">Inquiry</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">More</a>
            <ul class="dropdown-menu shadow">
              <li><a class="dropdown-item" href="festivals.html"><i class="bi bi-star-fill text-warning me-2"></i>Festivals &amp; Culture</a></li>
              <li><a class="dropdown-item" href="food.html"><i class="bi bi-cup-hot-fill text-danger me-2"></i>Food &amp; Delicacies</a></li>
              <li><a class="dropdown-item" href="gallery.html"><i class="bi bi-images text-primary me-2"></i>Gallery</a></li>
              <li><a class="dropdown-item" href="traveltips.html"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Travel Tips</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function renderFooter() {
  const footerHTML = `
  <footer class="site-footer">
    <div class="container-xl">
      <div class="row align-items-center gy-4">
        <div class="col-lg-4 d-flex align-items-center gap-3">
          <img src="images/negroslogo.png" alt="Negros Occidental" style="height:48px;width:48px;border-radius:50%;object-fit:cover;">
          <div>
            <div class="footer-brand">Tourism of Negros Occidental</div>
            <div class="footer-motto">The Land of Sweet Surprises</div>
          </div>
        </div>
        <div class="col-lg-4 text-center d-none d-lg-block">
          <div class="footer-links d-flex justify-content-center gap-4 flex-wrap">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="destinations.html">Destinations</a>
            <a href="festivals.html">Festivals</a>
            <a href="food.html">Food</a>
            <a href="gallery.html">Gallery</a>
            <a href="traveltips.html">Travel Tips</a>
            <a href="inquiry.html">Inquiry</a>
          </div>
        </div>
        <div class="col-lg-4 text-lg-end">
          <p class="mb-1" style="color:rgba(255,255,255,0.7);">© 2026 Provincial Government of Negros Occidental.</p>
          <p class="mb-0" style="color:rgba(255,255,255,0.7);font-size:0.82rem;"><i class="bi bi-envelope-fill me-1"></i>info@negrosoccidental-tourism.ph</p>
        </div>
      </div>
      <hr class="footer-divider">
      <p class="text-center footer-copy mb-0">All rights reserved. Negros Occidental, Philippines.</p>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', function () {

  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));
  }

  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightboxImg');
  const lightboxCap  = document.getElementById('lightboxCaption');
  const lightboxClose= document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (lightbox && lightboxImg) {
    let currentIndex = 0;
    let galleryItems = [];

    function openLightbox(index) {
      const item = galleryItems[index];
      lightboxImg.src = item.src;
      lightboxCap.textContent = item.caption;
      lightbox.classList.add('open');
      currentIndex = index;
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      openLightbox(currentIndex);
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentIndex);
    }

    window.initLightbox = function(items) {
      galleryItems = items;
      document.querySelectorAll('.gallery-item').forEach((el, i) => {
        el.addEventListener('click', () => openLightbox(i));
      });
    };

    lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext  && lightboxNext.addEventListener('click', showNext);
    lightboxPrev  && lightboxPrev.addEventListener('click', showPrev);

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft')  showPrev();
    });
  }

});