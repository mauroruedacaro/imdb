const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar solicitudes en formato JSON
app.use(express.json());

// Ruta para buscar películas
app.get('/search', async (req, res) => {
    try {
// ---------- CODIGO ICLUIDO 2023OC29 BUSQUEDA 
            const axios = require('axios');

            // Función para buscar películas
            async function searchMovies(searchTerm) {
            try {
                const response = await axios.get(`https://api.imdb.com/search?term=${searchTerm}&apikey= mauruecar`);
                const data = response.data; // Los datos de películas se encuentran en response.data
                return data;
            } catch (error) {
                throw error; // Manejo de errores
            }
            }

            // Función para obtener detalles de una película
            async function getMovieDetails(movieId) {
            try {
                const response = await axios.get(`https://api.imdb.com/movie/${movieId}?apikey=TU_API_KEY`);
                const data = response.data; // Los detalles de la película se encuentran en response.data
                return data;
            } catch (error) {
                throw error; // Manejo de errores
            }
            }

            // Función para filtrar películas por calificaciones de usuarios
            async function filterMovies(minRating) {
            try {
                const response = await axios.get(`https://api.imdb.com/filter?minRating=${minRating}&apikey=TU_API_KEY`);
                const data = response.data; // Los datos de películas filtradas se encuentran en response.data
                return data;
            } catch (error) {
                throw error; // Manejo de errores
            }
            }

            // Ejemplo de uso de las funciones
            searchMovies('Avengers').then((searchResults) => {
            console.log('Resultados de búsqueda:', searchResults);
            }).catch((error) => {
            console.error('Error de búsqueda:', error);
            });

            getMovieDetails('tt4154756').then((movieDetails) => {
            console.log('Detalles de la película:', movieDetails);
            }).catch((error) => {
            console.error('Error al obtener detalles de la película:', error);
            });

            filterMovies(8).then((filteredMovies) => {
            console.log('Películas filtradas por calificación:', filteredMovies);
            }).catch((error) => {
            console.error('Error al filtrar películas:', error);
            });
// ------ FIN DE CODIGO INCLUIDO - 2023OCT29

        const searchTerm = req.query.q;
        // Realiza una solicitud a la API de IMDb para buscar películas con el término de búsqueda
        const response = await axios.get(`https://api.imdb.com/search?term=${searchTerm}&apikey=TU_API_KEY`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'No se pueden buscar películas en este momento.' });
    }
});

// Ruta para consultar detalles de una película
app.get('/movie/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        // Realiza una solicitud a la API de IMDb para obtener detalles de la película con el ID especificado
        const response = await axios.get(`https://api.imdb.com/movie/${movieId}?apikey=TU_API_KEY`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'No se pueden obtener detalles de la película en este momento.' });
    }
});

// Ruta para filtrar películas por calificaciones de usuarios
app.get('/filter', async (req, res) => {
    try {
        const minRating = req.query.minRating;
        // Realiza una solicitud a la API de IMDb para obtener películas con calificaciones superiores a minRating
        const response = await axios.get(`https://api.imdb.com/filter?minRating=${minRating}&apikey=TU_API_KEY`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'No se pueden filtrar películas en este momento.' });
    }
});

// Ruta para la paginación de resultados (si es necesario)
app.get('/search/page/:pageNumber', async (req, res) => {
    try {
        const pageNumber = req.params.pageNumber;
        // Realiza una solicitud a la API de IMDb para obtener resultados de la página especificada
        const response = await axios.get(`https://api.imdb.com/search?page=${pageNumber}&apikey=TU_API_KEY`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'No se pueden paginar los resultados en este momento.' });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
