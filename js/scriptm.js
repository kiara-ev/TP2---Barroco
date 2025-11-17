// DATOS DE MUSEOS
const museos = [
  {
    nombre: "Louvre",
    año: "1793 - Francia, París",
    descripcion: "Famoso por La Gioconda y por su vastísima colección de arte de todos los tiempos.",
    imagen: "img/louvre.jpg"
  },
  {
    nombre: "Museo del Prado",
    año: "1819 - España, Madrid",
    descripcion: "Uno de los museos más importantes del mundo. Alberga obras de Goya, Velázquez, Rubens y más.",
    imagen: "img/prado.jpg"
  },
  {
    nombre: "Metropolitan Museum of Art",
    año: "1870 - EEUU, New York",
    descripcion: "Uno de los museos más grandes de Estados Unidos. Incluye 5.000 años de arte.",
    imagen: "img/metropolitan.jpg"
  },
  {
    nombre: "Museo Nacional de Arte de Cataluña",
    año: "1934 - España, Barcelona",
    descripcion: "Ubicado en Montjuïc, con colecciones de arte románico, gótico y renacentista.",
    imagen: "img/dart.jpg"
  },
  {
    nombre: "Tate Modern",
    año: "2000 - Reino Unido, Londres",
    descripcion: "Museo de arte moderno y contemporáneo en Londres.",
    imagen: "img/tate.jpg"
  },
];

const container = document.querySelector(".timeline-container");
const line = document.querySelector(".timeline-line");

// GENERAR PUNTOS
museos.forEach((m, index) => {
  const point = document.createElement("div");
  point.className = "museum-point";
  point.dataset.index = index;

  // Posición corregida
  point.style.left = (150 + index * 250) + "px";

  const year = document.createElement("span");
  year.className = "year";
  year.textContent = m.año;

  point.appendChild(year);
  container.appendChild(point);
});


// ANIMACIONES GSAP
gsap.fromTo(".timeline-line",
  { width: 0, opacity: 0 },
  { width: "3000px", opacity: 1, duration: 1.8, ease: "power2.out" }
);

gsap.to(".museum-point", {
  scale: 1,
  opacity: 1,
  duration: 0.9,
  ease: "elastic.out(1, 0.5)",
  stagger: 0.15,
  delay: 1
});

gsap.to(".year", {
  opacity: 1,
  duration: 0.5,
  stagger: 0.1,
  delay: 1.2
});


// TARJETAS
const card = document.getElementById("museumCard");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeCard");

// Abrir tarjeta
document.addEventListener("click", e => {
  if (e.target.classList.contains("museum-point")) {
    const idx = e.target.dataset.index;
    const m = museos[idx];

    document.getElementById("museumName").textContent = m.nombre;
    document.getElementById("museumImg").src = m.imagen;
    document.getElementById("museumYear").textContent = "Año: " + m.año;
    document.getElementById("museumDesc").textContent = m.descripcion;

    card.style.display = "block";
    overlay.style.display = "block";

    gsap.fromTo(card,
      { scale: 0.7, opacity: 0, filter: "blur(10px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.5 }
    );

    gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4 });
  }
});

// Cerrar tarjeta
function cerrarTarjeta() {
  gsap.to(card, {
    scale: 0.7,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.4,
    onComplete: () => { card.style.display = "none"; }
  });

  gsap.to(overlay, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => overlay.style.display = "none"
  });
}

closeBtn.addEventListener("click", cerrarTarjeta);

// Cerrar tocando el fondo
overlay.addEventListener("click", cerrarTarjeta);

