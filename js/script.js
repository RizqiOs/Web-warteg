let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });

  // Data Menu Makanan
const menuData = [
  {
    name: "Nasi Goreng",
    description: "Nasi goreng khas Indonesia dengan ayam dan telur.",
    price: "Rp 25,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAf2PNVgnSfPlNnWMJ6PAZtcMG2jT1F-wsA&s"
  },
  {
    name: "Mie Ayam",
    description: "Mie ayam dengan pangsit dan sayuran segar.",
    price: "Rp 20,000",
    image: "https://kurio-img.kurioapps.com/21/12/01/c0002ce2-2ee1-4f6e-aa6a-ac6aa9387e01.jpe"
  },
  {
    name: "Sate Ayam",
    description: "Sate ayam bakar dengan saus kacang lezat.",
    price: "Rp 30,000",
    image: "https://asset.kompas.com/crops/BJdOTeUCdwHWS6ImI9qDnf3s8nI=/0x0:1000x667/1200x800/data/photo/2023/12/19/6580e31d4d33e.jpeg"
  },
  {
    name: "Rendang",
    description: "Rendang daging sapi empuk khas Padang.",
    price: "Rp 40,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yKcMO3DTwm6Dijh2nVhEWGt1m4wI3BhQnw&s"
  },
  {
    name: "Perkedel",
    description: "Terbuat dari Kentang dan Susu",
    price: "Rp 25,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lewvPt4HqOGMzCBeU-aqtVz8WMsi4BN41g&s"
  },
  {
    name: "Es Campur",
    description: "Campuran buah segar dengan susu dan toping kacang",
    price: "Rp 10,000",
    image: "https://cdn0-production-images-kly.akamaized.net/qSxIa6DhH4tSfPQdtDo-0vS-6R8=/0x2180:3999x4434/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3981507/original/061819300_1648783740-shutterstock_1969134643.jpg"
  },
  {
    name: "Telor dadar",
    description: "Telor dadar di goreng dengan renyah",
    price: "Rp 8,000",
    image: "https://pict.sindonews.net/webp/480/pena/news/2022/05/15/185/769597/tidak-perlu-jajan-di-luar-begini-cara-bikin-telur-dadar-krispi-yang-enak-bjs.webp"
  },
  {
    name: "Ayam Pop",
    description: "ayam pop dengan cita rasa gurih dan manis",
    price: "Rp 15,000",
    image: "https://img-global.cpcdn.com/recipes/b1799233a592146f/1200x630cq70/photo.jpg"
  },
  {
    name: "Gulai Ayam",
    description: "Gulai ayam di bumbu khas padang",
    price: "Rp 17,000",
    image: "https://img.kurio.network/TCQBRrwdSJbI4mnoYVdN4_Avkh8=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/22/07/26/778419cb-d050-4164-840c-d466248160a8.jpg"
  },
  {
    name: "Usus cabe pedas",
    description: "usus ayam pedang dengan cita rasa gurih dan manis",
    price: "Rp 10,000",
    image: "https://img-global.cpcdn.com/recipes/7c45669a179bf9ae/680x482cq70/usus-ayam-pedas-ala-warteg-foto-resep-utama.jpg"
  },
  {
    name: "Telor cabe ijo",
    description: "telor cabe ijo di bumbu khas padang",
    price: "Rp 17,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4H2ziOgXnL1F5qjsDcSLmIKZLgkDNQRA7w&s"
  },
  {
    name: "ayam goreng",
    description: "ayam goreng digoreng garing renyah dan lezat",
    price: "Rp 16,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqH2wujQYKUgkTTA14HCn6rGxErqdYNfTew&s"
  }
];

// Generate Menu Items
const menuContainer = document.getElementById("menu-container");

menuData.forEach((item) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  menuItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="content">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">${item.price}</div>
    </div>
  `;

  menuContainer.appendChild(menuItem);
});
