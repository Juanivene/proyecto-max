//manjo de planes 
const planesAnuales = [
    { nombre: "Plan Anual 1", descripcion: "Descripción del Plan Anual 1", precio: "$40000/año" },
    { nombre: "Plan Anual 2", descripcion: "Descripción del Plan Anual 2", precio: "$50000/año" },
    { nombre: "Plan Anual 3", descripcion: "Descripción del Plan Anual 3", precio: "$60000/año" }
];

document.getElementById("anual").addEventListener("click", function() {
    const mostrarPlanesDiv = document.getElementById("mostrar_planes");
    
    // Limpiar tarjetas anteriores
    mostrarPlanesDiv.innerHTML = ''; // Limpia las tarjetas

    // Crear y mostrar tarjetas anuales
    planesAnuales.forEach(plan => {
        const planDiv = document.createElement("div");
        planDiv.className = "plan anual";
        planDiv.innerHTML = `
            <h3>${plan.nombre}</h3>
            <p>${plan.descripcion}</p>
            <p>Precio: ${plan.precio}</p>
        `;
        mostrarPlanesDiv.appendChild(planDiv);
    });
});
//revisar