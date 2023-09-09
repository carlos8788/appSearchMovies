import React, { useState } from 'react'

export const BuscadorPeliculas = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '8c06b43679e87cb60fc67d9b18cd9e0b'

    const [pelicula, setPelicula] = useState('')
    const [peliculas, setPeliculas] = useState([])



    const handleInputChange = (e) => setPelicula(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${pelicula}&api_key=${API_KEY}`)
            const data = await response.json()
            setPeliculas(data.results)
            console.log(data);
        } catch (error) {
            
        }
          
    }

  return (
    <div className='container'>
        <h1 className='title'>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Escribir pelicula'
            value={pelicula}
            onChange={handleInputChange}
            />
            <button type='submit' className='search-button'>Buscar</button>
        </form>
    </div>
  )
}
