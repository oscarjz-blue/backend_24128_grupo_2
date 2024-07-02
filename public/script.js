const movieList = document.getElementById('movieList');
const addMovieForm = document.getElementById('addMovieForm');
const editModal = document.getElementById('editModal');
const editMovieForm = document.getElementById('editMovieForm');
const editModalTitle = document.getElementById('editModalTitle');
const closeBtn = document.querySelector('.close-btn');

// Función para mostrar las películas en la lista
function renderMovieList(movies) {
    movieList.innerHTML = ''; // Limpiar la lista antes de actualizarla

    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Director: ${movie.director}</p>
            <p>Año: ${movie.year}</p>
            <img src="${movie.image}" alt="${movie.title} Poster">
            <button class="edit-btn" data-movie-id="${movie.id}">Editar</button>
            <button class="delete-btn" data-movie-id="${movie.id}">Eliminar</button>
        `;
        movieList.appendChild(listItem);

        
    });
    // Adjuntar event listeners después de renderizar
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    editButtons.forEach(button => {
        button.addEventListener('click', handleEditMovie); // Llama a la función de edición
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDeleteMovie); // Llama a la función de eliminación
    });
    
}

// Función para obtener todas las películas del backend
async function fetchMovies() {
    try {
        const response = await fetch('/movies');
        const movies = await response.json();
        renderMovieList(movies);
    } catch (error) {
        console.error('Error al obtener películas:', error);
    }
}

// Función para agregar una nueva película (con manejo de imagen)
async function addMovie(event) {
    event.preventDefault();
    const formData = new FormData(addMovieForm); // Usar FormData

    try {
        const response = await fetch('/movies', {
            method: 'POST',
            body: formData 
        });

        if (response.ok) {
            const newMovie = await response.json();
            fetchMovies(); 
            addMovieForm.reset();
        } else {
            console.error('Error al agregar película:', response.statusText);
        }
    } catch (error) {
        console.error('Error al agregar película:', error);
    }
}


// Función para eliminar una película (con manejo de errores y actualización visual)
async function handleDeleteMovie(event) {
    const movieId = event.target.dataset.movieId;

    try {
        const response = await fetch(`/movies/${movieId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Película eliminada correctamente');

            // Actualizar la lista de películas en el frontend
            fetchMovies();

            // Opcional: Mostrar un mensaje de éxito al usuario
            alert('Película eliminada con éxito');
        } else {
            console.error('Error al eliminar película:', response.statusText);

            // Opcional: Mostrar un mensaje de error al usuario en el frontend
            alert('Error al eliminar la película. Por favor, inténtalo de nuevo.');
        }
    } catch (error) {
        console.error('Error al eliminar película:', error);
        
        // Opcional: Mostrar un mensaje de error genérico al usuario
        alert('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
    }
}

// Función para mostrar las películas en la lista (con event listeners adjuntos)
function renderMovieList(movies) {
    movieList.innerHTML = ''; // Limpiar la lista

    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Director: ${movie.director}</p>
            <p>Año: ${movie.year}</p>
            <img src="${movie.image}" alt="${movie.title} Poster" width=25% height=25%>
            <button class="edit-btn" data-movie-id="${movie.id}">Editar</button>
            <button class="delete-btn" data-movie-id="${movie.id}">Eliminar</button>
        `;
        movieList.appendChild(listItem);

        // Adjuntar event listener al botón de eliminar de esta película
        listItem.querySelector('.delete-btn').addEventListener('click', handleDeleteMovie);
    });
}
// Función para mostrar el formulario de edición
async function handleEditMovie(event) {
    const movieId = event.target.dataset.movieId;
    
    try {
        const response = await fetch(`/movies/${movieId}`);
        const movie = await response.json();
        
        editModalTitle.textContent = `Editar Película: ${movie.title}`; // Mostrar título de la película
        editMovieForm.dataset.movieId = movie.id; // Guardar el ID en el formulario
        editMovieForm.querySelector('#editTitle').value = movie.title;
        editMovieForm.querySelector('#editDirector').value = movie.director;
        editMovieForm.querySelector('#editYear').value = movie.year;
        // (Opcional: Mostrar la imagen actual en el formulario)

        editModal.style.display = 'block'; // Mostrar el modal
    } catch (error) {
        console.error('Error al obtener película para editar:', error);
        // Manejo de errores (mostrar mensaje al usuario)
    }
}

// Función para enviar los datos del formulario de edición
async function submitEditForm(event) {
    event.preventDefault();
    const formData = new FormData(editMovieForm);
    const movieId = editMovieForm.dataset.movieId;

    try {
        const response = await fetch(`/movies/${movieId}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            fetchMovies();
            editModal.style.display = 'none'; // Ocultar el modal
        } else {
            console.error('Error al editar película:', response.statusText);
            // Manejo de errores (mostrar mensaje al usuario)
        }
    } catch (error) {
        console.error('Error al editar película:', error);
        // Manejo de errores (mostrar mensaje al usuario)
    }
}

// Event listeners
addMovieForm.addEventListener('submit', addMovie);
editMovieForm.addEventListener('submit', submitEditForm); // Asegúrate de que este listener esté correctamente adjuntado al formulario de edición
closeBtn.addEventListener('click', () => {
    editModal.style.display = 'none';
});
window.onclick = function(event) {
    if (event.target == editModal) {
        editModal.style.display = 'none';
    }
}

// Event listeners
addMovieForm.addEventListener('submit', addMovie);
// Puedes agregar más listeners aquí para los botones de editar

// Cargar las películas al inicio
fetchMovies();