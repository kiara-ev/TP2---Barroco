 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  const mensaje = document.getElementById("mensaje");
  const contador = document.getElementById("contador");
  const resultado = document.getElementById("resultado");

  // Contador de palabras
  mensaje.addEventListener("input", () => {
    const palabras = mensaje.value.trim().split(/\s+/).filter(p => p.length > 0);
    contador.textContent = `${palabras.length} / 300 palabras`;

    if (palabras.length > 300) {
      contador.style.color = "red";
    } else {
      contador.style.color = "#6d5845";
    }
  });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const palabras = mensaje.value.trim().split(/\s+/).filter(p => p.length > 0);
    if (palabras.length > 300) {
      alert("⚠️ El mensaje supera el límite de 300 palabras.");
      return;
    }

    // Simula envío exitoso
    resultado.textContent = "✅ ¡Mensaje enviado con éxito!";
    resultado.style.color = "green";

    // Limpia el formulario después de un segundo
    setTimeout(() => {
      form.reset();
      contador.textContent = "0 / 300 palabras";
      resultado.textContent = "";
    }, 1500);
  });
});

const datos = [
      "El claroscuro fue una de las técnicas más importantes del arte barroco.",
      "En Roma fue donde se originó El Barroco.",
      "Buscaba el realismo en el detalle y representaba aspectos cotidianos, combinados con elementos dramáticos o simbólicos.",
      "Artemisia Gentileschi fue una de las primeras pintoras reconocidas de la historia.",
      "El barroco se desarrolló paralelamente a la Contrarreforma.",
      "Bernini no solo fue escultor, también diseñó iglesias y plazas.",
      "Velázquez fue pintor de la corte del rey Felipe IV de España.",
      "El arte barroco influyó fuertemente en la arquitectura y la música.",
      "Usaba el movimiento y la asimetría a través de escorzos, composiciones abiertas y diagonales",
      "Para lograr efectos fieles de profundidad, utilizaba técnicas como el sfumato y la perspectiva.",
      "Se muestra fuertemete la crisis de la sociedad, justamente porque fue en el contexto que nacio.",
      "El barroco no solo fue pintura y escultura, también se manifestó en la literatura, el teatro y la arquitectura.",
    ];

    //Se copian los datos en un array 
    let datosRestantes = [...datos];

    //Se toman 3 datos distintos 
    function mostrar3Datos() {
      if (datosRestantes.length < 3) {
        datosRestantes = [...datos];
      } //esto es para su quedan menos de 3 datos, se reinicia el array :p 

      const seleccionados = [];
      for (let i = 0; i < 3; i++) {
        const indice = Math.floor(Math.random() * datosRestantes.length);
        seleccionados.push(datosRestantes[indice]);
        datosRestantes.splice(indice, 1); //elimina datos para que no se repitan 
      }
      return seleccionados;
    }

    //Función para actualizar los parrafos :P
      function cambiarDato() {
      const nuevos = mostrar3Datos();
      document.getElementById("dato1").textContent = nuevos[0];
      document.getElementById("dato2").textContent = nuevos[1];
      document.getElementById("dato3").textContent = nuevos[2];
    }

    //Mostrar en la pag los 3 datos al cargar
    window.addEventListener('DOMContentLoaded', cambiarDato);

    //Botón ;P
    document.getElementById("cambiarDatos").addEventListener("click", cambiarDato);


 