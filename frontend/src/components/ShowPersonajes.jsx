import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowPersonajes = () => {

    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        getAllPersonajes()
    }, [])

    const getAllPersonajes = async () => {
        const response = await axios.get(`${endpoint}/personajes`)
        setPersonajes(response.data)
    }

    const deletePersonaje = async (id) => {

        await axios.delete(`${endpoint}/personaje/${id}`)
        getAllPersonajes()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Color de Pelo</th>
                        <th>Color de Piel</th>
                        <th>Color de Ojos</th>
                        <th>Anyo de Nacimiento</th>
                        <th>Genero</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {personajes.map((personaje) => (
                        <tr key={personaje.id}>
                            <td>{personaje.nombre}</td>
                            <td>{personaje.altura}</td>
                            <td>{personaje.peso}</td>
                            <td>{personaje.color_pelo}</td>
                            <td>{personaje.color_piel}</td>
                            <td>{personaje.color_ojos}</td>
                            <td>{personaje.anyo_nacimiento}</td>
                            <td>{personaje.genero}</td>
                            <td>
                                <Link to={`/edit/${personaje.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={() => deletePersonaje(personaje.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowPersonajes
