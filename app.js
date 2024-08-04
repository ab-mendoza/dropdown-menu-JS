// Este código se ejecuta una vez que todo el contenido del DOM se ha cargado completamente.
// Esto garantiza que todos los elementos a los que se hace referencia estén disponibles para su manipulación.
document.addEventListener("DOMContentLoaded", () => {
    // Se obtiene una referencia al elemento con el ID 'dropdown', 
    // que representa el elemento del menú que el usuario puede hacer clic para mostrar u ocultar el menú desplegable.
    const dropdown = document.getElementById('dropdown');
    
    // Se obtiene una referencia al elemento con el ID 'dropdown-menu', 
    // que es el menú desplegable que contiene las opciones que se mostrarán al usuario.
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Se agrega un evento de clic al elemento 'dropdown'.
    // Esto significa que cada vez que el usuario haga clic en este elemento, se ejecutará la función proporcionada.
    dropdown.addEventListener("click", (e) => {
        // Se utiliza e.stopPropagation() para evitar que el evento de clic se propague 
        // hacia otros elementos en el DOM, como el documento en general.
        // Esto es importante para que hacer clic en el menú desplegable no cierre el menú inmediatamente después de abrirlo.
        e.stopPropagation(); 
        
        // La línea siguiente alterna la clase 'visible' en el menú desplegable.
        // Si la clase 'visible' ya está presente en el menú, se eliminará, ocultándolo.
        // Si no está presente, se agregará, mostrándolo al usuario.
        // Si la clase especificada (en este caso, "nombre-de-la-clase") ya está presente en la lista de clases 
        // del elemento, toggle la elimina. Si la clase no está presente, toggle la agrega.
        dropdownMenu.classList.toggle("visible");
    });

    // Se agrega un evento de clic al documento completo.
    // Esto significa que cada vez que el usuario haga clic en cualquier parte de la página,
    // se ejecutará la función proporcionada.
    document.addEventListener("click", () => {
        // Esta línea elimina la clase 'visible' del menú desplegable,
        // lo que cierra el menú si está abierto.
        // Al hacer clic fuera del menú, el usuario verá que el menú se oculta automáticamente,
        // mejorando así la experiencia del usuario al interactuar con la interfaz.
        dropdownMenu.classList.remove("visible");
    });
});
